import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import pool from "./config/db.js";
import authRoutes from "./routes/authRoutes.js"
import workoutRoutes from "./routes/workoutRoutes.js"
import prRoutes from "./routes/prRoutes.js"
import { notFound } from "./middlewares/notFound.js";
import { authMiddleware } from "./middlewares/auth.js";
import { createAllTables } from "./data/createAllTables.js";
import { verifyEmailMiddleware } from "./middlewares/verifyEmailMiddleware.js";
import rateLimiter from "express-rate-limit"
import { errorHandlerMiddleware } from "./middlewares/errorHandlerMiddleware.js";
import passport from "passport";
import './utils/passport.js'


dotenv.config();

const app = express();
const port = process.env.PORT || 3000

// Middlewares
app.use(express.json());

const allowedOrigins = [
  'http://localhost:5173', // for local development
  "https://accounts.google.com/" 
];

app.use(cors({
  origin: allowedOrigins,
  methods: ['GET', 'POST', 'PATCH', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true // Allows cookies and authorization headers
}));

app.use(rateLimiter({
    windowMs: 15*60*1000,
    max: 100,
    message: 'Too many requests from this IP. Try again later.'
}))

app.use(passport.initialize());

// Routes
app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/workouts', authMiddleware, verifyEmailMiddleware, workoutRoutes)
app.use('/api/v1/pr', authMiddleware, verifyEmailMiddleware, prRoutes)

// Error handling middleware
app.use(errorHandlerMiddleware)
app.use(notFound)


// Create all the tables
createAllTables();


// Default route
app.get('/', async(req, res) => {
    res.send(`Welcome to GainsHub API`)
})


app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);
    
})
