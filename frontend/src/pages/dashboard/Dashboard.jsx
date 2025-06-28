import React, { useState, useEffect } from 'react'
import { Button, WorkoutCard } from '../../components'
import { DumbbellIcon, PlusIcon } from 'lucide-react'
import { getWorkoutsByWeeks, deleteWorkout } from '../../controllers/workouts'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {

  const navigate = useNavigate()
  const [workoutsByWeek, setWorkoutsByWeek] = useState({})
  
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState()
  const [error, setError] = useState()


  const fetchLatestWeek = async() => {
    setLoading(true)
    try {        
      const res = await getWorkoutsByWeeks();   
      const group = res.groupByWeek
      const latestWeek = Math.max(...Object.keys(group).map(Number)).toString(); // return the latest week number
      console.log(latestWeek);
      const latestWeeklyWorkouts = group[latestWeek]
      setWorkoutsByWeek({
        [latestWeek] : latestWeeklyWorkouts
      });
      setLoading(false)
    } catch (error) {
      setError(error.response?.data?.msg || "Failed to fetch workouts");
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchLatestWeek();
  }, [])

  const handleOnDelete = async (id) => {
    setLoading(true)
    try {
      await deleteWorkout(id)      
      fetchLatestWeek()
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
      <div className="text-white max-w-7xl mx-auto flex flex-col p-4 lg:p-10 relative z-10">

        <div className=" space-y-4 md:flex flex-row justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold">Dashboard</h1>
            <span className="text-slate-400">Ready to crush your fitness goals today?</span>
          </div>

          <div>
            <Button
              to={'/add-workout'}
              className="px-2 lg:px-4 font-medium text-xs lg:text-sm bg-gradient-to-tr from-[#27c2ff] to-[#0d76de] text-black cursor-pointer hover:from-[#0d76de] hover:to-[#27c2ff] transition duration-200 flex gap-2 items-center"
            >
              <PlusIcon />
              Log New Workout
            </Button>
          </div>
        </div>

        <div className="my-10 border p-4 md:p-5 rounded-lg border-slate-800 shadow">
          <span className="text-2xl font-semibold flex items-center gap-2">
            <DumbbellIcon size={24} className="text-[#27c2ff]" />
            Latest week
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

export default Dashboard
