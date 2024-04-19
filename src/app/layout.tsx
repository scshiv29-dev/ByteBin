import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'
import Head from 'next/head'
import { Inter as FontSans } from "next/font/google"
import { dark } from '@clerk/themes' 
import { cn } from "@/lib/utils"
import Navbar from '@/components/navbar'
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider
      appearance={{
      baseTheme: dark
    }} afterSignInUrl='/' afterSignUpUrl='/'>
      <html lang="en">
      <Head>
        <title>ByteBin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <body  className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}>
          <Navbar/>
          
          {children}</body>
      </html>
    </ClerkProvider>
  )
}