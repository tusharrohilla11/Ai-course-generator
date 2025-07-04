import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Analytics from "./_components/Analytics";

const inter = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "AI Course Generator | Build, Share & Monetize Your Courses",
  description:
    "Create personalized courses with the power of AI. Share with friends and start earning from your content. Simple, fast, and effective.",
  keywords:
    "AI course creator, course builder, e-learning, monetize content, custom curriculum, share courses, educational AI",
  authors: [{ name: "Tushar Rohilla" }],
  openGraph: {
    title: "Create AI-Powered Courses & Share Your Knowledge",
    description:
      "Design smart courses in minutes using AI. Customize your path, share with friends, and earn from your ideas.",
    url: "https://ai-course-generator-tushar.vercel.app/", 
    images: [{ url: "/logo.png" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Course Generator",
    description: "Generate custom AI courses effortlessly. Start your learning journey today!",
    images: ["/logo.png"],
  },
  other: {
    "google-adsense-account": "ca-pub-1034833348897670"
  }
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          />
        </head>
        <body
          className={inter.className}
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
          }}
        >
          <Analytics />
          <div className="min-h-screen bg-white/80 dark:bg-black/80 backdrop-blur-sm transition-colors">
            {children}
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
