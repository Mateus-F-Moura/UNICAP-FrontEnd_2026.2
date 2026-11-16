import React from 'react';

const links = [['/', 'Home'], ['/sobre', 'Sobre'], ['/academico', 'Acadêmico'], ['/experiencia', 'Profissional'], ['/projetos', 'Projetos']];

export default function Header({ path }) {
  return (<header className="site-header">
<a className="brand" href="/">mateus<span>.</span>
</a>
<nav aria-label="Navegação principal">{links.map(([url, label]) => <a key={url} href={url} aria-current={path === url ? 'page' : undefined}>{label}</a>)}</nav>
</header>);
}
