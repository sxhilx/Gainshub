import pool from "../config/db.js";
import { BadRequestError } from "../errors/index.js";
 
export const getAllPrsService = async (userId) => {
    const result = await pool.query("SELECT * FROM prs WHERE user_id = $1", [userId])
    return result.rows;
}

export const addPrService = async (userId, exerciseName, weight) => {
    const result = await pool.query(`INSERT INTO prs (
        user_id, 
        exercise_name,
        weight) VALUES ($1, $2, $3) RETURNING *`, [userId, exerciseName, weight]);
    
    return result.rows[0];
}

export const getPrService = async (prId, userId) => {
    const result = await pool.query("SELECT * FROM prs WHERE id=$1 AND user_id=$2", [prId, userId])

    if (result.rows.length === 0) {
        throw new BadRequestError("No PR with this id exists");
    }

    return result.rows[0];
}

export const editPrService = async (prId, userId, exerciseName, weight) => {
    const result = await pool.query(`UPDATE prs
                                SET 
                                exercise_name=$1,
                                weight=$2
                                WHERE id=$3 AND user_id=$4
                                RETURNING *`, [exerciseName, weight, prId, userId]);
                                
    if (result.rows.length === 0) {
        throw new BadRequestError("No PR with this id exists");
    }

    return result.rows[0];
}

export const deletePrService = async (prId, userId) => {
    const result = await pool.query(`DELETE FROM prs WHERE id=$1 AND user_id=$2 RETURNING *`, [prId, userId]);

    if (result.rows.length === 0) {
        throw new BadRequestError("PR not found");
    }

    return result.rows[0];
}