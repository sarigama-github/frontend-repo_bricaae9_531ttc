import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import { Mission, Benefits, Process, CTA } from '../components/Sections'
import Footer from '../components/Footer'

export default function Home(){
  return (
    <div className="bg-slate-900 text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <Mission />
        <Benefits />
        <Process />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
