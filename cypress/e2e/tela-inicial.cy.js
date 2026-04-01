import telaInicial from "../support/PageObjects/tela-inicial.pageObjects"

describe('Todomvc', () => {
  it('Abrir o site', () => {
    cy.visit('https://todomvc.com/examples/javascript-es6/dist')
  telaInicial.inputText()
  })
})