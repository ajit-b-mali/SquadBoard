// backend/server.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import { connectDB } from './config/db.js';

import authRoute from './routes/auth.js';
import taskRoute from './routes/tasks.js';

// Load env variables from .env file
dotenv.config();

// Connect Database
connectDB();

// Middleware
const app = express();
app.use(cors({
    origin: "*", // We will lock this down later
    credentials: true
}));            // Enable CORS
app.use(express.json());    // Parse JSON bodies

// Auth Route
app.get('/', (req, res) => res.send('SquadBoard API is Running on Vercel!'));
app.use('/api/auth', authRoute);
app.use('/api/tasks', taskRoute);

if (process.env.NODE_ENV !== 'production') {
    
}

export default app;