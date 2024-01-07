import Header from '@/components/header'
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
    <html lang="en">
      <body className={`${inter.className} bg-gray-10 text-gray-950 h-[100rem]`}>
        <div className="bg-[#f9d7d9] -z-10 absolute top-[-8rem] right-[11rem] w-[32rem] h-[32rem] rounded-full blur-[15rem]"></div>
        <div className="bg-[#d0cbf3] -z-10 absolute top-[-3rem] left-[-3rem] w-[50rem] h-[30rem] rounded-full blur-[15rem] sm:left-[-10rem]"></div>

        <Header/>
        {children}

      </body>
    </html>
  )
}
