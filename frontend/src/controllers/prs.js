import API from "./axios";

export const getAllPrs = async () => {
    try {
        const response = await API.get('/pr/')
        return response.data
    } catch (error) {
        console.error("Error: ", error.response?.data || error.message)
        throw error;
    }
}

export const addPr = async (userData) => {
    try {
        const response = await API.post('/pr/', userData)
        return response.data
    } catch (error) {
        console.error("Error: ", error.response?.data || error.message)
        throw error;
    }
}

export const getPr = async (prId) => {
    try {
        const response = await API.get(`/workouts/${prId}`)
        return response.data
    } catch (error) {
        console.error("Error: ", error.response?.data || error.message)
        throw error;
    }
}

export const editPr = async (prId, userData) => {
    try {
        const response = await API.patch(`/workouts/${prId}`, userData)
        return response.data
    } catch (error) {
        console.error("Error: ", error.response?.data || error.message)
        throw error;
    }
}

export const deletePr = async (prId) => {
    try {
        const response = await API.delete(`/workouts/${prId}`)
        return response.data
    } catch (error) {
        console.error("Error: ", error.response?.data || error.message)
        throw error;
    }
}