
import telaInicial from "../support/PageObjects/tela-inicial.pageObjects"

describe('Validar os filtros da aplicação após a adição de itens', () => {
    beforeEach(() => {
        cy.visit('/')
        var TodoItens = ["Maça", "Banana", "Cenoura"]

        TodoItens.forEach(function(item, indice, array){
        telaInicial.inputText(item)
    })
        telaInicial.concluirItem()
    })

    it('Filtrar itens ativos', () => {
        telaInicial.filtrarItem("Active")

        });

    it('Filtrar itens concluidos', () => {
        telaInicial.filtrarItem("Completed")

        });

    });
