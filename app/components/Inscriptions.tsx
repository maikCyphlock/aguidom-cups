"use client"
import { useState, useEffect, FormEvent } from 'react'
import { UploadFileAndGetUrl } from '../firebase'
import { redirect } from 'next/navigation'

interface FormdataUser {
  name: "",
  email: "",
  dni: "",
  age: "",
  img: File
}
function Inscriptions() {

  const [imgUrl, setImgUrl] = useState("")
  const [usersFormdata, setUsersFormdata] = useState({
    name: "",
    email: "",
    dni: "",
    age: "",
    img: null
  })
  const handlerSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formdata: FormdataUser = Object.fromEntries(new FormData(e.target))
    const getUrl = await UploadFileAndGetUrl(formdata.img)
    const newUser = {
      ...formdata,
      img: getUrl
    }
    const res = await fetch("/api", {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "Content-Type": "application/json"
      }
    })

    if (res.ok) {
      const { id } = await res.json()
      window.location.replace(`/runner/${id}`)
    }
    setImgUrl(getUrl)
  }
  const handlerChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target

    setUsersFormdata((prevState) => {
      return {
        ...prevState,
        [name]: value
      }
    })

  }

  return (
    <><form onSubmit={(e) => handlerSubmit(e)} encType='multipart/form-data' className="w-full max-w-sm p-8 mx-auto border-2 rounded-md shadow-md bg-gradient-to-tr from-transparent to-zinc-600/20 border-zinc-800">
      <div className="mb-4">
        <label className="block mb-2 text-sm font-bold text-gray-50" htmlFor="name">Nombre</label>
        <input onChange={handlerChange} value={usersFormdata?.name} className="w-full px-3 py-2 text-white border rounded-md border-zinc-800 bg-black/20 focus:outline-none focus:border-indigo-500"
          type="text" id="name" name="name" placeholder="Juan" />
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-bold text-gray-50" htmlFor="email">Correo electrónico</label>
        <input onChange={handlerChange} value={usersFormdata?.email} className="w-full px-3 py-2 text-white border rounded-md border-zinc-800 bg-black/20 focus:outline-none focus:border-indigo-500"
          type="email" id="email" name="email" placeholder="john@example.com" />
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-bold text-gray-50" htmlFor="password">Cédula</label>
        <input onChange={handlerChange} value={usersFormdata?.dni} className="w-full px-3 py-2 text-white border rounded-md border-zinc-800 bg-black/20 focus:outline-none focus:border-indigo-500"
          type="text" id="dni" name="dni" placeholder="v-29340532" />
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-bold text-gray-50" htmlFor="age">Edad</label>
        <input onChange={handlerChange} value={usersFormdata?.age} className="w-full px-3 py-2 text-white border rounded-md border-zinc-800 bg-black/20 focus:outline-none focus:border-indigo-500"
          type="text" id="age" name="age" placeholder="12" />
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-bold text-gray-50" htmlFor="img">Foto Tipo carnet</label>
        <input onChange={handlerChange} value={usersFormdata?.photo} className="w-full px-3 py-2 text-white border rounded-md border-zinc-800 bg-black/20 focus:outline-none focus:border-indigo-500"
          type="file" id="img" name="img" accept="image/png, image/jpeg" />
        <img src={imgUrl} alt="" className='w-full h-full mt-2 rounded-md' />
      </div>
      <button

        className="w-full px-4 py-2 text-sm font-bold text-white transition duration-300 bg-indigo-500 rounded-md hover:bg-indigo-600"
        type="submit">Register</button>
    </form></>
  )
}

export default Inscriptions