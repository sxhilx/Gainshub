import { StatusCodes } from "http-status-codes";
import { loginService, registerService } from "../models/authModel.js";

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