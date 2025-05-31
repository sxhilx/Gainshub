import express from "express";
import { addWorkouts, deleteWorkout, editWorkout, getSingleWorkout, getWorkouts } from "../controller/workoutController.js";

const router = express.Router()

router.route('/').get(getWorkouts).post(addWorkouts)
router.route('/:id').get(getSingleWorkout).patch(editWorkout).delete(deleteWorkout)


export default router;