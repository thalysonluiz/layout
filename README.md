# Boilerplate

## Passo a passo

1. Instalar o [NodeJS](http://nodejs.org).
2. Instalar o [Bower](http://bower.io): ```npm install -g bower```
3. Instalar o [GulpJS](http://gulpjs.com): ```npm install -g gulp```
4. Instalar as [dependências do NodeJS](https://github.com/istim/layout/blob/master/package.json): ```npm install```
5. Instalar as [dependências do Bower](https://github.com/istim/layout/blob/master/bower.json): ```bower install```
6. Rodar ```gulp dev``` e começar a desenvolver.
7. Acessar os arquivos através da URL [http://localhost:6147](http://localhost:6147)

## Problemas na UFRN

* Na UFRN os computadores não tem o NodeJS instalado, então de preferência use um notebook ou uma máquina virtual.
* Utilizando a rede da UFRN ao rodar o ```bower install``` ele tenta instalar algumas dependências utilizando a porta 22, que é bloqueado na UFRN. Existem duas soluções:
    * Baixar os [arquivos do bower](https://anonfiles.com/file/585c8570bf5db4a71ba828965a9ba9ea) e colocar a pasta *bower_components* dentro da pasta *application*
    * Rodar o seguinte comando antes do bower install ```git config --global url."https://".insteadOf "git://"```

# ATENÇÃO

Colocar os assets na pasta assets, nunca diretamente na pasta application, senão eles serão sobreescritos pelo gulp. Se você tiver usando um computador da UFRN e não tiver o GulpJS. No próximo PR vou apagar a pasta assets para não haver esse problema.


## Gulp Tasks

```gulp dev``` - Compile CoffeeScript (application/scripts/src) to Javascript, compile SASS (application/css/src) to CSS, compress your images (application/img/src), starts a server and watch for changes.

```gulp coffee:compile``` - Compile [CoffeeScript](http://coffeescript.org) from folder _application/scripts/src_.

```gulp images:compress``` - Compress Images from folder _application/images/src_.

```gulp sass:compile``` - Compile [SASS](http://sass-lang.com) from folder _application/styles/src_.

## Application Directory

```
boilerplate
    |- application
    |----- images       # compressed images (or images you don't want to compress)
    |----- scripts      # compiled coffeescript (or vanilla javascript)
    |----- styles       # compiled sass (or vanilla css)
    |- assets
    |----- images       # images to be compressed
    |----- scripts      # coffescript to be compiled
    |----- styles       # scss files to be compiled
```
