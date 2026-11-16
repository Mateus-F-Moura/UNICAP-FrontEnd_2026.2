import React from 'react';
import Heading from '../components/Heading';

export default function Academic() { return (
<>
<Heading label="ACADÊMICO" title="Formação acadêmica">Minha graduação e os cursos que complementam meus estudos.</Heading>
<article className="panel">
<p className="eyebrow">GRADUAÇÃO · EM ANDAMENTO</p>
<h2>Sistemas para Internet</h2>
<p className="subtitle">Universidade Católica de Pernambuco · Embarque Digital</p>
<p>3º período · Conclusão prevista: 2º semestre de 2027</p>
<p>Formação em programação, desenvolvimento web, bancos de dados, engenharia de software e design de interação. Estudos atuais em orientação a objetos, front-end, redes e gestão de projetos.</p>
</article>
<section className="panel">
<h2>Cursos complementares</h2>
<ul className="course-list">
<li>
<strong>Desenvolvimento Back-end</strong>
<span>SENAI · 2025</span>
</li>
<li>
<strong>Java e Spring Boot</strong>
<span>DevSuperior / Udemy · 2025</span>
</li>
<li>
<strong>AWS Practitioner e IA Generativa</strong>
<span>AWS Treina Brasil · 2026</span>
</li>
<li>
<strong>Especialização em Recursos Humanos</strong>
<span>NeoTech · 2022</span>
</li>
<li>
<strong>Pacote Office</strong>
<span>Udemy · 2025</span>
</li>
</ul>
<p className="muted">Idiomas: português avançado e inglês avançado.</p>
</section>
</>
);
}
