import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Contact(){
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e){
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    const form = new FormData(e.currentTarget)
    const payload = {
      nome: form.get('nome'),
      email: form.get('email'),
      telefone: form.get('telefone'),
      mensagem: form.get('mensagem'),
      origem: 'website',
      tipo: form.get('tipo') || 'pedido-orcamento',
      consentimento: !!form.get('consentimento')
    }

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL || ''}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if(!res.ok) throw new Error('Falha ao enviar. Tente novamente.')
      setStatus('Obrigado! Entraremos em contacto em breve.')
      e.currentTarget.reset()
    } catch (err) {
      setStatus(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-slate-900 text-slate-100 min-h-screen">
      <Navbar />
      <main className="pt-24">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl font-bold text-white mb-4">Contacto</h1>
          <p className="text-slate-300 mb-8">Peça um orçamento ou agende uma inspeção. Responderemos rapidamente.</p>

          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6 bg-white/5 border border-white/10 rounded-xl p-6">
            <div>
              <label className="block text-sm mb-1">Nome</label>
              <input name="nome" required className="w-full rounded-md bg-slate-800 border border-white/10 px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input type="email" name="email" required className="w-full rounded-md bg-slate-800 border border-white/10 px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm mb-1">Telefone</label>
              <input name="telefone" className="w-full rounded-md bg-slate-800 border border-white/10 px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm mb-1">Tipo de pedido</label>
              <select name="tipo" className="w-full rounded-md bg-slate-800 border border-white/10 px-3 py-2">
                <option value="pedido-orcamento">Pedido de Orçamento</option>
                <option value="inspecao">Agendar Inspeção</option>
                <option value="parceria">Parceria / Franchising</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm mb-1">Mensagem</label>
              <textarea name="mensagem" rows="5" className="w-full rounded-md bg-slate-800 border border-white/10 px-3 py-2" />
            </div>
            <div className="md:col-span-2 flex items-center gap-2 text-sm">
              <input id="consent" type="checkbox" name="consentimento" className="rounded border-white/10 bg-slate-800" defaultChecked />
              <label htmlFor="consent">Aceito ser contactado para follow‑up.</label>
            </div>
            <div className="md:col-span-2">
              <button disabled={loading} className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-500 disabled:opacity-60">
                {loading ? 'A enviar…' : 'Enviar'}
              </button>
            </div>
            {status && <div className="md:col-span-2 text-sm text-blue-200">{status}</div>}
          </form>
        </section>
      </main>
      <Footer />
    </div>
  )
}
