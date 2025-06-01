import express from "express";
import { addWorkouts, deleteWorkout, editWorkout, getWorkout, getAllWorkouts } from "../controller/workoutController.js";

const router = express.Router()

router.route('/').get(getAllWorkouts).post(addWorkouts)
router.route('/:id').get(getWorkout).patch(editWorkout).delete(deleteWorkout)


export default router;