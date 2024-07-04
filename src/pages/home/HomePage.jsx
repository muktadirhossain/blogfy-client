import HeadingText from '../../_components/typography/HeadingText'
import BlogCard from '../../_components/card/BlogCard'
import { useQuery } from '@tanstack/react-query'
import { getAllBlogs } from '../../lib/fetchBlogs'

const HomePage = () => {
  // const blogs = useLoaderData()
  // console.log("HOME", blogs)


  const { data: blogs , isLoading, error} = useQuery({
    queryKey: ['blog'],
    queryFn: getAllBlogs
  })

  if(!!error){
    return (
      <div>Error happened!!</div>
    )
  }
  return (
    <div>
      <HeadingText>All Blogs</HeadingText>
      {
        isLoading && <p className='text-center font-bold text-4xl'>Loading...⏳</p>
      }
      {
        blogs?.length === 0 && <p className='text-center font-bold text-4xl'>No Post found!!!</p>
      }
      <section className='grid grid-cols-3 gap-5'>

        {
          blogs?.map(blog => <BlogCard {...blog} key={blog?._id} />)
        }
      </section>
    </div>
  )
}

export default HomePage