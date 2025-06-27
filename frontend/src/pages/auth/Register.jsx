import React, {useState} from 'react'
import { GoogleIcon, GymModel } from '../../assets'
import {EyeOffIcon, EyeIcon} from 'lucide-react'
import { FormField, Button } from '../../components'
import { Link } from 'react-router-dom'
import { useActionState } from 'react'
import { googleLogin, registerUser } from '../../controllers/auth'


const Register = () => {
    const [seePassword, setSeePassword] = useState(false)

    const [state, submitAction, isPending] = useActionState(
        async (prevState, formData) => {

            const userData = {
                "fullname":formData.get('fullname'),
                "email": formData.get('email'),
                "password": formData.get('password')            }

            try {
                const res = await registerUser(userData)
                localStorage.setItem("token", res.authToken)
                return { success: `Account created! Check you email for a verification link` };
            } catch (error) {
                console.log(error.response.data.msg);
                return { error: error.response.data.msg || 'Registration failed' };
            }
        },        
        null // initial state (neither success or error)
    );


  return (
    <div className='flex overflow-hidden'>
        <div className='w-full lg:w-1/2 h-screen p-4'>            
            <div className=' mx-auto max-w-lg my-6 p-5 rounded-xl bg-gradient-to-tl from-slate-900 to-slate-950 shadow'>
                <h1 className='text-white font-bold text-center text-2xl'>Create your account</h1>
                <p className='text-slate-400 text-center'>Start your fitness journey today with Gainshub</p>

                <form action={submitAction} className='my-5 relative'>

                    {state?.success && (
                        <div className='mt-4 p-3 bg-green-900/20 text-green-400 rounded-lg text-center text-sm'>
                        {state.success}
                        </div>
                    )}
                                     
                    {state?.error && (
                        <div className='mt-4 p-3 bg-red-900/20 text-red-400 rounded-lg text-center'>
                        {state.error}
                        </div>
                    )}

                    <FormField label={'Fullname'} name={"fullname"} type={"text"} placeholder={"John Doe"} required={true}/>

                    <FormField label={'Email'} name={"email"} type={"text"} placeholder={"johndoe@example.com"} required={true}/>

                    <FormField label={'Password'} name={"password"} type={seePassword ? 'text' : 'password'} placeholder={"Create a strong password"} onClick={() => setSeePassword(prev => !prev)} Icon={seePassword ? EyeOffIcon : EyeIcon} required={true}/>

                    <Link to={'/forgot-password'} className='text-blue-500 text-sm'>
                        Forgot Password?
                    </Link>             

                    <Button
                    disable={isPending}
                    type='submit'
                    className='w-full bg-gradient-to-br from-[#27c2ff] to-[#0d76de] font-medium mt-3 cursor-pointer hover:from-[#0d76de] hover:to-[#27c2ff] duration-200'
                    >
                        {isPending ? 'Creating...' : 'Create Account'}   
                    </Button>      

                </form>

                <div className='flex items-center'>
                    <hr className='flex-grow text-slate-700'/>
                    <span className='text-slate-400  text-xs px-2 '>OR CONTINUE WITH</span>
                    <hr className='text-slate-700 flex-grow'/>
                </div>

                <div className='mt-5'>
                    <Button 
                    onClick={googleLogin}
                    className='flex justify-center items-center text-white font-semibold text-sm border border-slate-700 w-full gap-4 cursor-pointer hover:bg-slate-800 duration-200'                    
                    >
                       <img src={GoogleIcon} alt="Google" className="w-5 h-5" />                    
                        Continue with Google
                    </Button>
                </div>

                <div className='text-center text-slate-400 mt-4 text-sm'>
                    Already have an account? <Link to={'/login'} className='text-blue-500'>Sign in</Link>
                </div>

            </div>
        </div>

        <div className='hidden lg:block w-1/2 bg-gradient-to-br from-[#27c2ff] to-[#0d76de] h-screen '>
           <div className='flex justify-center mt-16'>
            <img src={GymModel} alt="Img" className='object-cover w-2xl' />
        </div>

        </div>

    </div>
  )
}

export default Register