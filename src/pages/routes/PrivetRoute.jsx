import { Link, Navigate, Outlet } from 'react-router-dom'
import useAuth from '../../hook/useAuth'
import DashboardSideBar from '../../_components/header/DashboardSideBar'
import logo from '../../assets/logo.png'
import LogOutButton from '../../_components/common/LogOutButton'
import { Toaster } from 'react-hot-toast'


const PrivetRoute = () => {
  // Check if the user is authenticated
  const { auth } = useAuth()

  return (
    <div>
      {
        auth.token ?
          <main>
            <nav className='flex justify-between items-center h-[60px] mx-5'>
              <div>
                <Link to="/"
                  className='flex justify-between items-center gap-x-2'
                >
                  <img src={logo} className='h-10 w-10' alt="Blogfy_logo" />
                  <span className='font-mono'>Blogfy</span>
                </Link>
              </div>
              <LogOutButton />
            </nav>
            <div className='flex justify-between min-h-screen'>
              <aside>
                <DashboardSideBar />
              </aside>
              <div className='w-full outline-dashed outline-2 outline-offset-2 rounded-md p-2.5 mx-2'>
                {<Outlet />}
              </div>
            </div>
          </main> :
          <Navigate to='/login' />
      }
      <Toaster />
    </div>
  )
}

export default PrivetRoute