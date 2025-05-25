/**
 * Book.ts
 * Modelo de dados para livros
 * Define a estrutura e validações do documento de livro no MongoDB
 */

import mongoose, { Document, Schema } from 'mongoose';

/**
 * Interface que define a estrutura de um livro
 * Estende Document do Mongoose para incluir propriedades do MongoDB
 */
export interface IBook extends Document {
    title: string;       // Título do livro
    author: string;      // Autor do livro
    isbn: string;        // ISBN único do livro
    description?: string; // Descrição opcional do livro
    publishYear: number;  // Ano de publicação
    createdAt: Date;     // Data de criação do registro
    updatedAt: Date;     // Data da última atualização
}

/**
 * Schema do MongoDB
 * Define a estrutura, validações e índices do documento
 */
const BookSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true       // Remove espaços em branco no início/fim
    },
    author: {
        type: String,
        required: true,
        trim: true
    },
    isbn: {
        type: String,
        required: true,
        unique: true,    // Garante ISBN único
        trim: true
    },
    description: {
        type: String,
        required: false,
        trim: true
    },
    publishYear: {
        type: Number,
        required: true,
        min: 1800,      // Validação de ano mínimo
        max: new Date().getFullYear() + 1  // Permite livros do próximo ano
    }
}, {
    timestamps: true    // Adiciona createdAt e updatedAt automaticamente
});

// Modelo do Mongoose
export const Book = mongoose.model<IBook>('Book', BookSchema); 