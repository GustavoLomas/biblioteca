import React, { useState } from 'react';
import { Book } from '../types/Book';
import { 
    Table, 
    TableBody, 
    TableCell, 
    TableContainer, 
    TableHead, 
    TableRow, 
    Paper,
    IconButton,
    Typography,
    Tooltip,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Fade,
    Chip
} from '@mui/material';
import { 
    Edit as EditIcon, 
    Delete as DeleteIcon,
    Info as InfoIcon 
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

interface BookListProps {
    books: Book[];
    onDelete: (id: string) => void;
}

export const BookList: React.FC<BookListProps> = ({ books, onDelete }) => {
    const navigate = useNavigate();
    const [selectedBook, setSelectedBook] = useState<Book | null>(null);
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

    const handleDeleteClick = (book: Book) => {
        setSelectedBook(book);
        setDeleteDialogOpen(true);
    };

    const handleConfirmDelete = () => {
        if (selectedBook) {
            onDelete(selectedBook._id);
            setDeleteDialogOpen(false);
            setSelectedBook(null);
        }
    };

    const handleViewDetails = (book: Book) => {
        setSelectedBook(book);
    };

    return (
        <>
            <TableContainer 
                component={Paper} 
                sx={{ 
                    borderRadius: 2,
                    overflow: 'hidden',
                    '& .MuiTableRow-root:hover': {
                        backgroundColor: 'rgba(0, 0, 0, 0.04)'
                    }
                }}
            >
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Título</TableCell>
                            <TableCell>Autor</TableCell>
                            <TableCell>ISBN</TableCell>
                            <TableCell align="center">Ano</TableCell>
                            <TableCell align="right">Ações</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {books.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={5}>
                                    <Typography 
                                        align="center" 
                                        color="textSecondary"
                                        sx={{ py: 4 }}
                                    >
                                        Nenhum livro cadastrado
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        ) : (
                            books.map((book) => (
                                <Fade in={true} key={book._id}>
                                    <TableRow>
                                        <TableCell>
                                            <Typography variant="subtitle2" sx={{ fontWeight: 'medium' }}>
                                                {book.title}
                                            </Typography>
                                        </TableCell>
                                        <TableCell>{book.author}</TableCell>
                                        <TableCell>
                                            <Chip 
                                                label={book.isbn}
                                                size="small"
                                                sx={{ 
                                                    backgroundColor: 'rgba(37, 99, 235, 0.1)',
                                                    color: 'primary.main',
                                                    fontWeight: 'medium'
                                                }}
                                            />
                                        </TableCell>
                                        <TableCell align="center">
                                            <Chip 
                                                label={book.publishYear}
                                                size="small"
                                                sx={{ 
                                                    backgroundColor: 'rgba(37, 99, 235, 0.1)',
                                                    color: 'primary.main'
                                                }}
                                            />
                                        </TableCell>
                                        <TableCell align="right">
                                            <Tooltip title="Ver detalhes">
                                                <IconButton
                                                    size="small"
                                                    onClick={() => handleViewDetails(book)}
                                                >
                                                    <InfoIcon />
                                                </IconButton>
                                            </Tooltip>
                                            <Tooltip title="Editar">
                                                <IconButton 
                                                    color="primary"
                                                    size="small"
                                                    onClick={() => navigate(`/edit/${book._id}`)}
                                                >
                                                    <EditIcon />
                                                </IconButton>
                                            </Tooltip>
                                            <Tooltip title="Excluir">
                                                <IconButton 
                                                    color="error"
                                                    size="small"
                                                    onClick={() => handleDeleteClick(book)}
                                                >
                                                    <DeleteIcon />
                                                </IconButton>
                                            </Tooltip>
                                        </TableCell>
                                    </TableRow>
                                </Fade>
                            ))
                        )}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* Dialog de Confirmação de Deleção */}
            <Dialog open={deleteDialogOpen} onClose={() => setDeleteDialogOpen(false)}>
                <DialogTitle>Confirmar Exclusão</DialogTitle>
                <DialogContent>
                    <Typography>
                        Tem certeza que deseja excluir o livro "{selectedBook?.title}"?
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setDeleteDialogOpen(false)}>Cancelar</Button>
                    <Button onClick={handleConfirmDelete} color="error" variant="contained">
                        Excluir
                    </Button>
                </DialogActions>
            </Dialog>

            {/* Dialog de Detalhes */}
            <Dialog 
                open={Boolean(selectedBook && !deleteDialogOpen)} 
                onClose={() => setSelectedBook(null)}
                maxWidth="sm"
                fullWidth
            >
                <DialogTitle>Detalhes do Livro</DialogTitle>
                <DialogContent>
                    {selectedBook && (
                        <>
                            <Typography variant="h6" gutterBottom>
                                {selectedBook.title}
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                                por {selectedBook.author}
                            </Typography>
                            <Typography variant="body1" paragraph>
                                {selectedBook.description}
                            </Typography>
                            <Typography variant="subtitle2" color="textSecondary">
                                ISBN: {selectedBook.isbn}
                            </Typography>
                            <Typography variant="subtitle2" color="textSecondary">
                                Ano de Publicação: {selectedBook.publishYear}
                            </Typography>
                        </>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setSelectedBook(null)}>Fechar</Button>
                    <Button 
                        onClick={() => {
                            if (selectedBook) {
                                navigate(`/edit/${selectedBook._id}`);
                                setSelectedBook(null);
                            }
                        }} 
                        color="primary"
                    >
                        Editar
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}; 