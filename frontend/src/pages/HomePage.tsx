import React, { useEffect, useState } from 'react';
import { Button, Box } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { BookList } from '../components/BookList';
import { getBooks, deleteBook } from '../services/api';
import { Book } from '../types/Book';
import { Layout } from '../components/Layout';

export const HomePage: React.FC = () => {
    const [books, setBooks] = useState<Book[]>([]);
    const navigate = useNavigate();

    const loadBooks = async () => {
        try {
            const data = await getBooks();
            setBooks(data);
        } catch (error) {
            console.error('Erro ao carregar livros:', error);
        }
    };

    const handleDelete = async (id: string) => {
        try {
            await deleteBook(id);
            await loadBooks();
        } catch (error) {
            console.error('Erro ao deletar livro:', error);
        }
    };

    useEffect(() => {
        loadBooks();
    }, []);

    return (
        <Layout title="Biblioteca">
            <Box display="flex" justifyContent="flex-end" mb={4}>
                <Button
                    variant="contained"
                    color="primary"
                    startIcon={<AddIcon />}
                    onClick={() => navigate('/create')}
                    sx={{ 
                        borderRadius: 2,
                        px: 3
                    }}
                >
                    Novo Livro
                </Button>
            </Box>
            <BookList books={books} onDelete={handleDelete} />
        </Layout>
    );
}; 