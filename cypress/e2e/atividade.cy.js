describe('Atividade 1 - Testes Sauce Demo', () => {

  function fazerLogin() {
    cy.visit('https://saucedemo.com');
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
  }

  it('CT01 - Autenticação com Sucesso', () => {
    cy.visit('https://saucedemo.com');
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
    
    cy.url().should('include', '/inventory.html');
    cy.get('[data-test="title"]').should('contain', 'Products');
  });

  it('CT02 - Autenticação com Falha', () => {
    cy.visit('https://saucedemo.com');
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('senha_errada');
    cy.get('[data-test="login-button"]').click();

    cy.get('[data-test="error"]').should('be.visible');
    cy.get('[data-test="error"]').should('contain', 'do not match');
  });

  it('CT03 - Adicionar Produto ao Carrinho', () => {
    fazerLogin(); 

    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();

    cy.get('[data-test="remove-sauce-labs-backpack"]').should('be.visible');
    cy.get('[data-test="shopping-cart-badge"]').should('contain', '1');
  });

  it('CT04 - Remover Produto do Carrinho', () => {
    fazerLogin();

    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="remove-sauce-labs-backpack"]').click();

    
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').should('be.visible');
    cy.get('[data-test="shopping-cart-badge"]').should('not.exist');
  });

  it('CT05 - Realizar Logout', () => {
    fazerLogin();

    cy.get('#react-burger-menu-btn').click();
    cy.get('[data-test="logout-sidebar-link"]').click();

   
    cy.get('[data-test="login-button"]').should('be.visible');
    cy.get('[data-test="username"]').should('be.visible');
  });
});
