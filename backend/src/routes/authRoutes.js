import express from "express"
import { login, register, verifyEmail } from "../controller/authController.js";
import { userSchema, validateInput } from "../middlewares/inputValidation.js";
import { resendVerificationToken } from "../models/authModel.js";
import passport from "passport";


const router = express.Router();

router.get('/login', login)
router.post('/register', validateInput(userSchema), register)
router.post('/verify-email', verifyEmail)
router.post('/resend-verification', resendVerificationToken)

router.get('/google', 
    passport.authenticate('google', {
    scope: [
        'openid', 'email', 'profile']
    })
)


router.get('/google/callback',
    passport.authenticate('google', {session: false, failureRedirect: '/login' }),
    function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
    }
)

export default router;