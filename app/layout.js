import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Head from "next/head";
import Analytics from "./_components/Analytics";

const inter = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "AI Course Generator | Build, Share & Monetize Your Courses",
  description:
    "Create personalized courses with the power of AI. Share with friends and start earning from your content. Simple, fast, and effective.",
  keywords:
    "AI course creator, course builder, e-learning, monetize content, custom curriculum, share courses, educational AI",
  author: "Tushar Rohilla",
  openGraph: {
    title: "Create AI-Powered Courses & Share Your Knowledge",
    description:
      "Design smart courses in minutes using AI. Customize your path, share with friends, and earn from your ideas.",
    url: "https://mrpankajpandey-ai-course.vercel.app/", 
    image: "/images/og-image.png",
    type: "website",
  }
 
};

export default function RootLayout({ children }) {
  return (
    <>
      <ClerkProvider>
        <Head>
          {/* SEO Metadata */}
          <title>{metadata.title}</title>
          <meta name="description" content={metadata.description} />
          <meta name="keywords" content={metadata.keywords} />
          <meta name="author" content={metadata.author} />

          {/* Open Graph Meta Tags */}
          <meta property="og:title" content={metadata.openGraph.title} />
          <meta property="og:description" content={metadata.openGraph.description} />
          <meta property="og:url" content={metadata.openGraph.url} />
          <meta property="og:image" content={metadata.openGraph.image} />
          <meta property="og:type" content={metadata.openGraph.type} />

          {/* Twitter Meta Tags */}
          <meta name="twitter:card" content={metadata.twitter.card} />
          <meta name="twitter:title" content={metadata.twitter.title} />
          <meta name="twitter:description" content={metadata.twitter.description} />
          <meta name="twitter:image" content={metadata.twitter.image} />

          {/* Google AdSense Script */}
          <meta name="google-adsense-account" content="ca-pub-1034833348897670" />
          <script
            data-ad-client={process.env.NEXT_PUBLIC_AD_CLIENT_ID}
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          ></script>
        </Head>
        <Analytics />
        <html lang="en">
          <body
            className={inter.className}
            style={{
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundAttachment: "fixed",
            }}
          >
            <div className="min-h-screen bg-white/80 dark:bg-black/80 backdrop-blur-sm transition-colors">
              {children}
            </div>
          </body>
        </html>
      </ClerkProvider>
    </>
  );
}
