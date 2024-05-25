"use server"

import { createClient } from "@/utils/supabase/server";
import Anthropic from "@anthropic-ai/sdk";

// Create supabase server client
const supabase = createClient();

// Anthropic Api Key
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

// Take Journal entry and analyse with Claude-3
export async function useAntrhopic(journalEntry: any, title: any) {
  const msg = await anthropic.messages.create({
    model: "claude-3-opus-20240229",
    max_tokens: 1000,
    temperature: 0,
    system: "As a language model with expertise in psychology, your task is to analyze the following journal entry and give me the response in a JSON dictionary. Begin by evaluating the overall sentiment of the entry, determining whether it is positive, negative, or neutral. Next, proceed to identify and count any cognitive distortions present in the text. Cognitive distortions are ways in which our minds convince us of something that isn't true. Common distortions include black-and-white thinking, overgeneralization, filtering, discounting the positive, and catastrophizing, among others.\n\n1. Provide a summary of the journal entry's sentiment with either Positive, Negative or Neutral. This should be a single word and not used within a sentence for example, \"Sentiment: Positive\"\n2. List and count each type of cognitive distortion found. Cite specific examples from the text and list them.\n3. Provide a round number of how many thought distortions there are in total.\n\n\nIf no distortions are found please return the senitment. \n\n\nYour analysis will help in understanding the emotional landscape and cognitive patterns reflected in the journal entry, similar to a psychological assessment.",
    messages: [
      {
        "role": "user",
        "content": [
          {
            "type": "text",
            "text": journalEntry
          }
        ]
      }
    ]
  });

  // Save Entry Title to add to DB
  const entryTitle = title;

  // Convert string response and convert to JSON
  const stringResponse = msg.content[0].text
  const jsonObject = JSON.parse(stringResponse)

  // Set Variables for response to send to DB
  const cognitiveDistortions = jsonObject.cognitive_distortions;
  console.log(cognitiveDistortions)
  const sentiment = jsonObject.sentiment;
  const distortionCount = jsonObject.total_distortions;


  async function sendEntry() {
    // Get current user_id 
    const { data: { user } } = await supabase.auth.getUser();
    // Check if user exists and is authenticated
    if (!user) {
      console.error("User not Authenticated");
      return;
    }

    // Send response to database for archive 
    const { data, error } = await supabase
      .from('entries')
      .insert([
        {
          title: entryTitle,
          body: journalEntry,
          distortion_types: cognitiveDistortions,
          sentiment: sentiment,
          distortion_count: distortionCount,
          user_id: user.id
        }
      ])

    if (error) {
      throw (error)
    }
    console.log(data);
  }

  try {
    sendEntry()
  } catch (error) {
    console.log(error + "data was not sent to Database")
  }
}