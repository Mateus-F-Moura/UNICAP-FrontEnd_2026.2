import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Academic from './pages/Academic';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Header from './components/Header';
import Footer from './components/Footer';
import Heading from './components/Heading';

const pages = { '/': Home, '/sobre': About, '/academico': Academic, '/experiencia': Experience, '/projetos': Projects };

export default function App() { const path = window.location.pathname.replace(/\/$/, '') || '/'; const Page = pages[path]; return (
<>
<a className="skip" href="#conteudo">Pular para o conteúdo</a>
<Header path={path} />
<main id="conteudo">{Page ? <Page/> : <>
<Heading label="404" title="Página não encontrada."/>
<a href="/">Voltar para Home</a>
</>}</main>
<Footer />
</>
);
}
