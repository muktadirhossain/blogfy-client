import HeadingText from '../../_components/typography/HeadingText'
import BlogForm from '../../_components/BlogForm'
import { useQuery } from '@tanstack/react-query'
import { getAllCategories } from '../../lib/fetchCategory'
import toast from 'react-hot-toast'
import axios from 'axios'
import API from '../../assets/API'
import useAuth from '../../hook/useAuth'
import { useNavigate } from 'react-router-dom'


const CreateBlogPage = () => {
    const { auth } = useAuth()
    const navigate = useNavigate()

    const { data: categories } = useQuery({
        queryKey: ['categories'],
        queryFn: getAllCategories
    })
    const onSubmit = async (formData) => {
        // console.log(formData)

        try {
            const newFormData = new FormData();
            newFormData.append('title', formData.title)
            newFormData.append('content', formData.content)
            newFormData.append('tags', formData.tags)
            newFormData.append('categoryId', formData.categoryId)
            newFormData.append('img', formData.img[0])

            // for (let item of formData.img) {
            //     console.log(item)
            //     newFormData.append('img', formData.img[item])
            // }

            const res = await axios.post(API.POST_BLOG_POST, newFormData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${auth?.token}`,
                }
            })
            // console.log(res)
            if (res?.data?.status) {
                toast.success(res?.data?.message)
                navigate('/dashboard/blogs')
            }
        } catch (error) {
            toast.error(error?.message ?? "Error while submitting blog post!!!")
        }
    }
    return (
        <div className='flex flex-col items-center'>
            <HeadingText>Blog Input form</HeadingText>
            <div className="card bg-base-200 w-2/3 shadow-xl">
                <div className="card-body">
                    <BlogForm categories={categories} onSubmit={onSubmit} />
                </div>
            </div>
        </div>
    )
}

export default CreateBlogPage