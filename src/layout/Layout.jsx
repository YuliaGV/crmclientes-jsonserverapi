import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { FaBars } from "react-icons/fa";


const Layout = () => {

    const [navbarOpen, setNavbarOpen] = React.useState(false);

    const location = useLocation()
    const { pathname } = location


    return (
        <>
            <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-stone-300 mb-3">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                    <a
                    className="text-md font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-black"
                    href="/clientes"
                    >
                    CRM Clientes
                    </a>
                    <button
                    className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                    type="button"
                    onClick={() => setNavbarOpen(!navbarOpen)}
                    >
                    <FaBars />
                    </button>
                </div>
                <div
                    className={
                    "lg:flex flex-grow items-center" +
                    (navbarOpen ? " flex" : " hidden")
                    }
                    id="example-navbar-danger"
                >
                    <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                        <li className="nav-item">
                            <Link className={pathname === '/clientes' ? 'items-center font-bold text-xs pr-2 py-2 uppercase text-orange-600' : 'items-center font-bold text-xs pr-2 py-2 uppercase text-gray-600'} to="/clientes">Clientes</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={pathname === '/clientes/nuevo' ? 'items-center font-bold text-xs pr-2 py-2 uppercase text-orange-600' : 'items-center font-bold text-xs pr-2 py-2  uppercase text-gray-600'} to="/clientes/nuevo">Nuevo cliente</Link>
                        </li>
                    </ul>
                    
                </div>
                </div>
            </nav>
            <div className="container mx-auto text-center">
                <Outlet />
            </div>
        </>

    )
}

export default Layout


