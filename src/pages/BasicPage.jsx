import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function BasicPage({ title, children }){
  return (
    <div className="bg-slate-900 text-slate-100 min-h-screen">
      <Navbar />
      <main className="pt-24">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl font-bold text-white mb-6">{title}</h1>
          <div className="prose prose-invert max-w-none">
            {children}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
