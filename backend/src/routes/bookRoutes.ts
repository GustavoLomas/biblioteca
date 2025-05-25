/**
 * bookRoutes.ts
 * Configuração das rotas da API para livros
 * Define todos os endpoints disponíveis e seus handlers
 */

import { Router } from 'express';
import { BookController } from '../controllers/BookController';

// Inicialização do router e controller
const router = Router();
const bookController = new BookController();

// Rotas CRUD para livros
router.post('/books', (req, res) => bookController.create(req, res));    // Criar novo livro
router.get('/books', (req, res) => bookController.list(req, res));       // Listar todos os livros
router.get('/books/:id', (req, res) => bookController.get(req, res));    // Buscar livro por ID
router.put('/books/:id', (req, res) => bookController.update(req, res)); // Atualizar livro
router.delete('/books/:id', (req, res) => bookController.delete(req, res)); // Remover livro

export default router; 