import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'

const poppins = Poppins({
  weight:['400','600'],
  subsets:['latin'],
 })

export const metadata: Metadata = {
  title: 'QUOKKA LABS',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className='sticky top-0'>
        <Navbar />
        </div>
       
        <main>
        {children}
        </main>
        </body>
    </html>
  )
}
