import express from 'express';
import router from './routes/routes.js';

// Configuração do Servidor Express
const server = express();
const port = 3000;

// Execução do Servidor
server.listen(port,console.log(`Servidor rodando na PORTA ${port}...`))

// Definição de Rotas
server.use(router);