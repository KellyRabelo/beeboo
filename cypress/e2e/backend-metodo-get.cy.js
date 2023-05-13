describe('Testes automatizados - Backend Cenário 1', () => {
    it('Cenário 1:Realizar Metodo GET com sucesso. ', 
    () => {
      cy.request({
        url: 'https://randomuser.me/api/',
        method:'GET',
      }).as('response')
      // Verificação status code 200
      cy.get('@response').then(res =>{
        expect(res.status).to.be.equal(200)
        })
      })
    })