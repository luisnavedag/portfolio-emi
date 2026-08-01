import { sections } from './data/site'
import { useScrollProgress } from './hooks/useScrollProgress'
import Rail from './components/Rail'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Work from './components/Work'
import About from './components/About'
import Skills from './components/Skills'
import Process from './components/Process'
import Clients from './components/Clients'
import Contact from './components/Contact'
import WhatsAppFab from './components/WhatsAppFab'

export default function App() {
  const { progress, active } = useScrollProgress(sections)

  return (
    <div className="grain min-h-screen bg-ink text-bone">
      <Rail sections={sections} progress={progress} active={active} />
      <Nav />
      <main>
        <Hero />
        <Work />
        <About />
        <Skills />
        <Process />
        <Clients />
        <Contact />
      </main>
      <WhatsAppFab />
    </div>
  )
}
