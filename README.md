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


User Story 01: Inscrição para vaga no site Beebo; <br>
Url: https://app.pipefy.com/public/form/NWn55kc1; <br>
Usuário: Candidato; <br>
Perfil de acesso: <br>
A) Todos os candidatos podem tem acesso ao formulário; <br>

Funcionalidade: Enviar currículo <br>
Eu como Candidato <br>
Quero cadastrar o currículo  <br>
Para enviar o currículo no banco de dados da Beeboo.  <br>

Cenário: Enviar currículo com sucesso <br>
Dado que estou no formulário de inscrição no site [Url] da Beebo;<br>
Quando preencher o formulário com dados solicitados <br>
E acionar a opção Enviar <br>
Então será enviado o currículo para base de dados da Beeboo. <br>







