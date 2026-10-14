# Atividade 1 — testes E2E com Cypress

Projeto de testes automatizados para o [SauceDemo](https://www.saucedemo.com), usando cinco casos de autenticação e carrinho de compras.

## Requisitos

- Node.js e npm
- Acesso à internet para abrir o SauceDemo

## Instalação e execução

Na raiz do repositório:

```bash
npm install
npx cypress open
npx cypress run
```

`npx cypress open` abre o Cypress para executar os testes interativamente. `npx cypress run` executa os testes em modo headless e grava o vídeo em `cypress/videos`. A evidência da execução entregue está em [`evidencias/execucao-cypress.mp4`](evidencias/execucao-cypress.mp4).

## Casos automatizados

Os cinco cenários estão em `cypress/e2e/atividade.cy.js`; seus passos e critérios de aprovação estão em [`docs/casos-de-teste.md`](docs/casos-de-teste.md). Os seletores usados pelos testes seguem `[data-cy="..."]`. Como o SauceDemo é um site externo que publica identificadores `data-test`, `cypress/support/e2e.js` espelha esses identificadores como `data-cy` apenas durante a execução dos testes.

O arquivo legado `atividade/atividade/e2e/SwagLabs.cy.js` foi preservado sem alterações e não faz parte da seleção da execução principal.
