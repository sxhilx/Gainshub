import API from "./axios";


export const loginUser = async (userData) => {
    try {
        console.log(userData);        
        const response = await API.post('/auth/login', userData);
        return response.data
    } catch (error) {
        console.error("Login Error: ", error.response?.data || error.message)
        throw error
    }
}

export const registerUser = async (userData) => {
    try {
        const response = await API.post('/auth/register', userData)
        return response.data
    } catch (error) {
        console.error("Register Error: ", error.response?.data || error.message)
        throw error;
    }
}

export const verifyUserEmail = async (token) => {
    try {
        const response = await API.get(`/auth/verify-email?token=${token}`)
        return response.data
    } catch (error) {
        console.error("Error: ", error.response?.data || error.message)
        throw error;  
    }
}

export const resendVerificationEmail = async (userEmail) => {
    try {
        const response = await API.post('/auth/resend-verification', userEmail)
        return response.data
    } catch (error) {
        console.error("Error: ", error.response?.data || error.message)
        throw error;  
    }
}

export const forgotPassword = async (userEmail) => {
    try {
        const response = await API.post('/auth/forgot-password', userEmail)
        return response.data
    } catch (error) {
        console.error("Error: ", error.response?.data || error.message)
        throw error;    
    }
}

export const resetPassword = async (userData) => {
    try {
        const response = await API.post('/auth/reset-password', userData)
        return response.data
    } catch (error) {
        console.error("Error: ", error.response?.data || error.message)
        throw error;  
    }
}

export const googleLogin = () => {
    window.location.href = 'http://localhost:3000/api/v1/auth/google'
}