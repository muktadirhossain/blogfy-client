import HeadingText from '../../_components/typography/HeadingText'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { getAllCategories } from '../../lib/fetchCategory'
import { Link } from 'react-router-dom'
import { Trash2 } from 'lucide-react'
import toast from 'react-hot-toast'
import axios from 'axios'
import API from '../../assets/API'
import useAuth from '../../hook/useAuth'

const CategoryPage = () => {

  const { auth } = useAuth()
   // Access the client
   const queryClient = useQueryClient()

  const { data: categories, isLoading, error } = useQuery({
    queryKey: ['categories'],
    queryFn: getAllCategories,
  })

  const handelDelete = async (id) => {
    
    try {
      const res = await axios.delete(`${API.DELETE_CATEGORY + id}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${auth?.token}`,
        }
      })
      console.log(id,res, "del")
      if(res.data.status){
        toast.success("Deleted Successfully")
        queryClient.invalidateQueries({ queryKey: ['categories'] })
      }
      
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  return (
    <div className='min-h-[calc(100vh - 40px)] '>
      <HeadingText>Create Category</HeadingText>
      <button className="btn btn-info" >
        <Link to='/dashboard/category/create'>CreateCategory</Link>
      </button>

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>
                <span className="font-bold text-xl">Category Name</span>
              </th>
              <th>
                <span className="font-bold text-xl">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
            </tr>
            {
              categories?.map((category, Idx) => (
                <tr key={categories?._id}>
                  <th>{Idx + 1}</th>
                  <td>{category?.categoryName}</td>
                  <td>
                    <div>
                      <button
                        onClick={() => handelDelete(category?._id)}
                        className="btn btn-error btn-sm">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            }

          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CategoryPage