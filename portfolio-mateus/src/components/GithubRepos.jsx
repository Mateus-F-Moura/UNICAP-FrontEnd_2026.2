import React from 'react';
import { useEffect, useState } from 'react';
const github = 'https://github.com/Mateus-F-Moura';

export default function GithubRepos() {
  const [state, setState] = useState({ loading: true, repos: [], error: '' });
  const [attempt, setAttempt] = useState(0);
  useEffect(() => {
    const controller = new AbortController();
    setState({ loading: true, repos: [], error: '' });
    fetch('https://api.github.com/users/Mateus-F-Moura/repos?sort=updated&per_page=6', { signal: controller.signal })
      .then(response => { if (!response.ok) throw new Error('Não foi possível consultar o GitHub agora.'); return response.json(); })
      .then(repos => setState({ loading: false, repos, error: '' }))
      .catch(error => { if (error.name !== 'AbortError') setState({ loading: false, repos: [], error: 'Não foi possível carregar os repositórios. Tente novamente ou acesse meu GitHub.' }); });
    return () => controller.abort();
  }, [attempt]);
  return <section className="github-section">
<p className="eyebrow">INTEGRAÇÃO COM API</p>
<h2>Direto do meu GitHub</h2>
<p>Repositórios públicos atualizados recentemente, consultados pela API do GitHub.</p>
<div aria-live="polite">{state.loading ? <p>Carregando repositórios…</p> : state.error ? <div className="panel">
<p>{state.error}</p>
<button onClick={() => setAttempt(attempt + 1)}>Tentar novamente</button> <a href={github}>Acessar GitHub ↗</a>
</div> : state.repos.length === 0 ? <p>Nenhum repositório público encontrado.</p> : <div className="repo-grid">{state.repos.map(repo => <a className="repo" href={repo.html_url} key={repo.id} target="_blank" rel="noreferrer">
<h3>{repo.name} ↗</h3>
<p>{repo.description || 'Repositório público no GitHub.'}</p>
<small>{repo.language || 'Sem linguagem informada'} · ★ {repo.stargazers_count}</small>
</a>)}</div>}</div>
</section>;
}
