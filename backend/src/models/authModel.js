import pool from "../config/db.js"
import { BadRequestError, UnauthenticatedError } from "../errors/index.js"
import { comparePassword, hashPassword } from "../utils/hash.js";
import { createAuthToken, createEmailToken, verifyEmailToken } from "../utils/jwt.js";
import { sendVerificationEmail } from "../utils/mailer.js";

export const loginService = async (email, password) => {
    const result = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
    const user = result.rows[0];

    if(!user){
        throw new UnauthenticatedError("Invalid credentials")
    }

    if(!user.is_verified){
        throw new UnauthenticatedError("Please verify email address")
    }

    const isMatch = await comparePassword(password, user.password)

    if(!isMatch){
        throw new UnauthenticatedError("Invalid credentials")
    }

    const authToken = createAuthToken({userId: user.id, name: user.fullname});


    return {authToken, user:{id: user.id, fullname: user.fullname, email: user.email}};

}

export const registerService = async (fullname, email, password) => {
    const existingUser = await pool.query("SELECT * FROM users WHERE email=$1", [email]);

    if(existingUser.rows.length > 0){
        throw new BadRequestError("Email already registered")
    }
 
    const hashedPassword = await hashPassword(password)

    const result = await pool.query("INSERT INTO users (fullname, email, password) VALUES ($1, $2, $3) RETURNING *", [fullname, email, hashedPassword])
    const user = result.rows[0]

    const authToken = createAuthToken({userId: user.id, name: user.fullname});

    const emailToken = createEmailToken({userId: user.id});

    await sendVerificationEmail(email, emailToken)
    
    return {emailToken, authToken, user:{id: user.id, fullname: user.fullname, email: user.email}}
}

export const verifyEmailService = async(token) => {
    try {
        const decode = await verifyEmailToken(token);
        const {userId} = decode

        await pool.query("UPDATE users SET is_verified=true WHERE id=$1", [userId])
        return "Email Verified"
    } catch (error) {
        throw new UnauthenticatedError('Verification token incorrect or expired')
    }
    
}

export const resendVerificationToken = async (email) => {
    const result = await pool.query("SELECT * FROM users WHERE email=$1", [email])
    const user = result.rows[0]

    if(!user){
        throw new BadRequestError("Email not found")
    }

    if(user.is_verified){
        throw new BadRequestError("Email Already Verified")
    }

   const emailToken = createEmailToken({userId: user.id}) 
   await sendVerificationEmail(email, emailToken)
   return "Verification Email Sent"
   
}

export const googleAuthService = async ({email, fullname}) => {

    console.log(email);
    console.log(fullname);
    

    const result = await pool.query("SELECT * FROM users WHERE email=$1", [email])
    let user = result.rows[0]

    if(!user){
        const password = Date.now().toString();
        const hashedPassword = await hashPassword(password);

        const createUser = await pool.query("INSERT INTO users (fullname, email, password, is_verified) VALUES ($1, $2, $3, $4) RETURNING *", [fullname, email, hashedPassword, true])
        
        user = createUser.rows[0]
    }

    const token = createAuthToken({userId: user.id, fullname: user.fullname})

    return {token, user}

}
