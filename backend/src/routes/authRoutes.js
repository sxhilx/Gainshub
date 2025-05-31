import express from "express"
import { login, register, userDetails } from "../controller/authController.js";


const router = express.Router();

router.get('/login', login)
router.get('/me', userDetails)
router.post('/register', register)

export default router;