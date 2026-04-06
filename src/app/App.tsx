import { Contact } from './components/Contact'
import { Countries } from './components/Countries'
import { Features } from './components/Features'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Process } from './components/Process'
import { Services } from './components/Services'
import { About } from './components/About';
import { FreightCalculator } from './components/FreightCalculator';
import { WhatsAppFloat } from './components/WhatsAppFloat';

export function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        //<Countries />
        <Process />
        <Features />
        <FreightCalculator />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
