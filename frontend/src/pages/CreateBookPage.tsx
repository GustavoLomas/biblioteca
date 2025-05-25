/**
 * CreateBookPage.tsx
 * Página para criação de novos livros
 * Utiliza o componente BookForm e gerencia a criação através da API
 */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BookForm } from '../components/BookForm';
import { createBook } from '../services/api';
import { Book } from '../types/Book';
import { Layout } from '../components/Layout';

export const CreateBookPage: React.FC = () => {
    const navigate = useNavigate();

    // Handler para criação de novo livro
    const handleSubmit = async (bookData: Omit<Book, '_id'>) => {
        try {
            // Envia dados para API
            await createBook(bookData);
            // Redireciona para página inicial após sucesso
            navigate('/');
        } catch (error) {
            console.error('Erro ao criar livro:', error);
        }
    };

    return (
        // Layout com título e botão de voltar
        <Layout title="Novo Livro" showBackButton>
            {/* Formulário de criação */}
            <BookForm onSubmit={handleSubmit} />
        </Layout>
    );
}; 