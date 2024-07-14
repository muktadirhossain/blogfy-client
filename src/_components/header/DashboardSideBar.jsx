import React from 'react'
import { NavLink } from 'react-router-dom'
import { cn } from '../../utils/cn'
import { Camera, LayoutGrid , Tag,Newspaper, UserRound} from 'lucide-react';

const DashboardSideBar = () => {
  const linkList = [
    {
      label: 'Dashboard',
      to: '/dashboard/home',
      icon: <LayoutGrid  className='text-white' size={24} />

    },
    {
      label: 'Category',
      to: '/dashboard/category',
      icon: <Tag  className='text-white' size={24} />
    },
    {
      label: 'Blogs',
      to: '/dashboard/blogs',
      icon: <Newspaper  className='text-white' size={24} />
    },
    {
      label: 'Profile',
      to: '/dashboard/profile',
      icon: <UserRound  className='text-white' size={24} />
    },
  ]
  return (

    <ul className='menu menu-vertical bg-base-200 rounded-box w-56'>
      {linkList.map((link) => (
        <li key={link.to}>
          <NavLink
            className={({ isActive }) => cn('my-1', {
              "active font-bold": isActive,
            })}
            to={link.to}
            exact={link.exact}
          >
            {link.icon && <span>{link?.icon}</span>}
            {link.label}
          </NavLink>
        </li>
      ))}
    </ul>

  )
}

export default DashboardSideBar