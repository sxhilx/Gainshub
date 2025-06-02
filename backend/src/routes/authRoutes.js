import express from "express"
import { login, register, verifyEmail } from "../controller/authController.js";


const router = express.Router();

router.get('/login', login)
router.post('/register', register)
router.post('/verify-email', verifyEmail)

export default router;