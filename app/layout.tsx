import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { Toaster } from "sonner";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "AVY",
  description: "Your Journaling Assistant",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.className} `}>
      <body className="bg-background text-foreground h-screen w-screen">
        <main className="h-full w-full overflow-x-hidden">
          {children}
          <Toaster richColors/>
        </main>
      </body>
    </html>
  );
}
