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

Para criar um usuário, crie e utilize a rota http://localhost:3000/register com método POST, utilizando no body da requisição name, email, password, confirmPassword e username.
