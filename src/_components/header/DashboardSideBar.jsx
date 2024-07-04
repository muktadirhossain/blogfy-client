import React from 'react'
import { NavLink } from 'react-router-dom'

const DashboardSideBar = () => {
  return (
    
      <ul className='menu bg-base-200 rounded-box min-h-screen w-56'>
        <li>
          <NavLink className={({ isPending, isActive }) => `${(isActive) ? 'active font-bold' : ""} my-1`} to='/dashboard/home'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/dashboard/category'
            className={({ isPending, isActive }) => `${isActive ? 'active font-bold' : ""} my-1 `}
          >Category</NavLink>
        </li>
        <li>
          <NavLink to='/dashboard/blogs'
            className={({ isPending, isActive }) => `${isActive ? 'active font-bold' : ""} my-1`}
          >Blogs</NavLink>
        </li>
        <li>
          <NavLink to='/dashboard/profile'
            className={({ isPending, isActive }) => `${isActive ? 'active font-bold' : ""} my-1`}
          >Profile</NavLink>
        </li>

      </ul>
 
  )
}

export default DashboardSideBar