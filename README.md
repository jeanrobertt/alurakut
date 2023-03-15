![Alurakut](./frontend/src/assets/logo.svg)

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Angular](https://img.shields.io/badge/Angular-15-red.svg)](https://angular.io/)
[![Node.js](https://img.shields.io/badge/Node.js-18-green.svg)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4-yellow.svg)](https://www.mongodb.com/)

Alurakut é um projeto de rede social criado para apresentar meu portfólio e minhas habilidades como desenvolvedor web. O design e estilo do projeto foram inspirados no antigo Orkut, mas com algumas diferenças e melhorias nos estilos.

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

As funcionalidades que ainda vou implementar são:

- A opção de pesquisar comunidades.
- A opção de deixar mensagens dentro das comunidades.
- A página que mostra todos os amigos/seguidores.
- O feed de notícias.

## Instalação

Para acessar o site diretamente, você pode usar a seguinte URL: (Ainda vou gerar a url do site).

Para instalar o app localmente, você precisa seguir os passos abaixo:

1. Abra um terminal, clone o repositório e entre na pasta alurakut:

```git clone https://github.com/jeanrobertt/alurakut.git && cd alurakut```

2. Navegue até a pasta backend.

```cd backend ```

3. Instale as dependências com o comando 

```npm install```

4. Inicie o servidor com o comando: 
```npm run dev```

Caso ocorra algum erro, utilize `CTRL+C` para parar e `npm run dev` novamente.

5. Abra outro terminal e navegue até a pasta frontend.

```cd alurakut\frontend ```

6. Instale as dependências com o comando:

```npm install```

Isso pode demorar alguns minutos.

7. Inicie o app com o comando 

```npm run start```

8. Se tudo funcionar corretamente, você receberá uma mensagem de que o servidor foi compilado com sucesso e poderá acessar o site pela URL indicada no terminal, provavelmente em <http://localhost:4200/>.

## Contribuição

Sinta-se à vontade para contribuir com sugestões, reportando problemas ou ajudando a implementar novas funcionalidades. Para isso, você pode usar as issues do GitHub ou entrar em contato comigo pelo [LinkedIn](https://www.linkedin.com/in/jeanrobertt).

## Licença

Este projeto é licenciado sob os termos da licença MIT. Para mais informações, leia o arquivo [LICENSE](LICENSE).

## Agradecimentos

Eu quero agradecer à escola [Alura](https://www.alura.com.br/), principalmente aos instrutores [Paulo Silveira](https://www.linkedin.com/in/paulosilveira), [Mario Souto](https://www.linkedin.com/in/omariosouto) e [Juliana Negreiros](https://www.linkedin.com/in/juliananegreiros).  Este projeto foi inspirado em uma atividade proposta em uma irmersão gratuita da Alura que utilizei como referência e adpatado para desenvolver minhas habilidades em Angular e outras tecnologias web.