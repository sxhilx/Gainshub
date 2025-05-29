import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000

// Middlewares
app.use(express.json());
app.use(cors());

// Routes


// Error handling middleware




app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);
    
})
