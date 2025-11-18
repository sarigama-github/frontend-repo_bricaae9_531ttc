import Home from './pages/Home'
import Contact from './pages/Contact'
import BasicPage from './pages/BasicPage'
import { Routes, Route } from 'react-router-dom'

export default function App(){
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<BasicPage title="Sobre Nós">{/* Conteúdo detalhado pode ser expandido */}</BasicPage>} />
      <Route path="/solucoes" element={<BasicPage title="Soluções">{/* Detalhes de serviços */}</BasicPage>} />
      <Route path="/processo" element={<BasicPage title="Processo">{/* Etapas do método */}</BasicPage>} />
      <Route path="/beneficios" element={<BasicPage title="Benefícios">{/* Infográficos */}</BasicPage>} />
      <Route path="/casos" element={<BasicPage title="Casos de Sucesso">{/* Depoimentos e antes/depois */}</BasicPage>} />
      <Route path="/franchising" element={<BasicPage title="Franchising / Parceiros">{/* Oportunidades */}</BasicPage>} />
      <Route path="/blog" element={<BasicPage title="Blog / Notícias">{/* Artigos */}</BasicPage>} />
      <Route path="/contacto" element={<Contact />} />
    </Routes>
  )
}
