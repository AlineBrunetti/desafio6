# Refatoração da Suíte de Testes (Atividade 2)

| Problema (Smell) | Solução Aplicada |
| :--- | :--- |
| **Seletores espalhados e repetidos** | Aplicação do padrão de projeto dividindo os seletores um por tela (`loginPage.js` e `inventoryPage.js`). Os seletores agora ficam isolados e fáceis de manter. |
| **Passos de teste duplicados** | Criação de Comandos Customizados (`cy.realizarLogin`, `cy.adicionarMochila`, `cy.realizarLogout`) no arquivo `commands.js` para abstrair os fluxos e limpar a especificação. |
| **Massa de dados acoplada (Hardcoded)** | Os dados de usuário (sucesso e falha) foram extraídos dos testes e movidos para o arquivo `cypress/fixtures/usuarios.json`, permitindo o carregamento dinâmico no `before()`. |
| **Setup de ambiente redundante** | Remoção de chamadas repetidas ao `cy.visit()`, garantindo que o teste rode de forma independente baseando-se no `beforeEach` global pré-existente. |