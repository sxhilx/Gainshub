import express from "express"
import { addPr, deletePr, editPr, getAllPrs, getPr } from "../controller/prController.js";
import { prSchema, validateInput } from "../middlewares/inputValidation.js";

const router = express.Router();

router.route('/').get(getAllPrs).post( validateInput(prSchema), addPr);
router.route('/:id').get(getPr).patch( validateInput(prSchema), editPr).delete(deletePr);

export default router;