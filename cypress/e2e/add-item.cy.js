
import telaInicial from "../support/PageObjects/tela-inicial.pageObjects"

describe('Adicionar itens na lista de ToDo', () => {
    beforeEach(() => {
        cy.visit('/')
    });

    it('Adicionar um item na lista', () => {
        telaInicial.inputText("dado1")

      })

    it('Adicionar mais de um item a lista', () => {
        var TodoItens = ["Maça", "Banana", "Cenoura"]

        TodoItens.forEach(function(item, indice, array){
        telaInicial.inputText(item)
    })
            
        });

    });
