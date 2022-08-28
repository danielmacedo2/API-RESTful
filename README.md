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

```
{
    "firstName": "Joao",
    "lastName": "Silva",
    "email": "joao@teste.com",
    "password": "Joao123",
    "confirmPassword": "Joao123",
    "username": "joaosilva"
}
```

## Autenticando usuário

Para autenticar usuário, crie e utilize a rota http://localhost:3000/login com método POST, especificando username ou email e password.

```
{
    "email": "joao@teste.com",
    "password": "Joao123"
}
```

Ou

```
{
    "username": "joaosilva",
    "password": "Joao123"
}
```

## Atualizando usuário

Para atualizar usuário, crie e utilize a rota http://localhost:3000/update/user_id com método PATCH, utilizando no body da requisição o dado que vc quer alterar (firstName, lastName, email, password, username)

## Deleção de usuário

Para deletar um usuário, crie e utilize a rota http://localhost:3000/delete/user_id com método DELETE. Será necessário copiar o ID do usuário.

OBS: O usuário apenas será marcado como deletado no banco de dados
