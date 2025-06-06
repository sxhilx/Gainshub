import API from "./axios";


export const loginUser = async (userData) => {
    try {
        const response = await API.post('/auth/login', userData);
        return response.data
    } catch (error) {
        console.error("Error while login: ", error)
    }
}

export const registerUser = async (userData) => {
    try {
        const response = await API.post('/auth/register', userData)
        return response.data
    } catch (error) {
        console.error("Error while login: ", error)
    }
}

export const verifyUserEmail = async () => {
    try {
        const params = URLSearchParams(window.location.search)
        const {token} = params.get('token')
        const response = await API.get(`/auth/verify-email?token=${token}`)
        return response.data
    } catch (error) {
        console.error("Error verifing email: ", error)
    }
}

export const resendVerificationEmail = async (userEmail) => {
    try {
        const response = await API.post('/auth/resend-email', userEmail)
        return response.data
    } catch (error) {
        console.error("Error resending email: ", error)
    }
}

export const forgotPassword = async (userEmail) => {
    try {
        const response = await API.post('/auth/forgot-password', userEmail)
        return response.data
    } catch (error) {
        console.error("Error: ", error)
    }
}

export const resetPassword = async (userData) => {
    try {
        const response = await API.post('/reset-password', userData)
        return response.data
    } catch (error) {
        console.error("Error: ", error)
    }
}

export const googleLogin = async () => {
    try {
        await API.post('/auth/google')
    } catch (error) {
        console.error("Error while loggin with google: ", error)
    }
}