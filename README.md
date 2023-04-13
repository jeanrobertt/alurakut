[![Alurakut](./frontend/src/assets/logo.svg)]()

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Angular](https://img.shields.io/badge/Angular-15-red.svg)](https://angular.io/)
[![Node.js](https://img.shields.io/badge/Node.js-18-green.svg)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4-yellow.svg)](https://www.mongodb.com/)

[Alurakut](https://alurakut-ng.vercel.app/) é um projeto de rede social criado para apresentar meu portfólio e minhas habilidades como desenvolvedor web. O design e estilo do projeto foram inspirados no antigo Orkut, mas com algumas diferenças e melhorias nos estilos.

## Índice

- [Tecnologias](#tecnologias)
- [Funcionalidades](#funcionalidades)
- [Instalação](#instalação)
- [Contribuição](#contribuição)
- [Licença](#licença)
- [Agradecimentos](#agradecimentos)

## Tecnologias

- Angular (Frontend)
- ngrx (Angular)
- Bootstrap (Frontend)
- ngx-bootstrap (Angular)
- Node.js (Backend)
- Express (Node.js)
- Axios (Node.js)
- Cors (Node.js)
- Mongoose (Node.js)
- JSON Web Token (JWT) (Node.js)
- MongoDB (Banco de Dados)

## Funcionalidades

O app alurakut permite que você faça login usando apenas o seu nome de usuário do GitHub. Depois de logado, você pode ver:

- A página de perfil que mostra os seus seguidores do GitHub, as comunidades que você faz parte e os recados que deixaram para você.
- A opção de criar uma nova comunidade.
- A página de comunidades que mostra todas as comunidades que você faz parte e permite que você acesse a página específica de cada uma delas.

Próximos passos:

- Refatorar o código para melhorar a legibilidade e a manutenção.
- Melhorar a performance do aplicativo para torná-lo mais rápido e responsivo.
- Adcionar as seguintes funcionalidades:
    - A opção de pesquisar comunidades.
    - A opção de deixar mensagens dentro das comunidades.
    - A página que mostra todos os amigos/seguidores.
    - ~~Feed de notícias.~~

## Instalação

Recomendo que você use a versão hospedada do Alurakut, que pode ser acessada em https://alurakut-ng.vercel.app/.
Essa é uma opção mais fácil e rápida de usar o aplicativo, sem a necessidade de configurar um ambiente de desenvolvimento em seu computador. Além disso, a versão hospedada é sempre atualizada com as últimas alterações e melhorias do projeto.

No entanto, se você optar por instalar o projeto localmente, é necessário ter um banco de dados MongoDB configurado e uma conta no Github para obter o token de autenticação. Além disso, você precisará definir as seguintes variáveis de ambiente: `URI`(mongodb),  `GITHUB_TOKEN` e `HASH`. Para mais informações sobre como configurar o MongoDB, consulte a documentação oficial em <https://docs.mongodb.com/manual/installation/>. Para obter informações sobre como obter um token de autenticação no Github, consulte as instruções em <https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token>.

Para instalar o app localmente, você precisa seguir os passos abaixo:

1. Abra um terminal, clone o repositório e entre na pasta alurakut:

```
git clone https://github.com/jeanrobertt/alurakut.git && cd alurakut
```

2. Navegue até a pasta backend.

```sh
cd backend
```

3. Instale as dependências com o comando 

```
npm install
```

4. Para que o projeto funcione corretamente, é necessário configurar algumas variáveis de ambiente. Elas podem ser definidas localmente no seu ambiente de desenvolvimento ou em um serviço de hospedagem. Certifique-se de incluir essas variáveis de ambiente antes de executar o projeto.

    Aqui estão as variáveis necessárias e como você pode obtê-las:

    - `URI`: É o endereço para fazer a conexão com o banco de dados mongodb. Na URI vc precisa substituir os valores `MONGO_USER`, `MONGO_PASSWORD` e `MONGODB_CLUSTER_NAME`, pelo nome de usuário, senha e o nome do banco de dados a ser usado. 

    - `GITHUB_TOKEN`: Esta variável é necessária para acessar a API do GitHub. Para obtê-la, você pode criar um token de acesso pessoal na sua página de Configurações de desenvolvedor do GitHub. Certifique-se de selecionar a opção "Read:user" para conceder acesso somente para leitura aos seus dados de usuário.

    - `HASH`: Esta variável é utilizada para gerar um hash seguro com o JWT. Você pode definir qualquer valor de sua escolha.

5. Faça o build e depois inicie o servidor: 
```
npm run build
```
```
npm run dev
```

6. Abra outro terminal e navegue até a pasta frontend.

```sh
cd alurakut\frontend
```

7. Instale as dependências com o comando (isso pode demorar alguns minutos):

```
npm install
```

8. Inicie o app com o comando 

```
npm run start
```

9. Se tudo funcionar corretamente, você receberá uma mensagem de que o servidor foi compilado com sucesso e poderá acessar o site pela URL indicada no terminal, provavelmente em <http://localhost:4200/>.

## Contribuição

Sinta-se à vontade para contribuir com sugestões, reportando problemas ou ajudando a implementar novas funcionalidades. Para isso, você pode usar as issues do GitHub ou entrar em contato comigo pelo [LinkedIn](https://www.linkedin.com/in/jeanrobertt).

## Licença

Este projeto é licenciado sob os termos da licença MIT. Para mais informações, leia o arquivo [LICENSE](LICENSE).

## Agradecimentos

Eu quero agradecer à escola [Alura](https://www.alura.com.br/), principalmente aos instrutores [Paulo Silveira](https://www.linkedin.com/in/paulosilveira), [Mario Souto](https://www.linkedin.com/in/omariosouto) e [Juliana Negreiros](https://www.linkedin.com/in/juliananegreiros).  Este projeto foi inspirado em uma atividade proposta em uma irmersão gratuita da Alura que utilizei como referência e adpatado para desenvolver minhas habilidades em Angular e outras tecnologias web.