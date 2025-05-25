import axios from 'axios';
import { Book } from '../types/Book';

const api = axios.create({
    baseURL: 'http://localhost:3001/api'
});

export const getBooks = async (): Promise<Book[]> => {
    const response = await api.get('/books');
    return response.data;
};

export const getBook = async (id: string): Promise<Book> => {
    const response = await api.get(`/books/${id}`);
    return response.data;
};

export const createBook = async (book: Omit<Book, '_id'>): Promise<Book> => {
    const response = await api.post('/books', book);
    return response.data;
};

export const updateBook = async (id: string, book: Partial<Book>): Promise<Book> => {
    const response = await api.put(`/books/${id}`, book);
    return response.data;
};

export const deleteBook = async (id: string): Promise<void> => {
    await api.delete(`/books/${id}`);
}; 