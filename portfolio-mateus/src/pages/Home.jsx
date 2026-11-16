import React from 'react';
import Tags from '../components/Tags';

export default function Home() {
  return (
    <>
      <section className="intro-section">
        <img className="portrait" src="/mateus.jpg" alt="Mateus Ferreira de Moura" width="1600" height="1600" />
        <div className="intro-copy">
          <p className="location">Recife, Pernambuco</p>
          <h1>Mateus Ferreira<br />de Moura</h1>
          <p className="role">Estudante e desenvolvedor back-end</p>
          <p>Estudo Sistemas para Internet na UNICAP, pelo Embarque Digital. Meu foco é Java e Spring Boot, e gosto de aprender construindo projetos.</p>
          <p>Já trabalhei com TypeScript e Python em uma residência tecnológica e desenvolvi um recomendador de serviços para o Conecta Recife no Hacka/TS.</p>
          <div className="contact-links">
            <a href="https://github.com/Mateus-F-Moura" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/mateusfmoura" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="mailto:mf753161@gmail.com">E-mail</a>
          </div>
        </div>
      </section>
      <section className="home-section">
        <h2>Com o que trabalho</h2>
        <Tags items={['Java', 'Spring Boot', 'PostgreSQL', 'TypeScript', 'Python', 'React', 'Git']} />
      </section>
      <section className="home-section">
        <div className="section-title"><h2>Alguns projetos</h2><a href="/projetos">Ver projetos</a></div>
        <a className="project-row" href="/projetos">
          <span className="project-year">2026</span>
          <div><h3>Conecta Recife</h3><p>Recomendação de serviços públicos com Java e Spring Boot. Desenvolvido no Hacka/TS.</p></div>
          <span aria-hidden="true">↗</span>
        </a>
        <a className="project-row" href="/projetos">
          <span className="project-year">2025</span>
          <div><h3>Ágora</h3><p>Proposta de plataforma para educadores. 2º lugar no Kick-Off Embarque Digital.</p></div>
          <span aria-hidden="true">↗</span>
        </a>
      </section>
    </>
  );
}
