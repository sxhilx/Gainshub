import jwt from "jsonwebtoken";
import dotenv from "dotenv";

export const createToken = (payload) => { // payload = user data (user id and name)
    return jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: process.env.JWT_LIFETIME})
} 

export const verifyToken = async (token) => {
    return await jwt.verify(token, process.env.JWT_SECRET)
}