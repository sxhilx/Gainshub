import express from "express"
import { addPr, deletePr, editPr, getPrs, getSinglePr } from "../controller/prController.js";

const router = express.Router();

router.route('/').get(getPrs).post(addPr);
router.route('/:id').get(getSinglePr).patch(editPr).delete(deletePr);

export default router;