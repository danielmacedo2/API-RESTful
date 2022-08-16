/* imports */
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

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

  try {
    await User.save(); // Saving in Database

    return res.status(200).json({ message: "Cadastrado com sucesso!" });
  } catch (error) {
    console.log(error);

    return res
      .status(400)
      .json({
        message: "Ocorreu um erro no servidor, tente novamente mais tarde! ",
      });
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
