import React from 'react'

function Footer() {
    return (

        <footer className="m-4 mt-12 rounded-lg shadow bg-gradient-to-tr from-transparent to-zinc-600/20">
            <div className="w-full max-w-screen-xl p-4 mx-auto md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="https://github.com/maikCyphlock" className="flex items-center mb-4 sm:mb-0">
                        <img src="https://avatars.githubusercontent.com/u/66704744?s=400&u=30eb7b15b8f105c9cc93d76ac7137d0339ae93d9&v=4" className="h-12 mr-3 rounded-md" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Maikcyphlock</span>
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
                        </li>
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6 ">Licensing</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-500/20 sm:mx-auto dark:border-zinc-800 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://github.com/maikCyphlock" className="hover:underline">Maikol aguilar™</a>. All Rights Reserved.</span>
            </div>
        </footer>


    )
}

export default Footer