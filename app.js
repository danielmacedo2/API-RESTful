const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Está funcionando!')
})

app.post('/register', (req, res) => {

    const {username, password, confirmPassword} = req.body

})

app.listen(3000, () => console.log('Servidor rodando na porta 3000'))