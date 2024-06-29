import { Outlet } from 'react-router-dom'
import Header from '../_components/header/Header'
import { Toaster } from 'react-hot-toast'
function RootLayout() {
    return (
        <main className='dark:bg-slate-900 min-h-screen'>
            <Header />
            {
                <Outlet />
            }
            <Toaster/>
        </main>
    )
}

export default RootLayout