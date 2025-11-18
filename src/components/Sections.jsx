import { motion } from 'framer-motion'
import { ShieldCheck, FlameKindling, Droplets, Factory, Leaf, Sparkles, Award, Users, Gauge } from 'lucide-react'

export function Mission() {
  return (
    <section className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl font-bold text-white mb-4">Missão</h2>
          <p className="text-slate-300 leading-relaxed">
            Fornecer soluções completas para a higiene e segurança de sistemas de extracção em cozinhas profissionais, 
            combinando inspeção detalhada, limpeza profunda e selagem com revestimento RZ‑Ecoseal, garantindo menos 
            risco de incêndio, maior eficiência energética e menor custo de manutenção.
          </p>
        </motion.div>
        <motion.ul className="grid grid-cols-1 sm:grid-cols-2 gap-4" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          {[{ icon: ShieldCheck, text: 'Segurança e conformidade' }, { icon: Gauge, text: 'Eficiência energética' }, { icon: Droplets, text: 'Higiene e qualidade do ar' }, { icon: Leaf, text: 'Sustentabilidade' }].map(({ icon: Icon, text }) => (
            <li key={text} className="flex items-center gap-3 p-4 rounded-lg bg-white/5 border border-white/10">
              <Icon className="w-5 h-5 text-blue-300" />
              <span className="text-slate-200">{text}</span>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}

export function Process() {
  const steps = [
    { title: 'Inspeção', desc: 'Avaliação técnica no local com relatório fotográfico das condutas e unidades.', icon: SearchIcon },
    { title: 'Limpeza', desc: 'Remoção de gorduras e contaminantes do sistema de extracção.', icon: Droplets },
    { title: 'Selagem (RZ‑Ecoseal)', desc: 'Aplicação de revestimento selante patenteado que cria uma superfície lisa e protegida.', icon: ShieldCheck },
    { title: 'Manutenção', desc: 'Plano de manutenção contínua para garantir desempenho e conformidade.', icon: Sparkles },
  ]
  return (
    <section className="py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-10">Como Funciona</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {steps.map(({ title, desc, icon: Icon }, i) => (
            <motion.div key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="p-6 rounded-xl bg-white/5 border border-white/10">
              <div className="w-10 h-10 rounded-lg bg-blue-600/20 text-blue-300 flex items-center justify-center mb-4">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="text-white font-semibold mb-2">{title}</h3>
              <p className="text-slate-300 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function SearchIcon(props){
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
  )
}

export function Benefits() {
  const items = [
    { title: 'Proteção contra incêndio', desc: 'Reduz a probabilidade de ignição em condutas contaminadas.', icon: FlameKindling, stat: '−90% risco' },
    { title: 'Eficiência energética', desc: 'Fluxo de ar melhorado e equipamentos a trabalhar com menos esforço.', icon: Gauge, stat: 'até 20% +' },
    { title: 'Menos sujidade/gordura', desc: 'Superfícies seladas que acumulam menos resíduos.', icon: Sparkles, stat: '−50% limpeza' },
  ]
  return (
    <section className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-10">Por que escolher a RZ‑CLEAN‑SEAL?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map(({ title, desc, icon: Icon, stat }, i) => (
            <motion.div key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="rounded-xl p-6 bg-white/5 border border-white/10">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-lg bg-blue-600/20 text-blue-300 flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-xs px-2 py-1 rounded bg-blue-500/20 text-blue-200">{stat}</span>
              </div>
              <h3 className="text-white font-semibold mb-2">{title}</h3>
              <p className="text-slate-300 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-900/40 via-blue-800/30 to-blue-900/40 border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-3">Pronto para reduzir riscos e custos?</h2>
        <p className="text-slate-300 mb-6">Solicite uma proposta ou agende uma inspeção técnica com a nossa equipa.</p>
        <a href="/contacto" className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition-colors">Pedir Orçamento</a>
      </div>
    </section>
  )
}
