# Portfólio — Mateus Ferreira de Moura

Atividade de currículo/portfólio em React. Projeto propositalmente simples, com CSS próprio, cinco páginas e integração real com a API pública do GitHub.

## Executar

Requer Node.js 20.19+ ou 22.12+.

```sh
npm install
npm run dev
```

## Gerar a versão de produção

```sh
npm run build
npm run preview
```

## Páginas

- `/`: Home e contato.
- `/sobre`: tecnologias, módulos e integração utilizados.
- `/academico`: formação, cursos e idiomas.
- `/experiencia`: residência tecnológica na Beyond Co.
- `/projetos`: Hacka/TS, Ágora e repositórios consultados pela API.

## API

`GET https://api.github.com/users/Mateus-F-Moura/repos?sort=updated&per_page=6`

A página Projetos usa `fetch`, `useEffect` e `useState`. Há estados de carregamento, lista vazia e erro com botão para tentar novamente. A API pública pode limitar o número de consultas. Nenhum token é necessário ou incluído.

## Entrega da atividade

1. Crie um repositório na sua conta do GitHub e envie os arquivos deste projeto (sem node_modules e dist).
2. Na Vercel, importe esse repositório. Selecione Vite, comando `npm run build` e pasta de saída `dist`. O vercel.json já permite acessar diretamente as cinco rotas.
3. Grave até um minuto navegando pelas páginas. Publique no YouTube como público ou não listado.
4. Entregue os três links: GitHub, Vercel e YouTube. A prévia do ChatGPT não substitui a publicação exigida na Vercel.

### Roteiro para o vídeo (até 60 segundos)

- 0–10s: Home — nome, foco em back-end e contatos.
- 10–20s: Acadêmico — UNICAP e cursos.
- 20–30s: Profissional — residência na Beyond Co.
- 30–45s: Projetos — recomendador do Hacka/TS, Hit@10 e Ágora.
- 45–55s: mostre os repositórios carregados pela API do GitHub.
- 55–60s: Sobre — React, CSS, Vite e integração com a API.

## Organização do código

- `src/components/`: Header, Footer, Heading, Tags e GithubRepos.
- `src/pages/`: Home, About, Academic, Experience e Projects.
- `src/App.jsx`: escolhe a página pelo endereço e reúne o cabeçalho e o rodapé.
- `src/main.jsx`: inicia o React e importa o CSS global.
- `src/style.css`: estilos do site.

Para editar o conteúdo, abra o arquivo da página correspondente. Os componentes compartilhados são importados pelas páginas que os utilizam.
