import { StatusCodes } from "http-status-codes";
import { forgotPasswordService, loginService, registerService, resendVerificationTokenService, resetPasswordService, verifyEmailService } from "../models/authModel.js";

export const login = async(req, res) => {
    const {email, password} = req.body;
    const user = await loginService(email, password);
    res.status(StatusCodes.OK).json(user);
}

export const register = async(req, res) => {
    const {fullname, email, password} = req.body;
    console.log(password);
    
    const user = await registerService(fullname, email, password);
    res.status(StatusCodes.CREATED).json(user);
}

export const verifyEmail = async(req, res) => {
    const { token } = req.query;
    const verify = await verifyEmailService(token);

    res.status(StatusCodes.OK).json(verify)
}

export const resendVerificationToken = async (req, res) => {
    const {email} = req.body;
    console.log(email);
    
    const resend = await resendVerificationTokenService(email);
    res.status(StatusCodes.OK).json(resend)
}

export const forgotPassword = async(req, res) => {
    const {email} = req.body;
    const reset = await forgotPasswordService(email)
    res.status(StatusCodes.OK).json(reset)
}

export const resetPassword = async (req, res) => {
    const {token, newPassword} = req.body
    const reset = await resetPasswordService(token, newPassword)
    res.status(StatusCodes.OK).json(reset)
}
