const elem = require('../Elements/tela-inicial.elements').ELEMENTS
const concluirItem = require('../Elements/tela-inicial.elements').ITENS
const filtroItem = require('../Elements/tela-inicial.elements').FILTROS

class telaInicial {

inputText(dado){
    cy.get(elem.inputToDo).type (dado).type('{enter}').click
    }

validarInput(texto){
    cy.get(elem.inputToDo).should('have.attr', 'placeholder').and('include', texto)
}

validarContador(numero){
    cy.get(filtroItem.contador).find('strong').should('have.text', numero)
}

validarSizeToDo(numero){
    cy.get(concluirItem.validarlistaItens).should('have.length', (numero))
}

concluirItem(){
    cy.get(concluirItem.buttonConcluirItem).last().click()

    }

filtrarItem(menu){
    cy.get(filtroItem.filtroToDo).contains(menu).and('be.visible').click()
    
    }   

deletarItem(menu){
    cy.get(concluirItem.listaItens).first().find('button').invoke('show').click()
    }   
}


export default new telaInicial();