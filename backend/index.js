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

// Define allowed origins: Your Localhost AND your Production Frontend
const allowedOrigins = [
  "http://localhost:5173",
  "https://squadboard.ajitmali.me"
];

app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true, // Allow cookies/headers
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Allow these specific actions
  allowedHeaders: ["Content-Type", "Authorization"]
}));

// Explicitly handle preflight requests (OPTIONS)
app.options('*', cors());
app.use(express.json());    // Parse JSON bodies

// Auth Route
app.get('/', (req, res) => res.send('SquadBoard API is Running on Vercel!'));
app.use('/api/auth', authRoute);
app.use('/api/tasks', taskRoute);

if (process.env.NODE_ENV !== 'production') {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));
}

export default app;