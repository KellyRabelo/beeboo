# Beeboo

Testes Automatizados:

Orientações para executar os Testes automatizados - frontend e Backend:

* Os testes estão no diretório do projeto: - Beebo\cypress\e2e

> Testes elaborados em cypress com critérios solicitados 

* frontend-beeboo.cy.js -> Acessar o site do beedoo (beedoo.com.br) e no rodapé do site tem aceite de termos de cookie, clicar em aceitar para que o mesmo feche.Dentro de Faça parte e clicar em Envie seu currículo ( neste ponto é aberta uma nova aba, fazer com que o cypress abra o link na mesma aba).;
* frontend-cadastrar-cv.cy.js -> Ná página de inscrição, preencher os dados de inscrição, anexar o currículo e enviar.;
* backend-metodo-get.cy.js -> Acessar a api (https://randomuser.me/api/) utilizando o método GET e Validar o status code de retorno.;
* backend-validar-contratoschema.cy.js -> criar um testes para validar contrato.

Testes Manuais:


User Story 01: Inscrição para vaga no site Beebo;
Url: https://app.pipefy.com/public/form/NWn55kc1;
Usuário: Candidato;
Perfil de acesso:
A) Todos os candidatos podem tem acesso ao formulário;

Funcionalidade: Enviar currículo
Eu como Candidato
Quero cadastrar o currículo 
Para enviar o currículo no banco de dados da Beeboo. 

Cenário: Enviar currículo com sucesso 
Dado que estou no formulário de inscrição no site [Url] da Beebo;
Quando preencher o formulário com dados solicitados 
E acionar a opção Enviar
Então será enviado o currículo para base de dados da Beeboo.







