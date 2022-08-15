/* imports */
const express = require('express');
const mongoose = require('mongoose')

const app = express();

app.use(express.json())

// Rota Inicial
app.get('/', (req, res) => {
    res.send('Está funcionando!')
})


// Rota de registro
app.post('/register', (req, res) => {

    const {email, password, confirmPassword, username} = req.body

    if (!email){
        res.status(422).json({ message: "O email é obrigatório!"})
    }
    if (!password) {
        res.status(422).json({ message: "A senha é obrigatória"})
    }
    if (!confirmPassword) {
        res.status(422).json({ message: "A confirmação de senha é obrigatória"})
    }
    if (password != confirmPassword) {
        res.status(422).json({ message: "As senhas não correspondem a mesma!"})
    }
    if (!username) {
        res.status(422).json({ message: "O nome de usuário é obrigatório"})
    }
})

// Credencials
const dbUser = process.env.USER
const dbPassword = process.env.PASS
const port = process.env.PORT

// Connection with Database
mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.tkgejmb.mongodb.net/?retryWrites=true&w=majority`).then(port, () => {
    app.listen(port)
    console.log('Banco de dados conectado')
})