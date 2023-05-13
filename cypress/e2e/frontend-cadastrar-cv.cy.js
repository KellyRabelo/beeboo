describe('Testes automatizados - frontend Cenário 2', () => {
    it('Cenário 2:Cadastrar Curriculo com sucesso. ', 
    () => {
        cy.visit('https://app.pipefy.com/public/form/NWn55kc1')
        cy.get('[data-testid="ShortText-nome_completo"] > .FormControlRoot-pstyle__sc-ia0p8a-10 > .FormControlContent-pstyle__sc-ia0p8a-3 > .form-control-children-container > [data-testid="textfield-input"]')
          .type('Kelly Rabelo')
        cy.get('[data-testid="Email-email"] > .FormControlRoot-pstyle__sc-ia0p8a-10 > .FormControlContent-pstyle__sc-ia0p8a-3 > .form-control-children-container > [data-testid="textfield-input"]')
          .type('kelly.rabelo@gmail.com')
        cy.get('[data-testid="ShortText-vaga"] > .FormControlRoot-pstyle__sc-ia0p8a-10 > .FormControlContent-pstyle__sc-ia0p8a-3 > .form-control-children-container > [data-testid="textfield-input"]')
          .type('Analista de Testes')
        cy.get('[data-testid="phone-field"]')
          .type('(61) 99440-8818')
        cy.get('[data-testid="minimal-view-button"] > span')
          .click()
        cy.get('[data-testid="attachments-dropzone-button"]').attachFile ( 'KellyRabelo.pdf' ) ;
        cy.get('[data-testid="pstyle-text-area"]')
          .type('Testes Automatizados')
        cy.get('[data-testid="submit-form-button"]')
          .click()
        })
    })
