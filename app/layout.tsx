import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Aayush Sharma - Web Developer & Computer Science Student",
  description:
    "Explore Aayush Sharma's projects, skills, and achievements. Web developer and computer science student passionate about creating innovative solutions and sharing knowledge.",
  openGraph: {
    title: "Aayush Sharma - Web Developer & Computer Science Student",
    description:
      "Explore Aayush Sharma's projects, skills, and achievements. Web developer and computer science student passionate about creating innovative solutions and sharing knowledge.",
    images: [
      {
        url: "https://aayushkimehnat.vercel.app/img/aayush.png",
        width: 1200,
        height: 630,
        alt: "Aayush Sharma",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aayush Sharma - Web Developer & Computer Science Student",
    description:
      "Explore Aayush Sharma's projects, skills, and achievements. Web developer and computer science student passionate about creating innovative solutions and sharing knowledge.",
    images: ["https://aayushkimehnat.vercel.app/img/aayush.png"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

