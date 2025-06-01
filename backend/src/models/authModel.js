import pool from "../config/db.js"
import { BadRequestError, UnauthenticatedError } from "../errors/index.js"
import { comparePassword, hashPassword } from "../utils/hash.js";
import { createToken } from "../utils/jwt.js";

export const loginService = async (email, password) => {

    const result = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
    const user = result.rows[0]

    if(!user){
        throw new UnauthenticatedError("Invalid credentials")
    }

    const isMatch = await comparePassword(password, user.password)

    if(!isMatch){
        throw new UnauthenticatedError("Invalid credentials")
    }

    const token = createToken({userId: user.id, name: user.fullname});

    return {token, user:{id: user.id, fullname: user.fullname, email: user.email}};

}

export const registerService = async (fullname, email, password) => {
    const existingUser = await pool.query("SELECT * FROM users WHERE email=$1", [email]);

    if(existingUser.rows.length > 0){
        throw new BadRequestError("Email already registered")
    }

 
    const hashedPassword = await hashPassword(password)

    const result = await pool.query("INSERT INTO users (fullname, email, password) VALUES ($1, $2, $3) RETURNING *", [fullname, email, hashedPassword])
    const user = result.rows[0]

    const token = createToken({userId: user.id, name: user.fullname});
    
    return {token, user:{id: user.id, fullname: user.fullname, email: user.email}}
}

