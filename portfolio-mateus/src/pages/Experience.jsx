import React from 'react';
import Heading from '../components/Heading';
import Tags from '../components/Tags';

export default function Experience() { return (
<>
<Heading label="PROFISSIONAL" title="Experiência profissional">Minha atuação em desenvolvimento back-end na residência tecnológica.</Heading>
<article className="panel">
<p className="eyebrow">2026 · RECIFE, PE</p>
<h2>Desenvolvedor Back-end</h2>
<p className="subtitle">Residente Tecnológico · Porto Digital / Beyond Co.</p>
<p>Atuação em uma solução SaaS para o agronegócio integrada ao WhatsApp, voltada a agricultores e cooperativas.</p>
<ul className="bullets">
<li>Implementação de componentes de back-end e infraestrutura com TypeScript e Python.</li>
<li>Desenvolvimento de fluxo de caixa digital para registrar receitas e despesas e alimentar um dashboard mensal.</li>
<li>Automação de relatórios financeiros em PDF e CSV para apoiar análises de crédito rural (Pronaf).</li>
</ul>
<Tags items={['TypeScript', 'Python', 'SaaS', 'WhatsApp', 'PDF / CSV']}/>
</article>
</>
);
}
