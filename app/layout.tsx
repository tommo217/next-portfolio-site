import Header from '@/components/header'
import Footer from '@/components/footer'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Tom Mo\'s Home Page',
  description: 'Tom is a developer intern at iQIYI, and UBC CS student of class 2024',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className} bg-gray-10 text-gray-950 pt-10`}>
        <div className="bg-[#103783] -z-10 absolute top-[-8rem] right-[11rem] w-[32rem] h-[32rem] rounded-full blur-[15rem]"></div>
        <div className="bg-[#9bafd9] -z-10 absolute top-[-3rem] left-[-3rem] w-[50rem] h-[30rem] rounded-full blur-[15rem] sm:left-[-10rem]"></div>

        <Header/>
        {children}
        <Footer />

      </body>
    </html>
  )
}
