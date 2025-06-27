import API from "./axios";

export const getAllWorkouts = async () => {
    try {
        const response = await API.get('/workouts/')
        return response.data
    } catch (error) {
        console.error("Error: ", error.response?.data || error.message)
        throw error;
    }
}

export const getWorkoutsByWeeks = async () => {
    try {
        const response = await API.get('/workouts/by-weeks')
        return response.data
    } catch (error) {
        console.error("Error: ", error.response?.data || error.message)
        throw error;
    }
}

export const addWorkout = async (userData) => {
    try {
        const response = await API.post('/workouts/', userData)
        return response.data
    } catch (error) {
        console.error("Error: ", error.response?.data || error.message)
        throw error;
    }
}

export const getWorkout = async (workoutId) => {
    try {
        const response = await API.get(`/workouts/${workoutId}`)
        return response.data
    } catch (error) {
        console.error("Error: ", error.response?.data || error.message)
        throw error;    
    }
}

export const editWorkout = async (workoutId, userData) => {
    try {
        const response = await API.patch(`/workouts/${workoutId}`, userData)
        return response.data
    } catch (error) {
        console.error("Error: ", error.response?.data || error.message)
        throw error;
    }
}

export const deleteWorkout = async (workoutId) => {
    try {
        const response = await API.delete(`/workouts/${workoutId}`)
        return response.data
    } catch (error) {
        console.error("Error: ", error.response?.data || error.message)
        throw error;
    }
}