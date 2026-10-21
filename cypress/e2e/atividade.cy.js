import LoginPage from '../support/pages/loginPage';
import InventoryPage from '../support/pages/inventoryPage';

describe('Atividade 2 - Testes Sauce Demo', () => {

  let usuarios;

  before(() => {
    // Carrega a massa de dados via fixture
    cy.fixture('usuarios').then((dados) => {
      usuarios = dados;
    });
  });

  it('CT01 - Autenticação com Sucesso', () => {
    cy.realizarLogin(usuarios.valido.username, usuarios.valido.password);
    
    cy.url().should('include', '/inventory.html');
    InventoryPage.pageTitle.should('contain', 'Products');
  });

  it('CT02 - Autenticação com Falha', () => {
    cy.realizarLogin(usuarios.invalido.username, usuarios.invalido.password);

    LoginPage.msgError.should('be.visible').and('contain', 'do not match');
  });

  it('CT03 - Adicionar Produto ao Carrinho', () => {
    cy.realizarLogin(usuarios.valido.username, usuarios.valido.password); 
    cy.adicionarMochila();

    InventoryPage.btnRemoveBackpack.should('be.visible');
    InventoryPage.cartBadge.should('contain', '1');
  });

  it('CT04 - Remover Produto do Carrinho', () => {
    cy.realizarLogin(usuarios.valido.username, usuarios.valido.password);
    cy.adicionarMochila();
    
    InventoryPage.btnRemoveBackpack.click();
    
    InventoryPage.btnAddBackpack.should('be.visible');
    InventoryPage.cartBadge.should('not.exist');
  });

  it('CT05 - Realizar Logout', () => {
    cy.realizarLogin(usuarios.valido.username, usuarios.valido.password);
    cy.realizarLogout();
   
    LoginPage.btnLogin.should('be.visible');
    LoginPage.inputUsername.should('be.visible');
  });
});