
import telaInicial from "../support/PageObjects/tela-inicial.pageObjects"

describe('Deletar itens da lista de ToDo', () => {
    beforeEach(() => {
        cy.visit('/')
        var TodoItens = ["Maça", "Banana", "Cenoura"]

        TodoItens.forEach(function(item, indice, array){
        telaInicial.inputText(item)
    })
    
    })

    it('Deletar um item da lista', () => {
        telaInicial.deletarItem()

        });

    });
