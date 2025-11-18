import { useState } from 'react'
import { Menu, X, ShieldCheck, Phone } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Início' },
  { to: '/sobre', label: 'Sobre Nós' },
  { to: '/solucoes', label: 'Soluções' },
  { to: '/processo', label: 'Processo' },
  { to: '/beneficios', label: 'Benefícios' },
  { to: '/casos', label: 'Casos' },
  { to: '/franchising', label: 'Franchising' },
  { to: '/blog', label: 'Blog' },
  { to: '/contacto', label: 'Contacto' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 z-50 w-full bg-slate-900/70 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="p-2 rounded-lg bg-blue-600/20 text-blue-400 border border-blue-500/30">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <span className="font-semibold tracking-wide text-white group-hover:text-blue-200 transition-colors">RZ‑CLEAN‑SEAL</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive ? 'text-white bg-white/10' : 'text-slate-200 hover:text-white hover:bg-white/10'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link to="/contacto" className="ml-2 inline-flex items-center gap-2 px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-500 transition-colors">
              <Phone className="w-4 h-4" />
              Pedir Orçamento
            </Link>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center p-2 text-slate-200 hover:text-white"
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir Menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/95">
          <div className="px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-sm font-medium ${
                    isActive ? 'text-white bg-white/10' : 'text-slate-200 hover:text-white hover:bg-white/10'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link to="/contacto" onClick={() => setOpen(false)} className="block text-center mt-2 w-full px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-500">
              Pedir Orçamento
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
