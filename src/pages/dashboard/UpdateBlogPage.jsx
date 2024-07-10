import { useLoaderData, useNavigate } from "react-router-dom"
import BlogForm from "../../_components/BlogForm"
import HeadingText from "../../_components/typography/HeadingText"
import useAuth from "../../hook/useAuth"
import { useQuery } from "@tanstack/react-query"
import { getAllCategories } from "../../lib/fetchCategory"
import toast from "react-hot-toast"
import axios from "axios"
import API from "../../assets/API"

const UpdateBlogPage = () => {
    const blog = useLoaderData()

    const { auth } = useAuth()
    const navigate = useNavigate()

    const { data: categories } = useQuery({
        queryKey: ['categories'],
        queryFn: getAllCategories
    })
    const onSubmit = async (formData) => {

        try {
            const newFormData = new FormData();
            newFormData.append('title', formData.title)
            newFormData.append('content', formData.content)
            newFormData.append('tags', formData.tags)
            newFormData.append('categoryId', formData.categoryId)
            // newFormData.append('img', formData.img[0])

            const res = await axios.patch(`${API.POST_BLOG_POST}/${blog?._id}`, newFormData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${auth?.token}`,
                }
            })
            console.log(res)
            if (res?.data?.status) {
                toast.success("Updated Successfully")
                navigate('/dashboard/blogs')
            }
        } catch (error) {
            toast.error(error?.message ?? "Error while submitting blog post!!!")
        }
    }
    return (
        <div className='flex flex-col items-center'>
            <HeadingText>Update Blog</HeadingText>
            <div className="card bg-base-200 w-2/3 shadow-xl">
                <div className="card-body">
                    <BlogForm categories={categories} onSubmit={onSubmit} initialData={blog} />
                </div>
            </div>
        </div>
    )
}

export default UpdateBlogPage