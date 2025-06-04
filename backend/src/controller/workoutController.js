import { StatusCodes } from "http-status-codes"
import { addWorkoutService, deleteWorkoutService, editWorkoutService, getWorkoutsByWeeksService, getAllWorkoutsService, getWorkoutService } from "../models/workoutsModel.js"



export const getAllWorkouts = async (req, res) => {
    const { userId } = req.user;    
    const workouts = await getAllWorkoutsService(userId);
    res.status(StatusCodes.OK).json({workouts, count:workouts.length})
}

export const getWorkoutsByWeeks = async(req, res) => {
    const {userId}= req.user;
    const workoutByWeeks = await getWorkoutsByWeeksService(userId)
    res.status(StatusCodes.OK).json(workoutByWeeks)
}

export const addWorkouts = async (req, res) => {
    const {userId} = req.user
    const {trainingWeek, movementType, exerciseName, weight, sets, reps} = req.body

    const workout = await addWorkoutService(userId, trainingWeek, movementType, exerciseName, weight, sets, reps);
    res.status(StatusCodes.CREATED).json({workout})
}


export const getWorkout = async (req, res, next) => {
    const {userId} = req.user
    const {id:workoutId} = req.params;

    const workout = await getWorkoutService(workoutId, userId);
    res.status(StatusCodes.OK).json({workout})
}


export const editWorkout = async (req, res, next) => {
    const {userId} = req.user
    const {id:workoutId} = req.params;
    const {trainingWeek, movementType, exerciseName, weight, sets, reps} = req.body;

    const workout = await editWorkoutService(userId, workoutId, trainingWeek, movementType, exerciseName, weight, sets, reps);
    res.status(StatusCodes.CREATED).json({workout}); 
}


export const deleteWorkout = async (req, res, next) => {
    const {userId} = req.user
    const {id:workoutId} = req.params;
    const workout = await deleteWorkoutService(workoutId, userId);
    res.status(StatusCodes.OK).json(workout);
}