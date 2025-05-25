import mongoose from 'mongoose';

export const connectDatabase = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/library');
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Error connecting to database:', error);
        throw error;
    }
}; 