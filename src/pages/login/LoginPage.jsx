import axios from 'axios'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import API from '../../assets/API'
import toast from 'react-hot-toast'

const LoginPage = () => {

    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm()

    const navigate = useNavigate()
    // console.log(errors)
    const onSubmit = async (data) => {
        console.log(data)

        try {
            // await API call to register user
              const res = await axios.post(API.LOGIN, {
                email: data.email,
                password: data.password,
              })
              console.log(res.data)
              if (res.data.status) {
                toast.success("Login successful!")
                localStorage.setItem('authToken', res?.data?.token)
                navigate('/')
              } else {
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
            <div className="card bg-base-100 w-96 shadow-xl">
                <div className="card-body">

                    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-y-5'>
                        <h2 className='text-center font-semibold text-3xl text-primary'>Login</h2>
                        <label className="input input-bordered flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                            </svg>
                            <input
                                {...register('email', {
                                    required: "Please provide your Email !",
                                    pattern: {
                                        value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                                        message: "Not a valid Email!"
                                    }
                                })}
                                type="text" className="grow" placeholder="Enter Username..." />
                        </label>
                        {errors?.email?.message && <span className='text-error'>{errors?.email?.message}</span>}
                        <div>

                            <label className="input input-bordered flex items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="h-4 w-4 opacity-70">
                                    <path
                                        fillRule="evenodd"
                                        d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                        clipRule="evenodd" />
                                </svg>
                                <input {...register('password', { required: "Enter Your Password", minLength: 6 })} type="password" className="grow" placeholder='Enter Password...' />
                            </label>
                            {errors?.password?.message && <span className='text-error'>{errors?.password?.message}</span>}
                            <Link to={'/forgot-password'} className='text-right block mt-1 text-primary underline'>Forget Password ?</Link>
                        </div>
                        <button type='submit' className='btn btn-primary'>Login</button>
                        <div className="divider">OR</div>
                        <p>Don't have an account ? Please <Link to='/register' className='text-primary'>Register</Link>.</p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginPage