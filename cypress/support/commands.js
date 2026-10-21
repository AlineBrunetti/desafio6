import LoginPage from './pages/loginPage';
import InventoryPage from './pages/inventoryPage';

// Comando 1: Login
Cypress.Commands.add('realizarLogin', (usuario, senha) => {
  LoginPage.inputUsername.type(usuario);
  LoginPage.inputPassword.type(senha);
  LoginPage.btnLogin.click();
});

// Comando 2: Adicionar ao Carrinho
Cypress.Commands.add('adicionarMochila', () => {
  InventoryPage.btnAddBackpack.click();
});

// Comando 3: Logout
Cypress.Commands.add('realizarLogout', () => {
  InventoryPage.btnMenu.click();
  InventoryPage.linkLogout.click();
});