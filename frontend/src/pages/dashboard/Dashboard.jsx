import React, { useState, useEffect } from 'react'
import { Button, PRCard, WorkoutCard } from '../../components'
import { DumbbellIcon, PlusIcon, TrophyIcon } from 'lucide-react'
import { getWorkoutsByWeeks, deleteWorkout } from '../../controllers/workouts'
import { useNavigate } from 'react-router-dom'
import { deletePr, getAllPrs } from '../../controllers/prs'

const Dashboard = () => {

  const navigate = useNavigate()
  const [workoutsByWeek, setWorkoutsByWeek] = useState({})
  const [prs, setPrs] = useState([])
  
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState()
  const [error, setError] = useState()


  const fetchLatestWorkout = async() => {
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

  const fetchLatestPRs = async () => {
    setLoading(true)
    try {
      const res = await getAllPrs();
      setPrs(res.prs);
      setLoading(false)
    } catch (error) {
      setError(error.response?.data?.msg || "Failed to fetch PRs");
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchLatestWorkout();
    fetchLatestPRs();
  }, [])

  const handleOnWorkoutDelete = async (id) => {
    setLoading(true)
    try {
      await deleteWorkout(id)      
      fetchLatestWorkout()
      setLoading(false)
    } catch (error) {
      setError(error.response?.data?.msg || "Failed to delete workout");
      setLoading(false);
    }
  }

  const handleOnAddExercise = async (id) => {
    navigate(`/workout-form/${id}`)
  }

  const handleOnEditExercise = async (workoutId) => {
    navigate(`/workout-form/edit/${workoutId}`)
  }

  const handleDeletePR = async (id) => {    
    setLoading(true)
    try {
      await deletePr(id)
      fetchLatestPRs();
      setLoading(false)
    } catch (error) {
      setError(error.response?.data?.msg || "Failed to delete PR");
      setLoading(false);
    }
  }

  const handleEditPR = (id) => {
    navigate(`/pr-form/${id}`)
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

        <div className="my-10 border rounded-lg border-slate-800 shadow">
          <span className="text-2xl font-semibold flex items-center gap-2 m-3">
            <DumbbellIcon size={24} className="text-[#27c2ff]" />
            Latest Workout
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
                onDelete={handleOnWorkoutDelete}
                onAdd={handleOnAddExercise}
                onEdit={handleOnEditExercise}
              />
            )
          })
          
          
          }
        </div>

         <div className="mb-10 border rounded-lg border-slate-800 shadow">
          <span className="text-2xl font-semibold flex items-center gap-2 m-3">
            <TrophyIcon size={24} className="text-yellow-600" />
            All PRs
          </span>
          {
            prs.map((pr, index) => (
              <div key={index}>
                <PRCard 
                id={pr.id}
                exerciseName={pr.exercise_name} 
                weight={pr.weight} 
                date={new Date(pr.created_at).toLocaleDateString()}
                onDelete={handleDeletePR}
                onEdit={handleEditPR}/>
              </div>
            ))
          }

          <hr className='text-slate-800'/>

          <div className='flex justify-end mx-2 my-5'>
            <Button 
            to={'/pr-form'}
            className='bg-slate-700 text-white text-sm hover:bg-slate-600 px-4 py-1 rounded cursor-pointer transition'>Add PR</Button>
          </div>
        </div>
        
      </div>
  )
}

export default Dashboard
