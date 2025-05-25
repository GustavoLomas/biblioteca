/**
 * BookForm.tsx
 * Componente de formulário para criação e edição de livros
 * Utiliza Material-UI para campos de entrada e layout responsivo
 */

import React, { useState } from 'react';
import { Book } from '../types/Book';
import { 
    TextField, 
    Button, 
    Box, 
    Stack,
    Fade
} from '@mui/material';
import { Save as SaveIcon } from '@mui/icons-material';

// Props do componente BookForm
interface BookFormProps {
    initialData?: Book;            // Dados iniciais para edição (opcional)
    onSubmit: (book: Omit<Book, '_id'>) => void;  // Função de callback para submissão
}

export const BookForm: React.FC<BookFormProps> = ({ initialData, onSubmit }) => {
    // Estado do formulário com valores iniciais
    const [formData, setFormData] = useState({
        title: initialData?.title || '',
        author: initialData?.author || '',
        isbn: initialData?.isbn || '',
        description: initialData?.description || '',
        publishYear: initialData?.publishYear || new Date().getFullYear()
    });

    // Handler para submissão do formulário
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
    };

    // Handler para mudanças nos campos do formulário
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: name === 'publishYear' ? parseInt(value) : value
        }));
    };

    return (
        // Animação de fade ao montar o componente
        <Fade in timeout={500}>
            <form onSubmit={handleSubmit}>
                {/* Stack para organização vertical dos elementos */}
                <Stack spacing={3}>
                    {/* Primeira linha: Título e Ano */}
                    <Box sx={{ display: 'flex', gap: 3 }}>
                        {/* Campo de título (2/3 do espaço) */}
                        <Box sx={{ flex: 2 }}>
                            <TextField
                                label="Título"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                required
                                fullWidth
                                variant="outlined"
                            />
                        </Box>
                        {/* Campo de ano (1/3 do espaço) */}
                        <Box sx={{ flex: 1 }}>
                            <TextField
                                label="Ano de Publicação"
                                name="publishYear"
                                type="number"
                                value={formData.publishYear}
                                onChange={handleChange}
                                required
                                fullWidth
                                variant="outlined"
                                inputProps={{ min: 1800, max: new Date().getFullYear() + 1 }}
                            />
                        </Box>
                    </Box>
                    
                    {/* Segunda linha: Autor e ISBN */}
                    <Box sx={{ display: 'flex', gap: 3 }}>
                        {/* Campo de autor (2/3 do espaço) */}
                        <Box sx={{ flex: 2 }}>
                            <TextField
                                label="Autor"
                                name="author"
                                value={formData.author}
                                onChange={handleChange}
                                required
                                fullWidth
                                variant="outlined"
                            />
                        </Box>
                        {/* Campo de ISBN (1/3 do espaço) */}
                        <Box sx={{ flex: 1 }}>
                            <TextField
                                label="ISBN"
                                name="isbn"
                                value={formData.isbn}
                                onChange={handleChange}
                                required
                                fullWidth
                                variant="outlined"
                            />
                        </Box>
                    </Box>

                    {/* Campo de descrição (largura total) */}
                    <TextField
                        label="Descrição"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        multiline
                        rows={4}
                        fullWidth
                        variant="outlined"
                    />

                    {/* Botão de submissão */}
                    <Box display="flex" justifyContent="flex-end" mt={2}>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            size="large"
                            startIcon={<SaveIcon />}
                            sx={{
                                px: 4,
                                py: 1.5,
                                borderRadius: 2,
                                textTransform: 'none',
                                fontWeight: 600
                            }}
                        >
                            {initialData ? 'Salvar Alterações' : 'Criar Livro'}
                        </Button>
                    </Box>
                </Stack>
            </form>
        </Fade>
    );
}; 