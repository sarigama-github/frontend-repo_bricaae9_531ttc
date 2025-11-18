import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] pt-24 overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950">
      <div className="absolute inset-0 opacity-40">
        <Spline scene="https://prod.spline.design/4HIlOdlXYYkZW66z/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-950/80 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-blue-500/20 text-blue-200 ring-1 ring-blue-400/30 mb-4">
            Segurança • Tecnologia • Sustentabilidade
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
            Limpeza. Selagem. Manutenção.
          </h1>
          <p className="mt-6 text-lg text-slate-200/90 leading-relaxed">
            A RZ‑CLEAN‑SEAL reduz o risco de incêndio e os custos de limpeza em cozinhas industriais através de um processo patenteado de inspeção, limpeza, selagem com revestimento RZ‑Ecoseal e manutenção contínua.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/contacto" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition-colors">
              Pedir Orçamento
            </Link>
            <Link to="/processo" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors">
              Como Funciona
            </Link>
          </div>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[{
            title: 'Risco de incêndio reduzido',
            text: 'Condutas seladas e limpas reduzem drasticamente a probabilidade de ignição.'
          }, {
            title: 'Poupança energética',
            text: 'Melhor fluxo de ar e menor resistência significam ventilação mais eficiente.'
          }, {
            title: 'Manutenção mais simples',
            text: 'Superfícies seladas acumulam menos gordura, facilitando limpezas futuras.'
          }].map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className="rounded-xl bg-white/5 border border-white/10 p-6 text-slate-200"
            >
              <h3 className="text-white font-semibold mb-2">{b.title}</h3>
              <p className="text-slate-300 text-sm leading-relaxed">{b.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
