/**
 * BookController.ts
 * Controlador para operações CRUD de livros
 * Gerencia todas as operações relacionadas aos livros na API
 */

import { Request, Response } from 'express';
import { Book, IBook } from '../models/Book';

export class BookController {
    /**
     * Cria um novo livro
     * @param req Request com dados do livro no body
     * @param res Response para enviar resultado
     * @returns Novo livro criado com status 201 ou erro 500
     */
    async create(req: Request, res: Response) {
        try {
            const book = new Book(req.body);
            await book.save();
            return res.status(201).json(book);
        } catch (error) {
            return res.status(500).json({ message: 'Error creating book' });
        }
    }

    /**
     * Lista todos os livros
     * @param req Request da listagem
     * @param res Response para enviar resultado
     * @returns Array de livros ou erro 500
     */
    async list(req: Request, res: Response) {
        try {
            const books = await Book.find();
            return res.json(books);
        } catch (error) {
            return res.status(500).json({ message: 'Error listing books' });
        }
    }

    /**
     * Busca um livro específico por ID
     * @param req Request com ID do livro nos parâmetros
     * @param res Response para enviar resultado
     * @returns Livro encontrado, 404 se não existir, ou erro 500
     */
    async get(req: Request, res: Response) {
        try {
            const book = await Book.findById(req.params.id);
            if (!book) {
                return res.status(404).json({ message: 'Book not found' });
            }
            return res.json(book);
        } catch (error) {
            return res.status(500).json({ message: 'Error getting book' });
        }
    }

    /**
     * Atualiza um livro existente
     * @param req Request com ID do livro nos parâmetros e dados no body
     * @param res Response para enviar resultado
     * @returns Livro atualizado, 404 se não existir, ou erro 500
     */
    async update(req: Request, res: Response) {
        try {
            const book = await Book.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true }
            );
            if (!book) {
                return res.status(404).json({ message: 'Book not found' });
            }
            return res.json(book);
        } catch (error) {
            return res.status(500).json({ message: 'Error updating book' });
        }
    }

    /**
     * Remove um livro existente
     * @param req Request com ID do livro nos parâmetros
     * @param res Response para enviar resultado
     * @returns Status 204 sem conteúdo, 404 se não existir, ou erro 500
     */
    async delete(req: Request, res: Response) {
        try {
            const book = await Book.findByIdAndDelete(req.params.id);
            if (!book) {
                return res.status(404).json({ message: 'Book not found' });
            }
            return res.status(204).send();
        } catch (error) {
            return res.status(500).json({ message: 'Error deleting book' });
        }
    }
} 