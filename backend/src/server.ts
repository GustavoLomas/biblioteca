/**
 * server.ts
 * Arquivo principal do servidor Express
 * Configura middleware, rotas e conexão com banco de dados
 */

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bookRoutes from './routes/bookRoutes';

// Inicialização do Express
const app = express();
const PORT = process.env.PORT || 3001;

// Configuração de Middleware
app.use(cors());  // Habilita CORS para requisições do frontend
app.use(express.json());  // Parse de JSON no body das requisições

// Configuração das rotas da API
app.use('/api', bookRoutes);

// Conexão com o MongoDB
mongoose.connect('mongodb://localhost:27017/library')
    .then(() => console.log('Database connected successfully'))
    .catch((err) => console.error('Database connection error:', err));

// Inicialização do servidor
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 