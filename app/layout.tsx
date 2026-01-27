import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { SocialSidebar } from "@/components/social-sidebar"
import { ChatbotWidget } from "@/components/chatbot-widget"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" })

export const metadata: Metadata = {
  title: "Codecyclon | Futuristic Software & Web Development",
  description:
    "Codecyclon is a premium software agency crafting high-performance, visually stunning websites and web platforms with cutting-edge technology.",
  keywords:
    "software agency, website development, web app development, maintenance, support, landing pages, e-commerce, SaaS",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('codecyclon-theme') || 'dark';
                document.documentElement.className = theme;
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider defaultTheme="dark">
          {children}
          <SocialSidebar />
          <ChatbotWidget />
        </ThemeProvider>
      </body>
    </html>
  )
}
