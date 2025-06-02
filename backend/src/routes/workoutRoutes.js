import express from "express";
import { addWorkouts, deleteWorkout, editWorkout, getWorkout, getAllWorkouts } from "../controller/workoutController.js";
import { validateInput, workoutSchema } from "../middlewares/inputValidation.js";

const router = express.Router()

router.route('/').get(getAllWorkouts).post( validateInput(workoutSchema), addWorkouts)
router.route('/:id').get(getWorkout).patch( validateInput(workoutSchema), editWorkout).delete(deleteWorkout)


export default router;