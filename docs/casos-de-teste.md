# Casos de teste E2E

**Sistema:** SauceDemo (`https://www.saucedemo.com`)  
**Credenciais válidas da demonstração:** `standard_user` / `secret_sauce`

Cada caso contém pelo menos duas verificações funcionais. Os testes interagem com elementos por seletores `data-cy`.

| ID | Caso | Pré-condições e passos | Resultado esperado / verificações |
|---|---|---|---|
| CT01 | Autenticação válida e catálogo | Abrir a página inicial, informar usuário e senha válidos e enviar o formulário. | O título do catálogo é `Products`; são exibidos seis produtos. |
| CT02 | Autenticação inválida | Informar `standard_user` e uma senha incorreta e enviar o formulário. | A mensagem de credenciais inválidas fica visível; o campo de usuário preserva `standard_user`. |
| CT03 | Adicionar produto | Autenticar com credenciais válidas e adicionar a mochila (`Sauce Labs Backpack`). | O controle do produto passa a oferecer a ação de remoção; o contador do carrinho mostra `1`. |
| CT04 | Remover produto | Autenticar, adicionar a mochila, abrir o carrinho e removê-la. | Não há produtos no carrinho; o contador do carrinho não é exibido. |
| CT05 | Encerrar sessão | Autenticar, abrir o menu de navegação e selecionar `Logout`. | O formulário de autenticação volta a ficar visível; a opção de logout deixa de existir na página. |

## Evidência

O vídeo `evidencias/execucao-cypress.mp4` registra a execução headless de `npx cypress run` com os cinco casos aprovados.
