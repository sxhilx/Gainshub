import pool from "../config/db.js";

export const createUsersTable = async () => {
    try {
        await pool.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`)
        const queryText = `CREATE TABLE IF NOT EXISTS users(
                                id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
                                fullname VARCHAR(20) NOT NULL,
                                email VARCHAR(50) UNIQUE NOT NULL,
                                password TEXT NOT NULL,
                                created_at TIMESTAMP DEFAULT NOW(),
                                is_verified BOOLEAN DEFAULT false
                            );`;
    
        await pool.query(queryText);
        console.log("Users table created successfully");                
        
    } catch (error) {
        console.error("Error while createing users table", error.message);
    }
}