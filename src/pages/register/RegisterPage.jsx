import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import API from '../../assets/API'
import toast from 'react-hot-toast'

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm()

  const navigate = useNavigate()

  const onSubmit = async (data) => {
    console.log(data)
    if (data?.password !== data?.confirmPassword) {
      setError('passMatch', { type: 'custom', message: 'Password & Confirm Password must be same.' });
      return
    }
    try {
      // await API call to register user
      const res = await axios.post(API.REGISTER_USER, {
        fullName: data.fullName,
        email: data.email,
        password: data.password,
      })
      console.log(res.data)
      if (res.data.status) {
        toast.success("User Registered successfully!")
        navigate('/login')
      } else {
        setError('passMatch', { type: 'custom', message: res?.data.message });
        toast.error("Sorry, something went wrong")
      }
    } catch (error) {
      console.error(error)
      setError('passMatch', { type: 'custom', message: error.message });
      toast.error(error.message)
    }
  }



  return (
    <div className='flex justify-center items-center min-h-[calc(100vh-70px)]'>
      <div className="card bg-base-100 w-full  sm:w-1/2 shadow-xl">
        <div className="card-body">

          <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-y-5'>
            <h2 className='text-center font-semibold text-3xl text-primary'>Register User</h2>

            <label className="input input-bordered flex items-center gap-2">
              <span className="text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                  <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                </svg>

              </span>
              <input type="text"
                {...register("fullName", { required: "Full Name is required!" })}
                className="input-text w-full" placeholder="Enter your full Name...." />

            </label>
            {errors?.fullName?.message && <span className='text-error'>{errors?.fullName?.message}</span>}
            <label className="input input-bordered flex items-center gap-2">
              <span className="text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                  <path fillRule="evenodd" d="M17.834 6.166a8.25 8.25 0 1 0 0 11.668.75.75 0 0 1 1.06 1.06c-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788 3.807-3.808 9.98-3.808 13.788 0A9.722 9.722 0 0 1 21.75 12c0 .975-.296 1.887-.809 2.571-.514.685-1.28 1.179-2.191 1.179-.904 0-1.666-.487-2.18-1.164a5.25 5.25 0 1 1-.82-6.26V8.25a.75.75 0 0 1 1.5 0V12c0 .682.208 1.27.509 1.671.3.401.659.579.991.579.332 0 .69-.178.991-.579.3-.4.509-.99.509-1.671a8.222 8.222 0 0 0-2.416-5.834ZM15.75 12a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0Z" clipRule="evenodd" />
                </svg>

              </span>
              <input type="email"
                {...register("email", { required: "Email is required!", })}
                className="input-text w-full" placeholder="Enter your email.." />
            </label>
            {errors?.email?.message && <span className='text-error'>{errors?.email?.message}</span>}
            <label className="input input-bordered flex items-center gap-2">
              <span className="text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                  <path fillRule="evenodd" d="M15.75 1.5a6.75 6.75 0 0 0-6.651 7.906c.067.39-.032.717-.221.906l-6.5 6.499a3 3 0 0 0-.878 2.121v2.818c0 .414.336.75.75.75H6a.75.75 0 0 0 .75-.75v-1.5h1.5A.75.75 0 0 0 9 19.5V18h1.5a.75.75 0 0 0 .53-.22l2.658-2.658c.19-.189.517-.288.906-.22A6.75 6.75 0 1 0 15.75 1.5Zm0 3a.75.75 0 0 0 0 1.5A2.25 2.25 0 0 1 18 8.25a.75.75 0 0 0 1.5 0 3.75 3.75 0 0 0-3.75-3.75Z" clipRule="evenodd" />
                </svg>

              </span>
              <input type="password" {...register("password", { required: "Please Choose your password", minLength: 6 })} className="input-text w-full" placeholder="Choose Password" />
            </label>
            {errors?.password?.message && <span className='text-error'>{errors?.password?.message}</span>}
            <label className="input input-bordered flex items-center gap-2">
              <span className="text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                  <path fillRule="evenodd" d="M15.75 1.5a6.75 6.75 0 0 0-6.651 7.906c.067.39-.032.717-.221.906l-6.5 6.499a3 3 0 0 0-.878 2.121v2.818c0 .414.336.75.75.75H6a.75.75 0 0 0 .75-.75v-1.5h1.5A.75.75 0 0 0 9 19.5V18h1.5a.75.75 0 0 0 .53-.22l2.658-2.658c.19-.189.517-.288.906-.22A6.75 6.75 0 1 0 15.75 1.5Zm0 3a.75.75 0 0 0 0 1.5A2.25 2.25 0 0 1 18 8.25a.75.75 0 0 0 1.5 0 3.75 3.75 0 0 0-3.75-3.75Z" clipRule="evenodd" />
                </svg>

              </span>
              <input {...register("confirmPassword", { required: "Please Choose your password", minLength: 6 })} type="password" className="input-text w-full bg-slate-600 opacity-95"

                placeholder="Confirm Password" />
            </label>
            {errors?.confirmPassword?.message && <span className='text-error'>{errors?.confirmPassword?.message}</span>}

            {/*  passMatch */}
            {errors?.passMatch?.message && <span className='text-error'>{errors?.passMatch?.message}</span>}
            <button
              type='submit'
              className='btn btn-primary'>Register</button>
            <div className="divider">OR</div>
            <p>Already have an account ? Please <Link to='/login' className='text-primary'>Login</Link>.</p>
          </form>
        </div>
      </div>

    </div>
  )
}

export default RegisterPage