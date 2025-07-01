import React, {useState} from 'react'
import { Button, FormField } from '../../components'
import { addPr } from '../../controllers/prs';
import { useNavigate } from 'react-router-dom';

const AddPR = () => {

    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        exerciseName: "",
        weight: ""
    });
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState()
    const [error, setError] = useState()

    const handleAddPR = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            const res = await addPr({
                "exerciseName": formData.exerciseName,
                "weight": formData.weight
            })
            setSuccess("PR Added successfully")
            setFormData({ exerciseName: "", weight: "" });
            setLoading(false)
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
            <h1 className="text-4xl font-bold text-white">Add PR</h1>
            <span className="text-slate-400">Track and manage your PRs</span>
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

            <span className="text-2xl font-semibold">Log New PR</span>
            <form onSubmit={handleAddPR} className="mt-4 w-full">
                <div className="flex flex-col md:flex-row flex-wrap md:gap-5">
                <FormField
                    value={formData.exerciseName}
                    onChange={(e) => setFormData((prev) => ({...prev, exerciseName: e.target.value}))}
                    label="Exercise"
                    name='exercise_name'
                    type="text"
                    className="flex-1"
                    labelClassName="text-sm"
                    placeholder="eg. Squats"
                />
                <FormField
                    value={formData.weight}
                    onChange={(e) => setFormData((prev) => ({...prev, weight: e.target.value}))}
                    label="Weight (kg)"
                    name="weight"
                    type="number"
                    className="flex-1"
                    labelClassName="text-sm"
                    placeholder="eg. 100"
                />
                </div>

                <div className="mt-4 flex justify-end gap-3">

                <Button
                    onClick={() => {
                        setError('')
                        setSuccess('')
                    }}
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

export default AddPR