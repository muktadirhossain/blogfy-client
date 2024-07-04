import React from 'react'
import { BASE_URL } from '../../assets/API'

const BlogCard = ({ title, content, images, categoryId , authorId}) => {
    return (
        <div className='card border border-slate-300'>
            <img crossOrigin="anonymous" src={`${BASE_URL}${images[0]}`} className='h-60' alt={title}  />
            <h2>{title}</h2>
            <p>{content}</p>
            <p>Category: {categoryId?.categoryName}</p>
            <p>Posted by: {authorId?.fullName}</p>
        </div>
    )
}

export default BlogCard