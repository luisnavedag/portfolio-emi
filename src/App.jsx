import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Work from './components/Work'
import Process from './components/Process'
import Clients from './components/Clients'
import Contact from './components/Contact'
import WhatsAppFab from './components/WhatsAppFab'

export default function App() {
  return (
    <div className="min-h-screen bg-ink text-bone">
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <Work />
        <Process />
        <Clients />
        <Contact />
      </main>
      <WhatsAppFab />
    </div>
  )
}
