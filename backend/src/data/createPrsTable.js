import pool from "../config/db.js";

export const createPrsTable = async() => {
    try {
        await pool.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`)
        const queryText = `CREATE TABLE IF NOT EXISTS prs(
                                id UUID PRIMARY KEY DEFAULT uuid_generate_v1(),
                                user_id UUID REFERENCES users(id) ON DELETE CASCADE,
                                exercise_name VARCHAR(20) NOT NULL,
                                weight NUMERIC(5,2) NOT NULL,
                                created_at TIMESTAMP DEFAULT NOW()
                            );`;
        await pool.query(queryText);
        console.log("PRs table created successfully");        
    } catch (error) {
        console.error("Error while creating PRs table", error.message)
    }
}