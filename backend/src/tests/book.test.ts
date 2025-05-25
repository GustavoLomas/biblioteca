import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import request from 'supertest';
import express from 'express';
import { Book } from '../models/Book';
import bookRoutes from '../routes/bookRoutes';

const app = express();
app.use(express.json());
app.use('/api', bookRoutes);

let mongoServer: MongoMemoryServer;

beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    const mongoUri = mongoServer.getUri();
    await mongoose.connect(mongoUri);
});

afterAll(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
});

beforeEach(async () => {
    await Book.deleteMany({});
});

describe('Book CRUD Operations', () => {
    const sampleBook = {
        title: 'Test Book',
        author: 'Test Author',
        isbn: '1234567890',
        description: 'Test Description',
        publishYear: 2024
    };

    describe('POST /api/books', () => {
        it('should create a new book', async () => {
            const response = await request(app)
                .post('/api/books')
                .send(sampleBook);

            expect(response.status).toBe(201);
            expect(response.body).toHaveProperty('_id');
            expect(response.body.title).toBe(sampleBook.title);
            expect(response.body.author).toBe(sampleBook.author);
        });

        it('should fail to create book without required fields', async () => {
            const response = await request(app)
                .post('/api/books')
                .send({});

            expect(response.status).toBe(500);
        });

        it('should handle database errors on create', async () => {
            jest.spyOn(Book.prototype, 'save').mockRejectedValueOnce(new Error('Database error'));
            
            const response = await request(app)
                .post('/api/books')
                .send(sampleBook);

            expect(response.status).toBe(500);
        });
    });

    describe('GET /api/books', () => {
        it('should return empty array when no books exist', async () => {
            const response = await request(app).get('/api/books');
            expect(response.status).toBe(200);
            expect(response.body).toEqual([]);
        });

        it('should return all books', async () => {
            await Book.create(sampleBook);
            const response = await request(app).get('/api/books');
            
            expect(response.status).toBe(200);
            expect(response.body).toHaveLength(1);
            expect(response.body[0].title).toBe(sampleBook.title);
        });

        it('should handle database errors on list', async () => {
            jest.spyOn(Book, 'find').mockRejectedValueOnce(new Error('Database error'));
            
            const response = await request(app).get('/api/books');
            expect(response.status).toBe(500);
        });
    });

    describe('GET /api/books/:id', () => {
        it('should return a book by id', async () => {
            const book = await Book.create(sampleBook);
            const response = await request(app).get(`/api/books/${book._id}`);

            expect(response.status).toBe(200);
            expect(response.body.title).toBe(sampleBook.title);
        });

        it('should return 404 for non-existent book', async () => {
            const fakeId = new mongoose.Types.ObjectId();
            const response = await request(app).get(`/api/books/${fakeId}`);

            expect(response.status).toBe(404);
        });

        it('should handle database errors on get', async () => {
            const fakeId = new mongoose.Types.ObjectId();
            jest.spyOn(Book, 'findById').mockRejectedValueOnce(new Error('Database error'));
            
            const response = await request(app).get(`/api/books/${fakeId}`);
            expect(response.status).toBe(500);
        });
    });

    describe('PUT /api/books/:id', () => {
        it('should update a book', async () => {
            const book = await Book.create(sampleBook);
            const updateData = { title: 'Updated Title' };

            const response = await request(app)
                .put(`/api/books/${book._id}`)
                .send(updateData);

            expect(response.status).toBe(200);
            expect(response.body.title).toBe(updateData.title);
            expect(response.body.author).toBe(sampleBook.author);
        });

        it('should return 404 when updating non-existent book', async () => {
            const fakeId = new mongoose.Types.ObjectId();
            const response = await request(app)
                .put(`/api/books/${fakeId}`)
                .send({ title: 'Updated Title' });

            expect(response.status).toBe(404);
        });

        it('should handle database errors on update', async () => {
            const fakeId = new mongoose.Types.ObjectId();
            jest.spyOn(Book, 'findByIdAndUpdate').mockRejectedValueOnce(new Error('Database error'));
            
            const response = await request(app)
                .put(`/api/books/${fakeId}`)
                .send({ title: 'Updated Title' });
            
            expect(response.status).toBe(500);
        });
    });

    describe('DELETE /api/books/:id', () => {
        it('should delete a book', async () => {
            const book = await Book.create(sampleBook);
            const response = await request(app).delete(`/api/books/${book._id}`);

            expect(response.status).toBe(204);

            const deletedBook = await Book.findById(book._id);
            expect(deletedBook).toBeNull();
        });

        it('should return 404 when deleting non-existent book', async () => {
            const fakeId = new mongoose.Types.ObjectId();
            const response = await request(app).delete(`/api/books/${fakeId}`);

            expect(response.status).toBe(404);
        });

        it('should handle database errors on delete', async () => {
            const fakeId = new mongoose.Types.ObjectId();
            jest.spyOn(Book, 'findByIdAndDelete').mockRejectedValueOnce(new Error('Database error'));
            
            const response = await request(app).delete(`/api/books/${fakeId}`);
            expect(response.status).toBe(500);
        });
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });
}); 