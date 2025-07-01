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
        const response = await API.get(`/pr/${prId}`)
        return response.data
    } catch (error) {
        console.error("Error: ", error.response?.data || error.message)
        throw error;
    }
}

export const editPr = async (prId, userData) => {
    try {
        const response = await API.patch(`/pr/${prId}`, userData)
        return response.data
    } catch (error) {
        console.error("Error: ", error.response?.data || error.message)
        throw error;
    }
}

export const deletePr = async (prId) => {
    try {
        const response = await API.delete(`/pr/${prId}`)
        return response.data
    } catch (error) {
        console.error("Error: ", error.response?.data || error.message)
        throw error;
    }
}