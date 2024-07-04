import { Navigate, Outlet } from 'react-router-dom'
import useAuth from '../../hook/useAuth'
import DashboardSideBar from '../../_components/header/DashboardSideBar'
import logo from '../../assets/logo.png'


const PrivetRoute = () => {
  // Check if the user is authenticated
  const { auth, setAuth } = useAuth()
  const logoutHandler = () => {
    setAuth({})
    localStorage.clear()
    // navi
  }
  return (
    <div>
      {
        auth.token ?
          <main>
            <nav className='flex justify-between items-center h-[50px] mx-5'>
              {/* <div> */}
              <img src={logo} className='h-10 w-10' alt="blogfy" />
              {/* </div> */}
              <button onClick={logoutHandler} className='btn btn-error'>Log Out</button>
            </nav>
            <div className='flex justify-between min-h-screen'>
              <aside>
                <DashboardSideBar />
              </aside>
              <div className='w-full border border-2 border-dashed rounded-md p-2.5'>
                {<Outlet />}
              </div>
            </div>
          </main> :
          <Navigate to='/login' />
      }
    </div>
  )
}

export default PrivetRoute