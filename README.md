# API-REST
API que gerência usuários

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).

## Instalação

Instale o **nodemon** globalmente

```
npm install -g nodemon
```

Fazer o clone do repositório

```
git clone https://github.com/danielmacedo2/API-REST
```

Instalar os pacotes

```
npm install -y
```

Rodar o servidor

```
yarn start
```

## Testando a API

Utilize o [Postman](https://www.postman.com/) para testar a API, ou outro de sua preferência.

## Campo de usuário modelo:
+ firstName,
+ lastName,
+ email,
+ password,
+ username

## Criando usuário

Para criar um usuário, crie e utilize a rota http://localhost:3000/register com método POST, utilizando no body da requisição firstName, lastName, email, password, confirmPassword, username

## Autenticando usuário

Para autenticar usuário, crie e utilize a rota http://localhost:3000/login com método POST, especificando username ou email e password.

## Atualizando usuário

Para atualizar usuário, crie e utilize a rota http://localhost:3000/update/user com método PATCH, utilizando no body da requisição o dado que vc quer alterar (firstName, lastName, email, password, username)

## Deletando um usuário
Para deletar usuário, crie e utilize a rota http://localhost:3000/delete/user_id com método DELETE
Obs: Apenas marca o usuário como deletado no banco de dados(soft delete)
