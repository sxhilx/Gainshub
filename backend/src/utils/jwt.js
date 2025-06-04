import jwt from "jsonwebtoken";


export const createAuthToken = (payload) => { // payload = user data (user id and name)
    return jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: process.env.JWT_LIFETIME})
} 

export const verifyAuthToken = async (token) => {
    return jwt.verify(token, process.env.JWT_SECRET)
}

export const createEmailToken = (payload) => {
    return jwt.sign(payload, process.env.JWT_EMAIL_SECRET, {expiresIn: process.env.JWT_EMAIL_LIFETIME})
}

export const verifyEmailToken = async (token) => {
    return jwt.verify(token, process.env.JWT_EMAIL_SECRET)
}

export const createResetPasswordToken = (payload) => {
    return jwt.sign(payload, process.env.JWT_PASSWORD_SECRET, {expiresIn: process.env.JWT_PASSWORD_LIFETIME})
}

export const verifyResetPasswordToken = async (token) => {
    return jwt.verify(token, process.env.JWT_PASSWORD_SECRET)
}