/**
 * EditBookPage.tsx
 * Página para edição de livros existentes
 * Carrega dados do livro da API e permite sua atualização
 */

import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BookForm } from '../components/BookForm';
import { getBook, updateBook } from '../services/api';
import { Book } from '../types/Book';
import { Layout } from '../components/Layout';

export const EditBookPage: React.FC = () => {
    // Estado para armazenar dados do livro
    const [book, setBook] = useState<Book | null>(null);
    // Obtém ID do livro da URL
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    // Efeito para carregar dados do livro ao montar o componente
    useEffect(() => {
        const loadBook = async () => {
            if (id) {
                try {
                    // Busca dados do livro na API
                    const data = await getBook(id);
                    setBook(data);
                } catch (error) {
                    console.error('Erro ao carregar livro:', error);
                    // Redireciona para página inicial em caso de erro
                    navigate('/');
                }
            }
        };
        loadBook();
    }, [id, navigate]);

    // Handler para atualização do livro
    const handleSubmit = async (bookData: Omit<Book, '_id'>) => {
        if (id) {
            try {
                // Envia dados atualizados para API
                await updateBook(id, bookData);
                // Redireciona para página inicial após sucesso
                navigate('/');
            } catch (error) {
                console.error('Erro ao atualizar livro:', error);
            }
        }
    };

    // Não renderiza nada enquanto os dados estão sendo carregados
    if (!book) {
        return null;
    }

    return (
        // Layout com título e botão de voltar
        <Layout title="Editar Livro" showBackButton>
            {/* Formulário de edição com dados pré-preenchidos */}
            <BookForm initialData={book} onSubmit={handleSubmit} />
        </Layout>
    );
}; 