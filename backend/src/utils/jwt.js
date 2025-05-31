import jwt from "jsonwebtoken";

export const createToken = (payload) => { // payload = user data (user id and name)
    return jwt.sign(payload, process.env.JWT_SERCET, {expiresIn: process.env.JWT_LIFETIME})
} 

export const verifyToken = async (token) => {
    return jwt.verify(token, process.env.JWT_SERCET)
}