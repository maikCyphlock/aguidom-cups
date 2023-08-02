"use client"
import { useState } from 'react'
function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    return (

        <nav className=" border-gray-200 bg-gray-950">
            <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
                <a href="/" className="flex items-center">

                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Aguidom</span>
                </a>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden en hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-00 " aria-controls="navbar-default" aria-expanded="false" onClick={() => setIsOpen(!isOpen)}>
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
                    <ul className="flex flex-col p-4 mt-4 font-medium border border-gray-100 bg-transparent rounded-lg md:p-0 bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent   ">
                        <li>
                            <a href="/" className="block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-700 md:p-0 text-yellow-400 md:dark:hover:text-yellow-500 dark:hover:bg-gray-700 dark:hover:text-yellow-400 md:dark:hover:bg-transparent" aria-current="page">Inicio</a>
                        </li>
                        <li>
                            <a href="/runner" className="block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-700 md:p-0 text-yellow-400 md:dark:hover:text-yellow-500 dark:hover:bg-gray-700 dark:hover:text-yellow-400 md:dark:hover:bg-transparent">corredores</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-700 md:p-0 text-yellow-400 md:dark:hover:text-yellow-500 dark:hover:bg-gray-700 dark:hover:text-yellow-400 md:dark:hover:bg-transparent">contacto</a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Navbar