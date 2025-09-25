![Banner image](https://user-images.githubusercontent.com/10284570/173569848-c624317f-42b1-45a6-ab09-f0ea3c247648.png)

# n8n-nodes-starter

Esse repositório foi inicializando clonando o [n8n-nodes-starter](https://github.com/n8n-io/n8n-nodes-starter)


## Pré-requisitos

Instale os seguintes itens na sua máquina de desenvolvimento:

* [git](https://git-scm.com/downloads)
* [Node.js](https://docs.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-windows) e npm.
* [Docker](https://www.docker.com/get-started/) e Docker Compose
* Instalar o n8n através do comando:
  ```
  npm install n8n -g
  ```

## Usando esse repositório

1. Clone o repositório:
   ```
   git clone https://github.com/leianorato/onfly-test-n8n
   ```
2. Instale as dependências do node personalizado: 
`cd nodes/Random`
`npm install`

3. Compile:

`npm run build`

4. Volte para a raiz do projeto e suba o n8n com Docker Compose:
`docker-compose up -d`

5. Acesse a interface do n8n no navegador:
http://localhost:5678

6. O node Random aparecerá na lista de nodes. Configure os parâmetros de mínimo e máximo para gerar um número aleatório.


## Testando localmente

1. Crie um workflow no n8n.
2. Adicione o node Random.
3. Configure os parâmetros de mínimo e máximo.
4. Execute o node e verifique o resultado no output.

## Rodando sem docker diretamente na máquina

1. Compile seu node (se ainda não fez):

`cd nodes/Random`
`npm install`
`npm run build`

2. Copie a pasta compilada para a pasta de nodes customizados do n8n:
`xcopy /E /I dist "%HOMEPATH%\.n8n\custom\random-n8n-node"`

3. Inicie o n8n:

`n8n start`

4. Abra o navegador e acesse::

`http://localhost:5678`

5. Teste o node Random:

- Crie um workflow no n8n

- Adicione o node Random

- Configure os parâmetros de mínimo e máximo 

- Execute o node e veja o resultado no output

## Licença

[MIT](https://github.com/n8n-io/n8n-nodes-starter/blob/master/LICENSE.md)
