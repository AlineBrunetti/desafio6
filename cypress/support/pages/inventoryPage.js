class InventoryPage {
  get pageTitle() { return cy.get('[data-cy="title"]'); }
  get btnAddBackpack() { return cy.get('[data-cy="add-to-cart-sauce-labs-backpack"]'); }
  get btnRemoveBackpack() { return cy.get('[data-cy="remove-sauce-labs-backpack"]'); }
  get cartBadge() { return cy.get('[data-cy="shopping-cart-badge"]'); }
  get btnMenu() { return cy.get('[data-cy="react-burger-menu-btn"]'); }
  get linkLogout() { return cy.get('[data-cy="logout-sidebar-link"]'); }
}
export default new InventoryPage();