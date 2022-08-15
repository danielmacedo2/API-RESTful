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


app.listen(3000, () => console.log('Servidor rodando na porta 3000'))