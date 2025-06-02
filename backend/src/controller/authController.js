import { StatusCodes } from "http-status-codes";
import { loginService, registerService, verifyEmailService } from "../models/authModel.js";

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
    const {token} = req.query;
    const verify = await verifyEmailService(token);

    res.status(StatusCodes.OK).send(verify)
}

export const resendVerificationToken = async (req, res) => {
    const {email} = req.body;
    const resend = resendVerificationToken(email);
    res.StatusCodes(StatusCodes.OK).send(resend)
}