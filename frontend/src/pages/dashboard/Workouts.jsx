import React, {useState, useEffect} from 'react'
import { Button, WorkoutCard } from '../../components'
import { Activity, PlusIcon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { getWorkoutsByWeeks, deleteWorkout } from '../../controllers/workouts'

const Workouts = () => {

  const navigate = useNavigate()
  const [workoutsByWeek, setWorkoutsByWeek] = useState({})
  
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()


  const fetchWorkouts = async() => {
    setLoading(true)
    try {        
      const res = await getWorkoutsByWeeks();   
      console.log(res);
      setWorkoutsByWeek(res.groupByWeek)
      setLoading(false)
    } catch (error) {
      setError(error.response?.data?.msg || "Failed to fetch workouts");
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchWorkouts();
    console.log(workoutsByWeek)   
  }, [])

  const handleOnDelete = async (id) => {
    setLoading(true)
    try {
      await deleteWorkout(id)      
      fetchWorkouts()
      setLoading(false)
    } catch (error) {
      setError(error.response?.data?.msg || "Failed to delete workout");
      setLoading(false);
    }
  }

  const handleOnAddExercise = async (id) => {
    navigate(`/add-workout/${id}`)
  }

  return (
    <div className='text-white max-w-6xl mx-auto flex flex-col p-4 lg:p-10 space-y-5'>
        
        <div className="space-y-4 md:flex flex-row justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold">Workouts</h1>
            <span className="text-slate-400">Every workout you ever logged!</span>
          </div>

          <Button
            to={'/add-workout'}
            className="px-2 lg:px-4 font-medium text-xs lg:text-sm bg-gradient-to-tr from-[#27c2ff] to-[#0d76de] text-black cursor-pointer hover:from-[#0d76de] hover:to-[#27c2ff] transition duration-200 flex gap-2 items-center"
          >
            <PlusIcon />
            Log New Workout
          </Button>
        </div>

        <div className="my-10 border rounded-lg border-slate-800 shadow">
          <span className="text-2xl font-semibold flex items-center gap-2 m-3">
            <Activity size={24} className='text-[#27c2ff]'/>
            All workouts
          </span>
          {
                 
          Object.entries(workoutsByWeek).map(([week, workouts]) => {
            if (!workouts || workouts.length === 0) {
              return(
                <p className="text-slate-400 italic m-5">No workouts available</p>
              )
            };
            return(
              <WorkoutCard
                key={week}
                week={week}
                workouts={workouts}
                date={new Date(workouts[0]?.created_at).toLocaleDateString()}
                onDelete={handleOnDelete}
                onAdd={handleOnAddExercise}
              />
            )
          })
          
          
          }
        </div>
    
    </div>
  )
}

export default Workouts