import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom'


const Login = () => {

    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/clientes')
    }

    return (
        <div className="bg-white mt-10 text-center">
            <h1>Bienvenid@ al CRM de clientes</h1>
            <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 mt-5 rounded"
                onClick={handleLogin}
            >
                Ingresar al sitio
            </button>
            <Outlet />
        </div>
    )
}

export default Login

