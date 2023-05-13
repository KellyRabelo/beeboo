    it('Cenário 1:Contrato com sucesso. ', 
    () => {
      const schema = {
        
        "title": "Root Schema",
        "type": "object",
        "required": [
            "results",
            "info"
        ],
        "properties": {
            "results": {
                "title": "The results Schema",
                "type": "array"
            },
            "info": {
                "title": "The info Schema",
                "type": "object",
                "required": [
                    "seed",
                    "results",
                    "page",
                    "version"
                ],
                "properties": {
                    "seed": {
                        "title": "The seed Schema",
                        "type": "string"
                    },
                    "results": {
                        "title": "The results Schema",
                        "type": "integer"
                    },
                    "page": {
                        "title": "The page Schema",
                        "type": "integer"
                    },
                    "version": {
                        "title": "The version Schema",
                        "type": "string"
                    }
                }
            }
        }
    }
      cy.request('GET','https://randomuser.me/api/').then((res) =>{
      expect(res.status).equal(200)
      //expect(res.body.results[0]).to.be.jsonShema(schema);
      })
      
      })
