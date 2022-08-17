/* imports */
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt")

const app = express();

app.use(express.json());

// Rota Inicial
app.get("/", (req, res) => {
  res.send("Está funcionando!");
});

// Modelo de Usuário
const User = require("./Models/User");

// Rota de registro
app.post("/auth/register", async (req, res) => {
  const { firstName, lastName, email, password, confirmPassword, username } =
    req.body;

  if (!firstName) {
    return res.status(422).json({ message: "O primeiro nome é obrigatório!" });
  }
  if (!lastName) {
    return res.status(422).json({ message: "O último nome é obrigatório!" });
  }
  if (!email) {
    return res.status(422).json({ message: "O email é obrigatório!" });
  }
  if (!password) {
    return res.status(422).json({ message: "A senha é obrigatória" });
  }
  if (!confirmPassword) {
    return res
      .status(422)
      .json({ message: "A confirmação de senha é obrigatória" });
  }
  if (password !== confirmPassword) {
    return res
      .status(422)
      .json({ message: "As senhas não correspondem a mesma!" });
  }
  if (!username) {
    return res.status(422).json({ message: "O nome de usuário é obrigatório" });
  }

  const userExist = await User.findOne({ email: email });

  if (userExist) {
    return res.status(422).json({
      message: "Esse email já esta em uso, por favor utilize outro e-mail!",
    });
  }

  const usernameIsAlreadyInUse = await User.findOne({ username: username });

  if (usernameIsAlreadyInUse) {
    return res
      .status(422)
      .json({
        message:
          "Esse nome de usuário já em uso, por favor tente utilizar outro!",
      });
  }

  // Creating password
  const salt = await bcrypt.genSalt(12)
  const passwordHash = await bcrypt.hash(password, salt)

  // Creating user
  const user = new User({
    firstName,
    lastName,
    email,
    password: passwordHash,
    username
  })

  try {
    await user.save(); // Saving user in Database

    return res.status(200).json({ message: "Usuário criado com sucesso!" });
  } catch (error) {
    console.log(error);

    return res
      .status(400)
      .json({
        message: "Ocorreu um erro no servidor, tente novamente mais tarde! ",
      });
  }
});

// Rota de login
app.post('/auth/login', async (req, res) => {

  const { username, email, password } = req.body;

  if (!username && !email) {
    res.status(422).json({ message: "Por favor insira no campo o nome de usuário ou seu e-mail!"})
  }

  if(!password) {
    res.status(422).json({ message: "O campo de senha está vázio, por favor preencha!"})
  }

  // checking if user exist
  const findUserByUsername = await User.findOne({ username: username })
  const findUserByEmail = await User.findOne({ email: email })

  if (!findUserByEmail && !findUserByUsername){
    return res.status(404).json({ message: "Usuário não encontrado, verifique o seu email ou nome de usuário!" })
  }

  if(username) {

    const checkPassword = await bcrypt.compare(password, findUserByUsername.password)

    if(!checkPassword) {
      return res.status(401).json({ message: "[ERRO] Senha Inválida, tente novamente!"})

    }

    return res.status(201).json({ message: "Autenticação realizada com sucesso!" })
  }

  if(email) {
    
    const checkPassword = await bcrypt.compare(password, findUserByEmail.password)

    if(!checkPassword) {
      return res.status(401).json({ message: "[ERRO] Senha inválida, tente novamente1"})
    }

    return res.status(201).json({ message: "Autenticação realizada com sucesso!" })

  }

});


// Credencials
const dbUser = process.env.USER;
const dbPassword = process.env.PASS;
const port = process.env.PORT;

// Connection with Database
mongoose
  .connect(
    `mongodb+srv://${dbUser}:${dbPassword}@cluster0.2dr1nh7.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
    console.log("Banco de dados conectado!");
  })
  .catch((error) => console.log("Erro: " + error));
