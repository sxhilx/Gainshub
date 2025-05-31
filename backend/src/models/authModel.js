import pool from "../config/db.js"
import { NotFoundError, BadRequestError, UnauthenticatedError } from "../errors/index.js"

export const loginService = async (email, password) => {
    const result = await pool.query("")
}

export const registerService = async (fullname, email, password) => {
    
}

export const userDetailsService = async (id) => {
    
}
