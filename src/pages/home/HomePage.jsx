import React from 'react'
import { useLoaderData } from 'react-router-dom'
import HeadingText from '../../_components/typography/HeadingText'
import BlogCard from '../../_components/card/BlogCard'

const HomePage = () => {
  const blogs = useLoaderData()
  console.log("HOME", blogs)
  return (
    <div>
      <HeadingText>All Blogs</HeadingText>
      <section className='grid grid-cols-3 gap-5'>
        {
          blogs?.map(blog => <BlogCard {...blog} key={blog?._id} />)
        }
      </section>
    </div>
  )
}

export default HomePage