class LoginPage {
  get inputUsername() { return cy.get('[data-cy="username"]'); }
  get inputPassword() { return cy.get('[data-cy="password"]'); }
  get btnLogin() { return cy.get('[data-cy="login-button"]'); }
  get msgError() { return cy.get('[data-cy="error"]'); }
}
export default new LoginPage();