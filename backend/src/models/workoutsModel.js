import pool from "../config/db.js";
import { BadRequestError } from "../errors/index.js";
 
export const getAllWorkoutsService = async (userId) => {
    const result = await pool.query("SELECT * FROM workouts WHERE user_id = $1", [userId])
    return result.rows;
}

export const addWorkoutService = async (userId, trainingWeek, movementType, exerciseName, weight, sets, reps) => {
    const result = await pool.query(`INSERT INTO workouts (
        user_id, 
        training_week,
        movement_type,
        exercise_name,
        weight,
        sets,
        reps) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`, [userId, trainingWeek, movementType, exerciseName, weight, sets, reps]);
    
    return result.rows[0];
}

export const getWorkoutService = async (workoutId, userId) => {
    const result = await pool.query("SELECT * FROM workouts WHERE id=$1 AND user_id=$2", [workoutId, userId])

    if (result.rows.length === 0) {
        throw new BadRequestError("No Workout with this id exists");
    }

    return result.rows[0];
}

export const editWorkoutService = async (userId, workoutId, trainingWeek, movementType, exerciseName, weight, sets, reps) => {
    const result = await pool.query(`UPDATE workouts
                                SET 
                                training_week=$1,
                                movement_type=$2,
                                exercise_name=$3,
                                weight=$4,
                                sets=$5,
                                reps=$6
                                WHERE id=$7 AND user_id=$8
                                RETURNING *`, [trainingWeek, movementType, exerciseName, weight, sets, reps, workoutId, userId]);
    if(!result){
        throw new BadRequestError("Please provide valid details")
    }

    return result.rows[0];
}

export const deleteWorkoutService = async (workoutId, userId) => {
    const result = await pool.query(`DELETE FROM workouts WHERE id=$1 AND user_id=$2 RETURNING *`, [workoutId, userId]);

    if (!result) {
        throw new BadRequestError("Workout not found or unauthorized");
    }

    return "Successfully deleted"
}