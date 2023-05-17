import express from 'express';
import user from './user.routes.js';
import restaurant from './restaurant.routes.js';

const router = express.Router();

// Criação de Rotas
router.get('/', (req, res) => {
    res.send("Rota Inicial do BackEnd")
});

router.post('/', (req, res) => {
    res.send("Recebimento de Cadastros")
});

// Encaminhamento de Rotas
router.use('/user', user);
router.use('/restaurant', restaurant);

export default router;