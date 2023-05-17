import express from 'express';

const user = express.Router();

user.get('/', (req, res) => {
    res.send("Rota de Usuário")
});

export default user;