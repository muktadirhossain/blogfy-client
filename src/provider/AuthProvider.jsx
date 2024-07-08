import { useState } from 'react'
import { AuthContext } from '../context'
import CONSTANTS from '../assets/constants'

const token = localStorage.getItem(CONSTANTS?.AUTH_TOKEN)
// console.log("TEST", token)

const AuthProvider = ({ children }) => {
    // const [auth, setAuth] = useState({})
    const [auth, setAuth] = useState({
        token: token,
    })
    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider