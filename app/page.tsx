// single page portfolio
import Divider from '@/components/divider'
import Intro from '@/components/intro'
import About from '@/components/about'
import Projects from '@/components/projects'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Intro></Intro>
      <Divider/>
      <About />
      <Projects />
    </main>
  )
}
