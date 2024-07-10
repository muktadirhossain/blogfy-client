import { Edit, Eye, PlusIcon, Trash } from 'lucide-react'
import HeadingText from '../../_components/typography/HeadingText'
import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getAllBlogs } from '../../lib/fetchBlogs'
import dayjs from 'dayjs'

const BlogPage = () => {
  const { data: blogs, isLoading, isError } = useQuery({
    queryKey: ['blog'],
    queryFn: getAllBlogs

  })
  // console.log(blogs)
  if (isLoading) {
    return (
      <div className='flex justify-center items-center min-h-[400px]'><p className="loading loading-ring loading-lg">Loading...</p></div>
    )
  }

  // TODO:
  const handelDelete = async (id) => {
    // console.log(id, "DELETE")
    try {

    } catch (error) {

    }
  }


  return (
    <div>
      <HeadingText>Blog Posts</HeadingText>
      <div className='flex justify-end'>
        <button className="btn btn-info" >
          <Link
            className='flex items-center justify-between gap-x-2'
            to='/dashboard/blogs/create'>
            <PlusIcon />
            <span>Add Post</span>
          </Link>
        </button>
      </div>
      {/* Table Components :: */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Date</th>
              <th>Title</th>
              <th>Category</th>
              <th>Author</th>
              <th>Tags</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
              blogs && blogs.map((blog, idx) => (<tr key={blog?._id} className="bg-base-200">
                <th>{idx + 1}</th>
                <td>{dayjs(blog?.createdAt).format("DD/MM/YY")}</td>
                <td>{blog?.title}</td>
                <td>{blog?.categoryId?.categoryName}</td>
                <td>{blog?.authorId?.fullName}</td>
                <td>
                  <div className='flex justify-start items-center gap-x-1'>
                    {
                      blog?.tags?.split(',')?.map((tag, idx) =>
                        <span key={idx} className="badge badge-neutral">{tag}</span>)
                    }
                  </div>
                </td>
                <td>
                  <div className='flex gap-x-1.5 justify-evenly'>
                    <button className="btn btn-info btn-sm"><Eye size={16} /></button>
                    <Link to={`/dashboard/blogs/update/${blog?._id}`}>
                      <button className="btn btn-primary btn-sm"><Edit size={16} /></button>
                    </Link>
                    <button onClick={() => handelDelete(blog?._id)} className="btn btn-error btn-sm"><Trash size={16} /></button>
                  </div>
                </td>
              </tr>))
            }


          </tbody>
        </table>
      </div>
    </div >
  )
}

export default BlogPage