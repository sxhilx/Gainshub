import React, {useActionState, useState} from 'react'
import Button from '../../components/Button'
import { FormField } from '../../components'
import { resetPassword } from '../../controllers/auth'
import { useLocation, useNavigate } from 'react-router-dom'


const ResetPassword = () => {    

    const location = useLocation()
    const navigate = useNavigate()
    
    const [state, submitAction, isPending] = useActionState(
        async(prevState, formData) => {

            if(formData.get('password') !== formData.get('repeat-password')){
                return {error: "Password's do not match"}
            }

            const params = new URLSearchParams(location.search)
            const token = params.get("token")

            if(!token){
                return {error: "Verification token not found in the URL"}
            }

            const userData = {
                "token": token,
                "newPassword": formData.get('password')
            }

            try {
                const res = await resetPassword(userData)
                setTimeout(() => navigate('/login'), 1500)  
                return {success: res.message}
            } catch (error) {
                return {error: error.response.data.msg || "Failed to reset password"}
            }
        },
        null
    )

  return (
    <div className='px-2 my-[8%]'>  
        <div className='mx-auto max-w-lg p-5 rounded-xl bg-gradient-to-tl from-slate-900 to-slate-950 shadow'>
            <h1 className='text-white font-bold text-center text-2xl'>Reset password?</h1>
            <p className='text-slate-400 text-center'>Enter a new password below to reset your account.</p>

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

                <FormField label={'New Password'} name={"password"} type={"text"} placeholder={""} required={true}/>  

                <FormField label={'Repeat New Password'} name={"repeat-password"} type={"text"} placeholder={""} required={true}/>      

                <Button
                disabled={isPending}
                type='submit'
                className='w-full bg-gradient-to-br from-[#27c2ff] to-[#0d76de] font-normal text-sm mt-3 cursor-pointer hover:from-[#0d76de] hover:to-[#27c2ff] duration-200'
                >
                    {isPending ? "Loading..." : "Reset Password"}    
                </Button>      

            </form>

        </div>
    </div>
  )
}

export default ResetPassword
