# Testes Automatizados para a plataforma Luma

Essa é a documentação para os testes automatizados em Cypress para a plataforma Luma, especificando os requisitos para o seu uso assim como práticas a serem seguidas para a manutenção e adição de novos testes.

## Pré-requisitos

Para utilizar os testes automatizados deste repositório, são necessários os pré-requisitos para o uso do Cypress, incluindo a instalação do 'Node.js', o ambiente para execução de JavaScript multiplataforma, e do 'npm', o Node Package Manager, que permite fazer a instalação dos pacotes do Cypress em sí.

A instalação do Node.js pode ser feita através do instalador em:
https://nodejs.org/pt

A instalçao do npm é feita junto da instação do Node, mas para garantir que se está na última versão estável pode se usar o comando:
npm install npm@latest -g

Note que para usar comandos do Node.js ou npm no terminal pode ser necessário reiniciar o terminal caso ele já estivesse em uso. Caso o problema persista, tente reiniciar a máquina.


## Uso dos testes

A execução dos testes automatizados e a validação dos seus resultados, assim como a checagem dos screenshots dos momentos ao longo dos testes podem ser todas feitas diretamente da interface do Cypress, que já vem instalado dentro deste repositório em 'automacao/cypress', para iniciá-la use o comando a seguir dentro de 'automacao/cypress':
npx cypress open

Ao iniciar a interface do Cypress, selecione a opção E2E Testing e então o navegador desejado para executar os testes.

Os cenários automatizados podem ser encontrados na aba de Specs, para executá-los basta selecionar um deles da lista clickando nele e ele será executado automáticamente. O resultado do teste e erros encontrados durante a execução são apresentados na esquerda junto de um log de todos os momentos do teste, passando o mouse por cima de um dos momentos é possível ver um screenshot do estado em que a plataforma e seus elementos estavam naquele momento do teste.

## Ajustes e criação de novos testes

Ao ajustar um dos testes já existentes ou acrescentar testes novos, é preciso seguir alguma regras para que eles sejam adicionados automaticamente a lista de Specs, assim como manter um padrão entre os testes.

1 - Arquivos contendo os testes devem ser adicionados dentro da pasta 'automacao/cypress/e2e' e sua extensão deve ser ".cy.js" para que sejam adicionados automaticamente a lista de Specs dentro do Cypress.

2 - Os nomes dos testes e seus arquivos devem ser criados seguindo o padrão de camel case e com nomes descritivos dos cenários ao qual se referem, uma explicação mais a fundo da validação feita pelo teste pode ser colocada dentro do arquivo em sí na declaração do teste ou dentro de comentários.