import bcrypt from "bcryptjs"

export const hashPassword = async(userPassword) => {
    const salt = await bcrypt.genSalt(10); // generates a unique 10 character key
    return await bcrypt.hash(userPassword, salt) // hash the origanl password with the unique key (salt)
}
 
export const comparePassword = async(userPassword, hashedPassword) => {
    return await bcrypt.compare(userPassword, hashedPassword)
}