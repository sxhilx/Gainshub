import express from "express"
import { forgotPassword, login, register, resendVerificationToken, resetPassword, verifyEmail } from "../controller/authController.js";
import { userSchema, validateInput } from "../middlewares/inputValidation.js";
import passport from "passport";
import { StatusCodes } from "http-status-codes";
import rateLimiter from "express-rate-limit";

export const emailLimiter = rateLimiter({
    windowMs: 5*60*1000,
    max: 3,
    message: 'Too many requests. Try again later.'
})

const router = express.Router();



router.get('/login', login)
router.post('/register', validateInput(userSchema), register)

router.get('/verify-email', verifyEmail)
router.post('/resend-verification', emailLimiter, resendVerificationToken)
router.post('/forgot-password', forgotPassword)
router.post('/reset-password', resetPassword)

router.get('/google', 
    passport.authenticate('google', {
    scope: [
        'openid', 'email', 'profile']
    })
)

router.get('/google/callback',
    passport.authenticate('google', {session: false, failureRedirect: '/login' }),
    function(req, res) {
        const {user, token} = req.user
        // Successful authentication, redirect home.
        res.status(StatusCodes.OK).json({authToken: token, userId: user.id})}
)

export default router;