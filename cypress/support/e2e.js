// O SauceDemo expõe data-test nos elementos de automação. Esta ponte os espelha
// como data-cy durante a execução para manter os testes usando um único padrão
// de seletor sem alterar o site externo. O evento cobre também navegações e
// recarregamentos do aplicativo dentro de cada teste.
Cypress.on('window:before:load', (win) => {
  const espelharAtributos = (raiz) => {
    if (raiz.nodeType !== win.Node.ELEMENT_NODE) return;

    if (raiz.hasAttribute('data-test')) {
      raiz.setAttribute('data-cy', raiz.getAttribute('data-test'));
    }

    if (raiz.id === 'react-burger-menu-btn') {
      raiz.setAttribute('data-cy', 'react-burger-menu-btn');
    }

    raiz.querySelectorAll('[data-test], #react-burger-menu-btn').forEach((el) => {
      if (el.hasAttribute('data-test')) {
        el.setAttribute('data-cy', el.getAttribute('data-test'));
      }
      if (el.id === 'react-burger-menu-btn') {
        el.setAttribute('data-cy', 'react-burger-menu-btn');
      }
    });
  };

  const observer = new win.MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === 'attributes') {
        espelharAtributos(mutation.target);
      } else {
        mutation.addedNodes.forEach(espelharAtributos);
      }
    });
  });

  observer.observe(win.document, {
    attributes: true,
    attributeFilter: ['data-test', 'id'],
    childList: true,
    subtree: true,
  });
});

beforeEach(() => cy.visit('/'));
