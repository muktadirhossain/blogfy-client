import { useState } from 'react'
import { AuthContext } from '../context'
import CONSTANTS from '../assets/constants'

const localData = localStorage.getItem(CONSTANTS?.AUTH_TOKEN)

const parsedData = JSON.parse(localData)
console.log("TEST", parsedData)

const AuthProvider = ({ children }) => {
    // const [auth, setAuth] = useState({})

    const [auth, setAuth] = useState({
        token: parsedData?.token,
        user: parsedData?.user
    })
    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider