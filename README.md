[![Stories in Ready](https://badge.waffle.io/ourikas/ourikas.png?label=ready&title=Ready)](https://waffle.io/ourikas/ourikas)
[![Build Status](https://snap-ci.com/Ourikas/ourikas/branch/master/build_image)](https://snap-ci.com/Ourikas/ourikas/branch/master)

# Ourikas
[![Join the chat at https://gitter.im/Ourikas/ourikas](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/Ourikas/ourikas?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Ourikas é um app para busca de empresas e serviços. Tem o objetivo de ser simples, rápido útil. Você pode acessar a versão atualmente em produção em [http://ourikas.github.io](http://ourikas.github.io).


## Iniciando

Para iniciar você pode simplesmente clonar o repositório do ourikas e instalar todas as dependências.

### Pré-requisitos

Você precisa do git para clonar o repositório do ourikas. Você pode conseguir o git em [http://git-scm.com/](http://git-scm.com/).

Nós também usamos algumas ferramentas do node.js para inicializar e testar o ourikas. Você tem quer ter o node.js e o seu gerenciador de pacotes (npm) instalados. Você pode conseguir eles em [http://nodejs.org/](http://nodejs.org/).


### Clone o ourikas

Clone o repositório do ourikas usando o [git][git]:


```
git clone https://github.com/ourikas/ourikas.git
cd ourikas
```

### Instale as Dependências

Nós temos dois tipos de dependências nesse projeto: ferramentas e bibliotecas/frameworks. As ferramentas ajudam a gerenciar e testar p app.

* Conseguimos as ferramentas de que dependemos via `npm`, o [gerenciador de pacotes do node][npm].
* Conseguimos as bibliotecas e framworks via `bower`, um [gerenciador de pacotes de código client-side][bower].

Pré-configuramos o `npm` para automaticamente rodar o `bower` então podemos simplesmente rodar o comando:

```
npm install
```

Por trás das cortinas isso também vai rodar  `bower install`.  Você deve encontrar dois novos diretórios em seu projeto.

* `node_modules` - contém os pacotes npm das ferramentas que precisamos
* `app/bower_components` - contém as bibliotecas e frameworks

## Servindo a aplicação

Enquanto o ourikas é um aplicação client-side-only, sendo possível rodar sem um backend e consequentemente não precisando de um webserver, nós recomendamos rodar o projeto num servidor durante o desenvolvimento para evitar problemas com restrições de segurança (sandbox) nos browsers. As inplementações de sandbox variam entre os browsers, mas geralmente previne coisas como cookies, xhr, etc de funcionar corretamente quando uma página html é aberta no equema `file://` ao invés de `http://`.


### Rodando o App durante o desenvolvimento

O ourikas vem pré-configurado com um webserver local para desenvolvimento. É um plugin do  [gulp][gulp]
chamado [gulp-connect][gulp-connect]. Você pode iniciar o webserver com:


```
gulp serve
```

Agora aponte seu navegador para  `http://localhost:8000`.



## Directory Layout

```
app/
  js/                   --> todos os arquivos javascript do app
  sass/                 --> todos os arquivos de estilo do app
  index.html            --> arquivo de layout do app (principal template html do app)
karma.conf.js         --> arquivo de configuração para rodar os testes unitários com o Karma
e2e-tests/            --> testes end-to-end
  protractor-conf.js    --> arquivo de configuração do Protractor
  scenarios.js          --> cenários end-to-end para serem rodados com o Protractor
```

## Testing

Exitem dois timpos de testes no app ourikas: Testes Unitários e Testes End to End.

###  Rodando os Testes Unitários

O ourikas vem pré-configurado com testes unitários. Estes são escritos em [Jasmine][jasmine] e rodamos com o  [Karma Test Runner][karma].

* a configuração é encontrada em `karma.conf.js`
* os testes unitários são encontrados próximos ao código  que eles estão testando e são nomeados como `..._test.js`.

A forma mais fácil de rodar os testes unitários é usando um script npm:

```
npm test
```

Esse script vai iniciar o Karma test runner para executar os testes unitários. Além disso ficará observando os arquivos de teste e quando houver alguma mudança e assim que haja alguma alteração rodará os testes novamente.
Essa é a estratégia recomendada; se os testes unitários estão sendo rodados sempre que você salva um arquivo então você recebe feedback instantâneo em qualquer mudança que eventualmente quebre a funcionalidade esperada do código.

Você pode fazer com que o Karma rode os testes apenas uma vez. Isso é útil se você quer checar se uma versão particular do código está funcionando como o esperado. O projeto contém um script para isso:

```
npm run test-single-run
```


### Testes End to end

O ourikas vem com testes end-to-end, que também são escritos em [Jasmine][jasmine]. Esses testes são rodados com o [Protractor][protractor] End-to-End test runner.

* o arquivo de configuração está em `e2e-tests/protractor-conf.js`
* os aquivos de testes end-to-end estão em `e2e-tests/scenarios.js`

Protractor interage com nossa aplicação e verifica se ela responde corretamente. Além disso nosso web server procisa está servindo a aplicação para que o Protractor possa interagir com ela.

```
gulp serve 
```

Uma vez que você verificou que o servidor de desenvolvimento está rodando você pode usar esse comando npm:

```
npm run protractor
```

Esse script irá executar os tests end-to-end na aplicação servida pelo webserver.


## Contact

Para mais informações entre no chat do projeto em https://gitter.im/ourikas

[git]: http://git-scm.com/
[bower]: http://bower.io
[npm]: https://www.npmjs.org/
[node]: http://nodejs.org
[protractor]: https://github.com/angular/protractor
[jasmine]: http://jasmine.github.io
[karma]: http://karma-runner.github.io
[travis]: https://travis-ci.org/
[gulp]: http://gulpjs.com/
[gulp-connect]: https://github.com/avevlad/gulp-connect
