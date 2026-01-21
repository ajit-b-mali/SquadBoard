import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { config } from 'dotenv';
import authRoute from './routes/auth.js';
import connectDB from './config/db.js';

config();

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.use('/api/auth', authRoute);

app.get('/', (req, res) => {
    return res.status(200).send('Server is ready');
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});