import React from 'react';
import Heading from '../components/Heading';
import Tags from '../components/Tags';
import GithubRepos from '../components/GithubRepos';

export default function Projects() { return (
<>
<Heading label="PORTFÓLIO" title="Projetos">Trabalhos desenvolvidos durante minha formação e no Hacka/TS.</Heading>
<article className="panel featured">
<p className="eyebrow">HACKA/TS · 2026</p>
<h2>Sistema de recomendação · Conecta Recife</h2>
<p>Desenvolvi um sistema de recomendação de serviços que combina, em uma fórmula de pesos, o perfil do cidadão, a popularidade geral, o histórico de cliques e os serviços frequentemente utilizados em conjunto.</p>
<p>Utilizei a métrica <strong>Hit@10</strong> para avaliar se um serviço relevante aparece entre as dez recomendações.</p>
<Tags items={['Java', 'Spring Boot', 'Recomendação', 'Hit@10']}/>
<a className="text-link" href="https://github.com/hackats/conecta-recife-api" target="_blank" rel="noreferrer">Ver repositório ↗</a>
</article>
<article className="panel">
<p className="eyebrow">KICK-OFF EMBARQUE DIGITAL · 2025</p>
<h2>Projeto Ágora</h2>
<p>Concepção de uma plataforma de planos de aula com hubs comunitários, desafios e inteligência artificial, apoiando educadores na criação e adaptação de atividades com materiais compartilhados.</p>
<p className="recognition">↗ 2º lugar no Kick-Off Embarque Digital</p>
</article>
<GithubRepos/>
</>
);
}
