import React from 'react';
import Heading from '../components/Heading';

export default function About() { return (
<>
<Heading label="SOBRE" title="Sobre este site">Portfólio desenvolvido para apresentar minha formação, experiências e projetos.</Heading>
<section className="panel">
<h2>Como este site foi construído</h2>
<dl className="tech-list">{[['React', 'Componentes para organizar e reutilizar a interface.'], ['React DOM', 'Renderização dos componentes na página.'], ['JavaScript e JSX', 'Lógica de navegação, conteúdo e interação.'], ['CSS', 'Estilo próprio, layout responsivo e estados de foco.'], ['Vite', 'Servidor de desenvolvimento e geração da versão de produção.'], ['API REST do GitHub', 'Consulta dos repositórios públicos na página Projetos usando fetch.'], ['Hooks do React', 'useState para os estados da interface e useEffect para consultar a API.']].map(([term, description]) => <div key={term}>
<dt>{term}</dt>
<dd>{description}</dd>
</div>)}</dl>
<p className="muted">A navegação usa links e o endereço da página, sem biblioteca adicional de rotas. A API é pública e não exige chave.</p>
</section>
</>
);
}
