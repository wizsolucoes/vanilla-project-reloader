# Vanilla Project Reloader

Lib js feita em **Vanilla JS** para efetuar o processo de checagem de publicação de nova versão baseado em hash gerado pelo servidor.

## Preparação da ambiente local

Está api faz uso de [node](https://nodejs.org/en/), para configurar localmente o projeto é necessário executar o seguinte comando, na raiz do projeto:

```bash
> npm install
```

## Organização do projeto

```bash
├── src
    ├── index.js
    ├── lib
        ├── project-reloader.js
```

**index.js** -> Arquivo padrão de exportação da lib.
**project-reloader.js** -> arquivo onde estão as principais classes do projeto:

* *HttpConnector*: Classe auxiliar que encapsula a complexidade de uma chamada http em modo js puro.
* *ProjectReloader*: Classe que contém a regra negocial do funcionamento de funcionamento do projeto de reload.

## Utilização da lib

Essa lib foi preparada para uso via empacotamento logo ela poderá ser utilizada via importação. Para fazer a instalação do package via npm basta executar o comando:

```bash
> npm install @wizsolucoes/vanilla-project-reloader --save
```

Para utilizá-la basta importar a classe utilizando o código a seguir:

```js
import ProjectReloader from '@wizsolucoes/vanilla-project-reloader';
```

## Utilização **

### Instanciando a classe:

Para utilizar os recursos da classe é necessário criar uma instância da classe. Para isso é obrigatório passar um objeto [config](#objeto-config) conforme o exemplo a seguir:

```js
import ProjectReloader from '@wizsolucoes/vanilla-project-reloader';

var sso = new ProjectReloader('filename');
```

**filename** Nome do arquivo onde será buscado o hash de conferência da ultima publicação.