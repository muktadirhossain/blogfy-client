import { KeyRound } from 'lucide-react'
import useAuth from '../../../hook/useAuth'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import toast from 'react-hot-toast'
import API from '../../../assets/API'


const ChangePasswordCard = () => {
    const { auth } = useAuth()
    const {
        register,
        handleSubmit,
        setError,
        watch,
        formState: { errors },
    } = useForm()

    const newPassword = watch('newPassword')
    const confirmNewPassword = watch('confirmNewPass')

    const onSubmit = async (formData) => {
       try {
         // your code here to change password
         const res = await axios.post(`${API.CHANGE_PASSWORD}/${auth?.user}`, {...formData})
         if(res?.data?.status){
            toast.success("Your password has been changed successfully")
         }
       } catch (error) {
        toast.error(error.message)
       }
    }



    return (
        <div
            className="md:col-span-2 p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 sm:p-6
          dark:border-gray-700 dark:bg-gray-800 bg-blue-100/30 "
        >
            <form id="change-pass-form" onSubmit={handleSubmit(onSubmit)}>
                <input
                    id="email"
                    className="hidden"
                    type="email"
                    defaultValue="muktadirhossainrabbi@gmail.com"
                    name="email"
                />
                <div className="col-span-6 sm:col-span-3">
                    <label
                        htmlFor="current-password"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Current password
                    </label>
                    <input
                        className="input input-bordered w-full input-info mb-2"
                        placeholder="Enter Current Password ..."
                        type="password"
                        name="currPass"
                        {...register('password', {
                            required: "Please provide your password !",
                            minLength: {
                                value: 6,
                                message: "Password must be at least 6 characters long!"
                            }
                        })}
                    />

                {errors?.password?.message && <span className='text-error'>{errors?.password?.message}</span>}
                </div>
                <div className="col-span-6 sm:col-span-3">
                    <label
                        htmlFor="newPassword"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        New Password
                    </label>
                    <input
                        className="input input-bordered w-full input-info mb-2"
                        placeholder="Enter New Password ..."
                        name="newPassword"
                        {...register('newPassword', {
                            required: "Please provide your password !",
                            minLength: {
                                value: 6,
                                message: "Password must be at least 6 characters long!"
                            }
                        })}
                    />
                {errors?.newPassword?.message && <span className='text-error'>{errors?.newPassword?.message}</span>}
                </div>
                <div className="col-span-6 sm:col-span-3">
                    <label
                        htmlFor="confirm-new-password"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Confirm New Password
                    </label>
                    <input
                        className="input input-bordered w-full input-info mb-2"
                        placeholder="Confirm New Password ..."
                        name="confirmNewPass"
                        {...register('confirmNewPass', {
                            required: "Please provide your password !",
                            minLength: {
                                value: 6,
                                message: "Password must be at least 6 characters long!"
                            }
                        })}
                    />
                {errors?.newPassword?.message && <span className='text-error'>{errors?.newPassword?.message}</span>}
                {
                    (confirmNewPassword !== newPassword) && <span className='text-error'>Password & confirm pass must be same</span>
                }
                </div>
                <button
                    type="submit"
                    className="btn btn-primary mt-3"
                >
                    Change Password
                    <span><KeyRound /></span>
                </button>
            </form>
        </div>
    )
}

export default ChangePasswordCard