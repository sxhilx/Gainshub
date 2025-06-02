import pool from "../config/db.js"
import { NotFoundError, UnauthenticatedError } from "../errors/index.js";


export const verifyEmailMiddleware = async (req, res, next) => {

    const {userId} = req.user;

    const result = await pool.query("SELECT * FROM users WHERE id=$1", [userId]);
    if(!result){
        throw NotFoundError("User not found")
    }
    const is_verified = result.rows[0].is_verified

    if(!is_verified){
        throw new UnauthenticatedError("Please Verify Email address")        
    }

    next()    
}