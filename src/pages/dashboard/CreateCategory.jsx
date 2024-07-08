import { useForm } from 'react-hook-form'
import HeadingText from '../../_components/typography/HeadingText'
import toast from 'react-hot-toast'
import axios from 'axios'
import API from '../../assets/API'
import useAuth from '../../hook/useAuth'
import { useQuery } from '@tanstack/react-query'
import { getAllCategories } from '../../lib/fetchCategory'
import { useNavigate } from 'react-router-dom'

const CreateCategory = () => {

  const { auth } = useAuth()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (formData) => {

    try {
      console.log(formData)
      const res = await axios.post(API.POST_CATEGORY, { ...formData }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${auth?.token}`,
        }
      })
      // console.log(res)
      if (res?.data?.status) {
        toast.success(res?.data?.message)
        navigate('/dashboard/category')
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  const { data: categories, isLoading, error } = useQuery({
    queryKey: ['categories'],
    queryFn: getAllCategories,
  })

  return (
    <div className='min-h-[calc(100vh - 40px)] flex flex-col justify-center items-center'>
      <HeadingText>Create Category</HeadingText>
      <div className="card bg-base-100 w-96 shadow-xl border border-slate-400">
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label className="form-control w-full textarea-info">
              <div className="label">
                <span className="label-text text-3xl my-1">Category Name</span>
              </div>
              <input
                {...register('categoryName', {
                  required: 'Category Name is required', minLength: {
                    value: 3,
                    message: 'Category Name must be at least 3 characters long'
                  }
                })}
                type="text"
                placeholder="Enter Category Name..."
                className="input input-bordered w-full textarea-info input-lg"
                name='categoryName'
              // required
              />
              {errors?.categoryName?.message && <span className='text-error'>{errors?.categoryName?.message}</span>}

            </label>
            <div className='flex justify-center'>
              <button type='submit' className='btn btn-primary mt-5 '>Add Menu Item</button>
            </div>
          </form>
        </div>
      </div>

    </div>
  )
}


export default CreateCategory