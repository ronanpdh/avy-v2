"use client"

import { useEffect, useState } from 'react';
import { createClient } from "@/utils/supabase/client";
import { PieChart, SparkLineChart } from '@mui/x-charts';
import clsx from 'clsx';
import {
    blueberryTwilightPalette,
    mangoFusionPalette,
    cheerfulFiestaPalette,
} from '@mui/x-charts/colorPalettes';


export default function Analytics() {

    // const delay = (ms: number): Promise<void> => new Promise(resolve => setTimeout(resolve, ms));

    const supabase = createClient();

    interface DistortionTypes {
        length: number,
        count: number,
        examples: string,
        distortion: string,
        sentiment: string,
    }

    interface PieData extends DistortionTypes {
        index: number,
        value: number,
        label: string,
        // count: number,
    }

    interface AnalyticsData {
        id: number,
        distortion_types: DistortionTypes,
        sentiment: string,
        distortion_count: number,
        created_at: number,
    }

    interface DateData {
        created_at: number;
    }

    interface SentimentChartData {
        id: number,
        value: number,
        label: string
    }

    const [analyticsData, setAnalyticsData] = useState<AnalyticsData[]>([]);
    // const [distortionTypes, setDistortionTypes] = useState<DistortionTypes[][]>([]);
    const [pieData, setPieData] = useState<PieData[]>([]);
    const [sentimentChartData, setSentimentChartData] = useState<SentimentChartData[]>([]);
    const [overallCount, setOverallCount] = useState<number>(0);
    const [overallSentiment, setOverallSentiment] = useState<SentimentChartData | null>(null);


    const fetchData = async () => {
        try {
            let { data: entries } = await supabase
                .from('entries')
                .select('id, distortion_types, sentiment, distortion_count, created_at')
            if (entries) {
                setAnalyticsData(entries)
            }
        } catch (error) {
            console.log(`Couldn't fetch data ${error}`)
        }
    };

    // Function to set sentiment data - needs updating to improve efficiency

    const setSentimentData = (data: AnalyticsData[]) => {
        let negative = 0, positive = 0, neutral = 0
        data.forEach(item => {
            switch (item.sentiment) {
                case "Negative":
                    negative += 1;
                    break;
                case "Positive":
                    positive += 1;
                    break;
                case "Neutral":
                    neutral += 1;
                    break;
                case null:
                    neutral += 1;
                    break;
                default:
                    console.log("Unexpected sentiment:", item.sentiment);
                    break;
            }
        });
        setSentimentChartData([
            { id: 0, value: negative, label: 'Negative' },
            { id: 1, value: positive, label: 'Positive' },
            { id: 2, value: neutral, label: 'Neutral' }
        ])
    };

    const setPieDataFunction = (distortionTypes: DistortionTypes[]) => {

        // Filter out undefined or empty distortion types
        const filteredDistortionTypes = distortionTypes.filter(item => item.distortion !== undefined && item.distortion !== '');

        // create Map object to aggregate all distortion types 
        const distortionMap = new Map<string, PieData>()

        filteredDistortionTypes.forEach((item) => {
            if (distortionMap.has(item.distortion)) {
                const existingItem = distortionMap.get(item.distortion);
                if (existingItem) {
                    existingItem.value += item.count
                }
            } else {
                distortionMap.set(item.distortion, {
                    index: distortionMap.size + 1,
                    value: item.count,
                    label: `${item.distortion}`,
                    length: distortionTypes.length,
                    sentiment: item.sentiment,
                    examples: item.examples,
                    count: item.count,
                    distortion: item.distortion
                });
            }
        });

        // Create Array for PieData
        const pieData: PieData[] = Array.from(distortionMap.values());

        setPieData(pieData)

    };

    const countFunction = (count: number = 0) => {
        for (let i = 0; i < numberOfEntries; i++) {
            count += analyticsData[i].distortion_count
            setOverallCount(count)
        }
    }

    // Set number of entries variable for guage chart
    const numberOfEntries: number = analyticsData?.length;

    // Check if the array is not empty and find the sentiment with the highest value
    const overallSentimentFunction = () => {
        const highestSentiment = sentimentChartData.length > 0
            ? sentimentChartData.reduce((prev, current) => (prev.value > current.value) ? prev : current)
            : null;
        setOverallSentiment(highestSentiment)
    }


    const processAnalyticsData = () => {
        setSentimentData(analyticsData);
        const distortionTypes = analyticsData.flatMap(item =>
            (item.distortion_types && item.distortion_types.length > 0) ? item.distortion_types : []
        );
        setPieDataFunction(distortionTypes);
        countFunction();
        overallSentimentFunction();
    }


    // Fetch data onload and call organiseData function
    useEffect(() => {
        fetchData();
        if (analyticsData.length > 0) {
            processAnalyticsData();
            return
        } else {
            console.log(`Error fetching and organising data`)
        }

    }, [analyticsData]);


    return (
        <>
            <div>
                <h3 className="text-base font-semibold leading-6 text-gray-900">All Time Analytics</h3>
                <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
                    <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6 backdrop-blur-md">
                        <dt className="truncate text-sm font-medium text-gray-500">Total Entries</dt>
                        <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">{numberOfEntries}</dd>
                    </div>
                    <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
                        <dt className="truncate text-sm font-medium text-gray-500">Total Distortion Count</dt>
                        <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">{overallCount}</dd>
                    </div>
                    <div className={clsx(
                        "overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6",
                        {
                            'bg-gradient-to-r from-teal-200 to-teal-500 text-white': overallSentiment?.label === "Positive",
                            'bg-gradient-to-r from-rose-400 to-red-500 text-white': overallSentiment?.label === "Negative",
                            'bg-gradient-to-r from-blue-200 to-cyan-200 text-white': overallSentiment?.label === "Neutral"
                        }
                    )}
                    >
                        <dt className="truncate text-sm font-medium">Overall Sentiment</dt>
                        <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">{overallSentiment?.label}</dd>
                    </div>

                </dl>
            </div>
            <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-3 lg:gap-8 mt-12">
                {/* Left column */}
                <div className="grid grid-cols-1 gap-4 lg:col-span-2 h-full bg-white/40">
                    <section aria-labelledby="section-1-title">
                        <h2 className="sr-only text-gray-700" id="section-1-title">
                            Distortions and Sentiment
                        </h2>
                        <div className="overflow-hidden rounded-lg bg-white/30 backdrop-blur-sm shadow">
                            <div className="overflow-hidden bg-white/60 shadow sm:rounded-md">
                                <h3 className="p-2 text-gray-500 font-semibold">Distortion Types and Frequency</h3>
                                {pieData ? (
                                    <PieChart
                                        colors={mangoFusionPalette}
                                        series={[
                                            {
                                                data: pieData,
                                                highlightScope: { faded: 'global', highlighted: 'item' },
                                                faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                                                innerRadius: 30,
                                                outerRadius: 125,
                                                paddingAngle: 5,
                                                cornerRadius: 5,
                                                startAngle: -90,
                                                endAngle: 180,

                                                cx: 300,
                                                cy: 300,
                                            }
                                        ]}
                                        height={500}
                                        width={500}
                                        slotProps={{
                                            legend: {
                                                hidden: false, labelStyle: { fontSize: 14, fill: 'gray' }, direction: 'row', position: { vertical: 'top', horizontal: 'left' },
                                                itemMarkWidth: 20,
                                                itemMarkHeight: 2,
                                                markGap: 5,
                                                itemGap: 10,
                                            }
                                        }}
                                    />


                                ) : (
                                    <div>
                                        {/* Need to add skeleton */}
                                    </div>
                                )}
                            </div>


                        </div>
                    </section>
                </div>

                {/* Right column */}
                <div className="grid grid-cols-1 gap-4 h-full bg-white/65">
                    <section aria-labelledby="section-2-title">
                        <h2 className="sr-only" id="section-2-title">
                            Pie Chart for sentiment
                        </h2>
                        <div className="overflow-hidden rounded-lg shadow">
                            <h3 className="p-2 text-gray-500 font-semibold">Sentiment</h3>
                            <PieChart
                                colors={blueberryTwilightPalette}
                                series={[
                                    {
                                        data: sentimentChartData,
                                        highlightScope: { faded: 'global', highlighted: 'item' },
                                        faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                                        innerRadius: 30,
                                        outerRadius: 125,
                                        cornerRadius: 5,
                                        startAngle: -90,
                                        endAngle: 180,
                                        cx: 200,
                                        cy: 250,
                                    }
                                ]}
                                height={500}
                                width={500}
                                slotProps={{
                                    legend: {
                                        hidden: false, labelStyle: { fontSize: 14, fill: 'gray' }, direction: 'column', position: { vertical: 'top', horizontal: 'left' },
                                        itemMarkWidth: 20,
                                        itemMarkHeight: 2,
                                        markGap: 5,
                                        itemGap: 10,
                                    }
                                }}
                            />
                        </div>
                    </section>
                </div>

            </div >
        </>
    )
}