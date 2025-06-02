import express from "express"
import { login, register, verifyEmail } from "../controller/authController.js";
import { userSchema, validateInput } from "../middlewares/inputValidation.js";
import { resendVerificationToken } from "../models/authModel.js";


const router = express.Router();

router.get('/login', login)
router.post('/register', validateInput(userSchema), register)
router.post('/verify-email', verifyEmail)
router.post('/resend-verification', resendVerificationToken)

export default router;