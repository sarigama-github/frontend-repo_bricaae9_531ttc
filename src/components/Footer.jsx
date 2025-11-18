export default function Footer(){
  return (
    <footer className="bg-slate-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-4 gap-8 text-slate-300">
        <div>
          <div className="text-white font-semibold mb-2">RZ‑CLEAN‑SEAL</div>
          <p className="text-sm opacity-80">Limpeza, selagem e manutenção de sistemas de extracção em cozinhas profissionais.</p>
        </div>
        <div>
          <div className="text-white font-semibold mb-2">Páginas</div>
          <ul className="space-y-1 text-sm">
            <li><a href="/sobre" className="hover:text-white">Sobre Nós</a></li>
            <li><a href="/solucoes" className="hover:text-white">Soluções</a></li>
            <li><a href="/processo" className="hover:text-white">Processo</a></li>
            <li><a href="/beneficios" className="hover:text-white">Benefícios</a></li>
            <li><a href="/casos" className="hover:text-white">Casos</a></li>
            <li><a href="/franchising" className="hover:text-white">Franchising</a></li>
            <li><a href="/blog" className="hover:text-white">Blog</a></li>
            <li><a href="/contacto" className="hover:text-white">Contacto</a></li>
          </ul>
        </div>
        <div>
          <div className="text-white font-semibold mb-2">Contactos</div>
          <ul className="space-y-1 text-sm">
            <li>Email: info@rz-clean-seal.com</li>
            <li>Telefone: +351 000 000 000</li>
            <li>Horário: Seg-Sex 9h-18h</li>
          </ul>
        </div>
        <div>
          <div className="text-white font-semibold mb-2">Legal</div>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:text-white">Política de Privacidade</a></li>
            <li><a href="#" className="hover:text-white">Termos de Uso</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs text-slate-400 py-4 border-t border-white/10">© {new Date().getFullYear()} RZ‑CLEAN‑SEAL. Todos os direitos reservados.</div>
    </footer>
  )
}
