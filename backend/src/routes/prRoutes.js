import express from "express"
import { addPr, deletePr, editPr, getAllPrs, getPr } from "../controller/prController.js";

const router = express.Router();

router.route('/').get(getAllPrs).post(addPr);
router.route('/:id').get(getPr).patch(editPr).delete(deletePr);

export default router;