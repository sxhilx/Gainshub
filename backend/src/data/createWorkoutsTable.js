import pool from "../config/db.js";

export const createWorkoutsTable = async() => {
    try {
        await pool.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`)
        const queryText = `CREATE TABLE IF NOT EXISTS workouts(
                            id  UUID PRIMARY KEY DEFAULT uuid_generate_v1(),
                            user_id UUID REFERENCES users(id) ON DELETE CASCADE,
                            training_week INT NOT NULL,
                            movement_type VARCHAR(20) NOT NULL,
                            exercise_name VARCHAR(20) NOT NULL,
                            weight NUMERIC(5,2) NOT NULL,
                            sets INT NOT NULL,
                            reps VARCHAR(10) NOT NULL,
                            created_at TIMESTAMP DEFAULT NOW()
                        );`;
        await pool.query(queryText);
        console.log("Workouts table created successfully");        
    } catch (error) {
        console.error("Error while creating workouts table", error.message)
    }
}