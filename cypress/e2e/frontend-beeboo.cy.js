describe('Testes automatizados - frontend Cenário 1', () => {
    it('Cenário 1: Acessar site do beedoo, aceitar termos de cookie e clicar em Envie seu currículo em nova aba com sucesso. ', 
    () => {
        cy.visit('https://beedoo.com.br')
        cy.get('.rcc-accept-btn')
         .click({force: true})
        cy.get('.elementor-element-119d9133 > .elementor-widget-container > .elementor-icon-list-items > :nth-child(2) > a > .elementor-icon-list-text')
         .invoke('removeAttr', 'target')
         .click()
    })
      })


