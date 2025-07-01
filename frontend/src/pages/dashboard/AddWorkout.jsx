import React, {useEffect, useState} from 'react'
import { FormField, Button } from '../../components'
import { addWorkout, getWorkout } from '../../controllers/workouts';
import { useNavigate, useParams } from 'react-router-dom';

const AddWorkout = () => {

    const navigate = useNavigate()
    const {id} = useParams()

    const [formData, setFormData] = useState({
        week: "",
        movementtype: "",
        exercise: "",
        weight: "",
        sets: "",
        reps: ""
      });
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState()
    const [error, setError] = useState()

    useEffect(() => {
        if(id){
        async function fetchWorkoutDetails(){
            setLoading(true)
            try {
                const res = await getWorkout(id)   
                setFormData({
                week: res.workout.training_week,
                movementtype: res.workout.movement_type,
                exercise: "", weight: "", sets: "", reps: ""
                })
                setLoading(false)
            } catch (error) {
                setError(error.response?.data?.msg || "Failed to fetch workout");
                setLoading(false);
            }
        }

        

        fetchWorkoutDetails()
    }
    }, [])

    const handleAddWorkout = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
          await addWorkout({
            trainingWeek: formData.week,
            movementType: formData.movementtype,
            exerciseName: formData.exercise,
            weight: formData.weight,
            sets: formData.sets,
            reps: formData.reps
          })
          setSuccess("Workout Added successfully")
          setFormData({ week: "", movementtype: "", exercise: "", weight: "", sets: "", reps: "" });
          setTimeout(() => {
            setSuccess("")
            navigate('/dashboard')
          }, 1500)
        } catch (error) {
            console.log(error);            
          setError(error.response?.data?.msg || "Failed to fetch workouts");
          setLoading(false);
        }
    }

  return (
    <div className='text-white max-w-7xl mx-auto flex flex-col p-4 lg:p-10 space-y-5 my-2'>
        <div className=''>
            <h1 className="text-4xl font-bold text-white">Add Workout</h1>
            <span className="text-slate-400">Track and manage your workouts</span>
        </div>
        <div className="bg-gradient-to-tl from-slate-900 to-slate-950 text-slate-200 w-full p-5 rounded-lg border border-slate-600">

            {success && (
                <div className='mt-4 p-3 bg-green-900/20 text-green-400 rounded-lg text-center text-sm'>
                {success}
                </div>
            )}
                                
            {error && (
                <div className='mt-4 p-3 bg-red-900/20 text-red-400 rounded-lg text-center'>
                {error}
                </div>
            )}

            <span className="text-2xl font-semibold">Log New Workout</span>
            <form onSubmit={handleAddWorkout} className="mt-4 w-full">
                <div className="flex flex-col md:flex-row flex-wrap md:gap-5">
                <FormField
                    value={formData.week}
                    onChange={(e) => setFormData((prev) => ({...prev, week: e.target.value}))}
                    label="Training Week"
                    name='week'
                    type="number"
                    className="flex-1"
                    labelClassName="text-sm"
                    placeholder="Enter week number"
                    defaultValue={''}
                />
                <FormField
                    value={formData.movementtype}
                    onChange={(e) => setFormData((prev) => ({...prev, movementtype: e.target.value}))}
                    label="Movement Type"
                    name="movementtype"
                    type="text"
                    className="flex-1"
                    labelClassName="text-sm"
                    placeholder="eg. Push"
                    defaultValue={''}
                />
                </div>
                <div className="flex flex-col md:flex-row flex-wrap md:gap-3">
                <FormField
                    value={formData.exercise}
                    onChange={(e) => setFormData((prev) => ({...prev, exercise: e.target.value}))}
                    label="Exercise"
                    name="exercise"
                    type="text"
                    className="flex-1"
                    labelClassName="text-sm"
                    placeholder="eg. Bench Press"
                />
                <FormField
                    value={formData.weight}
                    onChange={(e) => setFormData((prev) => ({...prev, weight: e.target.value}))}
                    label="Weight"
                    name="weight"
                    type="number"
                    className="flex-1"
                    labelClassName="text-sm"
                    placeholder="0"
                />
                <FormField
                    value={formData.sets}
                    onChange={(e) => setFormData((prev) => ({...prev, sets: e.target.value}))}
                    label="Sets"
                    name="sets"
                    type="number"
                    className="flex-1"
                    labelClassName="text-sm"
                    placeholder="0"
                />
                <FormField
                    value={formData.reps}
                    onChange={(e) => setFormData((prev) => ({...prev, reps: e.target.value}))}
                    label="Reps"
                    name="reps"
                    type="text"
                    className="flex-1"
                    labelClassName="text-sm"
                    placeholder="eg. 8-10"
                />
                </div>

                <div className="mt-4 flex justify-end gap-3">

                <Button
                    type="submit"
                    className="px-4 py-1 bg-gradient-to-br from-[#27c2ff] to-[#0d76de] text-black cursor-pointer hover:from-[#0d76de] hover:to-[#27c2ff] transition duration-200"
                >
                    {loading ? "Adding Workout" : "Add"}
                </Button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default AddWorkout