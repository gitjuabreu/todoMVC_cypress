import telaInicial from "../support/PageObjects/tela-inicial.pageObjects"

describe('Regressivo ToDo App', () => {
    
    context('Validar a tela inicial', () => {
        beforeEach(() => {
            cy.visit ('/')
        });

        it('Validar a area label de input de dados', () => {
            telaInicial.validarInput("What needs to be done?")
        });
    });
    context('Validar a adição de itens', () => {
        beforeEach(() => {
        cy.visit ('/')
        });

        it('Deve adicionar itens e validar o contador', () => { 
        var TodoItens = ["Maça", "Banana", "Cenoura"]
        
        TodoItens.forEach(function(item, indice, array){
        telaInicial.inputText(item)

        })

        telaInicial.validarContador(3) 
    });

    });
    
     context('Validar a conclusão de itens', () => {
        beforeEach(() => {
        cy.visit('/')
        var TodoItens = ["Maça", "Banana", "Cenoura"]
        
        TodoItens.forEach(function(item, indice, array){
        telaInicial.inputText(item)
    })
                    
    })
        
        it('Concluir um item da lista de ToDo', () => {
        telaInicial.concluirItem()
        telaInicial.validarContador(2) 
    
    });
        
    
    });
    context('Validar o filtro da aplicação', () => {
        beforeEach(() => {
        cy.visit('/')
        var TodoItens = ["Maça", "Banana", "Cenoura"]
        
        TodoItens.forEach(function(item, indice, array){
        telaInicial.inputText(item)
    })
         telaInicial.concluirItem()
    })
        
        it('Validar itens ativos', () => {
        telaInicial.filtrarItem("Active")
        telaInicial.validarSizeToDo(2)
        
        });
        
        it('Validar itens concluidos', () => {
        telaInicial.filtrarItem("Completed")
        telaInicial.validarSizeToDo(1)
        });
        
    
    });
    context('Validar a remoção de itens', () => {
        beforeEach(() => {
        cy.visit('/')
        var TodoItens = ["Maça", "Banana", "Cenoura"]
        
        TodoItens.forEach(function(item, indice, array){
        telaInicial.inputText(item)
    })
            
        })
        
        it('Deletar um item da lista', () => {
        telaInicial.deletarItem()
        telaInicial.validarSizeToDo(2)

        });
    });

});