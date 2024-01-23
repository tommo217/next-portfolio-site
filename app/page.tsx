// single page portfolio
import Divider from '@/components/divider'
import Intro from '@/components/intro'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Intro></Intro>
      <Divider/>
    </main>
  )
}
