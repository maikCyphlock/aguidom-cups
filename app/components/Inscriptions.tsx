import React from 'react'

function Inscriptions() {
  return (
<><form className="w-full max-w-sm p-8 mx-auto border-2 rounded-md shadow-md bg-gradient-to-tr from-transparent to-zinc-600/20 border-zinc-800">
      <div className="mb-4">
        <label className="block mb-2 text-sm font-bold text-gray-50" htmlFor="name">Name</label>
        <input className="w-full px-3 py-2 text-white border rounded-md border-zinc-800 bg-black/20 focus:outline-none focus:border-indigo-500"
          type="text" id="name" name="name" placeholder="John Doe"/>
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-bold text-gray-50" htmlFor="email">Email</label>
        <input className="w-full px-3 py-2 text-white border rounded-md border-zinc-800 bg-black/20 focus:outline-none focus:border-indigo-500"
          type="email" id="email" name="email" placeholder="john@example.com"/>
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-bold text-gray-50" htmlFor="password">Password</label>
        <input className="w-full px-3 py-2 text-white border rounded-md border-zinc-800 bg-black/20 focus:outline-none focus:border-indigo-500"
          type="password" id="password" name="password" placeholder="********"/>
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-bold text-gray-50" htmlFor="confirm-password">Confirm Password</label>
        <input className="w-full px-3 py-2 text-white border rounded-md border-zinc-800 bg-black/20 focus:outline-none focus:border-indigo-500"
          type="password" id="confirm-password" name="confirm-password" placeholder="********"/>
      </div>
      <button
        className="w-full px-4 py-2 text-sm font-bold text-white transition duration-300 bg-indigo-500 rounded-md hover:bg-indigo-600"
        type="submit">Register</button>
    </form></>
  )
}

export default Inscriptions