const express = require('express');
const mongoose = require('mongoose')

const app = express();

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Está funcionando!')
})

app.post('/register', (req, res) => {

    const {email, password, confirmPassword, username} = req.body
})

app.listen(3000, () => console.log('Servidor rodando na porta 3000'))