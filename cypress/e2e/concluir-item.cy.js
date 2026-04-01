
import telaInicial from "../support/PageObjects/tela-inicial.pageObjects"

describe('Concluir itens na lista de ToDo', () => {
    beforeEach(() => {
        cy.visit('/')
        var TodoItens = ["Maça", "Banana", "Cenoura"]

        TodoItens.forEach(function(item, indice, array){
        telaInicial.inputText(item)
    })
            
    })

    it('Concluir um item da lista de ToDo', () => {
    telaInicial.concluirItem()

        });

    });
