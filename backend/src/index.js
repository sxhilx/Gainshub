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
app.use(cors());
app.use(rateLimiter({
    windowMs: 15*60*1000,
    limit: 100,
    message: 'Too many auth requests from this IP. Try again later.'
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


// test route
app.get('/', async(req, res) => {
    const result = await pool.query("SELECT current_database()");
    res.send(`The current database name is: ${result.rows[0].current_database}`)
})


app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);
    
})
