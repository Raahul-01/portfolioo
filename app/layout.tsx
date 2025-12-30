import type React from "react"
import type { Metadata, Viewport } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
import { InteractiveGrid } from "@/components/ui/interactive-grid"
import { CommandMenu } from "@/components/command-menu"

export const metadata: Metadata = {
  title: "Rahul Kumar  - Full Stack Developer",
  description:
    "Portfolio of Rahul Kumar Verma - Full Stack Developer specializing in React, Next.js, AI/ML, and Data Science",
  generator: "v0.app",
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

import { ThemeProvider } from "@/components/theme-provider"
import { ThemePicker } from "@/components/theme-picker"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="bg-noise" />
          <InteractiveGrid />
          <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
          <CommandMenu />
          <ThemePicker />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
