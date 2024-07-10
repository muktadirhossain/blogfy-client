import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/logo.png'

const Header = () => {
    return (
        <header className="">
            <div className="navbar bg-base-100 dark:bg-slate-900 border-b">
                <div className="flex-1">
                    <Link to={'/'} className="flex justify-start items-center gap-x-2">
                        <img alt='Logo | Blogfy' src={logo} className='h-10 w-10' /> <span>Blogfy</span>
                    </Link>
                </div>
                <div className="flex-none gap-2">
                    <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
                        <li><a>Home</a></li>
                        <li><a>Blogs</a></li>
                        <li>
                            <NavLink to="/dashboard/home" >Dashboard</NavLink>
                        </li>
                    </ul>
                    <button className='btn btn-primary'>
                        <Link to={'/login'}>Login</Link>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header