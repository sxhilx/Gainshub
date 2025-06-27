import React, {useActionState, useState} from 'react'
import { FormField, Button } from '../../components'
import { Link } from 'react-router-dom'
import { forgotPassword } from '../../controllers/auth'
import { ArrowLeftIcon } from 'lucide-react'

const ForgotPassword = () => {
    const [state, submitAction, isPending] = useActionState(
        async(prevState, formData) => {

            const userEmail = {
                "email": formData.get('email')
            }

            try {
                const res = await forgotPassword(userEmail)
                console.log(res);                
                return {success: res.message}
            } catch (error) {
                return {error: error.response.data.msg || "Failed to send email"}
            }
        },
        null
    )

  return (
    <div className='px-2 my-[8%]'>  
        <div className='mx-auto max-w-lg p-5 rounded-xl bg-gradient-to-tl from-slate-900 to-slate-950 shadow'>
            <h1 className='text-white font-bold text-center text-2xl'>Forgot your password?</h1>
            <p className='text-slate-400 text-center'>Enter your email address and we'll send you a link to reset your password.</p>
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

                <Button
                disabled={isPending}
                type='submit'
                className='w-full bg-gradient-to-br from-[#27c2ff] to-[#0d76de] font-normal text-sm mt-3 cursor-pointer hover:from-[#0d76de] hover:to-[#27c2ff] duration-200'
                >
                    {isPending ? "Loading..." : "Resend verification email"}    
                </Button>      

            </form>

                
            <Link to={'/login'} className='text-blue-500 flex items-center justify-center mt-4 text-sm gap-3'>
                <ArrowLeftIcon size={14}/>
                Back to Login                    
            </Link>



            <div className='text-center text-slate-400 mt-4 text-sm'>
                Don't have an account? <Link to={'/signup'} className='text-blue-500'>Sign up</Link>
            </div>

        </div>
    </div>
  )
}

export default ForgotPassword