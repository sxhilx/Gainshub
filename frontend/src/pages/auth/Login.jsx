import React, {useActionState, useState} from 'react'
import { GoogleIcon, GymModel} from '../../assets'
import {EyeOffIcon, EyeIcon} from 'lucide-react'
import Button from '../../components/Button'
import { FormField } from '../../components'
import { Link, useNavigate } from 'react-router-dom'
import { googleLogin, loginUser } from '../../controllers/auth'


const Login = () => {
    const [seePassword, setSeePassword] = useState(false)
    const navigate = useNavigate()

    const [state, submitAction, isPending] = useActionState(
        async(prevState, formData) => {
            
            try {
                const res = await loginUser({
                    "email": formData.get('email'),
                    "password": formData.get('password')}
                )

                localStorage.setItem("token", res.authToken)
                setTimeout(() => navigate('/dashboard'), 1500)
                return {success: "Login Successfull"}
            } catch (error) {
                return {error: error.response.data.msg || "Login failed"}
            }
        },
        null
    )

  return (
    <div className='flex'>
        <div className='w-full lg:w-1/2 h-screen p-4'>            
            <div className=' mx-auto max-w-lg my-20 p-5 rounded-xl bg-gradient-to-tl from-slate-900 to-slate-950 shadow'>
                <h1 className='text-white font-bold text-center text-2xl'>Welcome Back</h1>
                <p className='text-slate-400 text-center'>Sign in to your account to continue your workout tracking</p>

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

                    <FormField label={'Email'} name={"email"} type={"text"} placeholder={"johndoe@example.com"} required={true}/>

                    <FormField label={'Password'} name={"password"} type={seePassword ? 'text' : 'password'} placeholder={"Enter your password"} onClick={() => setSeePassword(prev => !prev)} Icon={seePassword ? EyeOffIcon : EyeIcon} required={true}/>

                    <Link to={'/forgot-password'} className='text-blue-500 text-sm'>
                        Forgot Password?
                    </Link>
                    

                    <Button
                    disabled={isPending}
                    className='w-full bg-gradient-to-br from-[#27c2ff] to-[#0d76de] font-medium mt-3 cursor-pointer hover:from-[#0d76de] hover:to-[#27c2ff] duration-200'
                    >
                     {isPending ? "Loading..." : "Sign in"}    
                    </Button>      

                </form>

                <div className='flex items-center'>
                    <hr className='flex-grow text-slate-700'/>
                    <span className='text-slate-400  text-xs px-2 '>OR CONTINUE WITH</span>
                    <hr className='text-slate-700 flex-grow'/>
                </div>

                <div className='mt-5'>
                    <Button 
                    type="submit"
                    onClick={googleLogin}
                    className='flex justify-center items-center text-white font-semibold text-sm border border-slate-700 w-full gap-4 cursor-pointer hover:bg-slate-800 duration-200'                    
                    >
                       <img src={GoogleIcon} alt="Google" className="w-5 h-5" />                    
                        Sign-in with Google
                    </Button>
                </div>


                <div className='text-center text-slate-400 mt-4 text-sm'>
                    Don't have an account? <Link to={'/signup'} className='text-blue-500'>Sign up</Link>
                </div>

                <div className='text-center'>
                    <Link to={'/resend-verification'} className='text-blue-500 text-sm'>
                        Resend Verification Link?
                    </Link> 
                </div>

            </div>
        </div>

        <div className='hidden lg:block w-1/2 bg-gradient-to-br from-[#27c2ff] to-[#0d76de] h-screen overflow-hidden'>
           <div className='flex justify-center mt-16'>
            <img src={GymModel} alt="Img" className='object-cover w-2xl' />
        </div>

        </div>

    </div>
  )
}

export default Login