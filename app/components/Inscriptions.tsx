"use client"
import { useState, useEffect, FormEvent } from 'react'
import { UploadFileAndGetUrl } from '../firebase'
import { email, minLength, object, type Output, safeParse, string, maxLength, unknown } from 'valibot';
import Spinner from './Spinner'

interface FormdataUser {
  name: "",
  email: "",
  dni: "",
  age: "",
  img: File
}
function Inscriptions() {
  const LoginSchema = object({
    name: string([minLength(3)]),
    email: string([email()]),
    dni: string([minLength(5)]),
    age: string([maxLength(3)]),
    img: unknown()
  });
  const [imgUrl, setImgUrl] = useState("https://thumbs.dreamstime.com/b/person-gray-photo-placeholder-man-costume-background-146157490.jpg")
  const [isLoading, setIsLoading] = useState(false)
  const [usersFormdata, setUsersFormdata] = useState({
    name: "",
    email: "",
    dni: "",
    age: "",
    img: undefined
  })
  const handlerSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setIsLoading(true)
    //@ts-ignore
    const formdata: FormdataUser = Object.fromEntries(new FormData(e.target))


    const result = safeParse(LoginSchema, formdata)

    if (result.success) {

      console.log(result)
    }
    else {
      console.log(result.error);
      return
    }

    const newUser = {
      ...formdata,
      img: imgUrl
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
      setIsLoading(false)
    }

  }
  const handlerImageChange = async (e: { target: { files: any; }; }) => {
    setIsLoading(true)
    const getUrl = await UploadFileAndGetUrl(e.target.files[0])
    setImgUrl(() => getUrl)
    //@ts-ignore
    setUsersFormdata((prevState) => {
      setIsLoading(false)
      return {
        ...prevState,
        img: getUrl
      }
    })

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
    <><form id="suscribe" onSubmit={(e) => handlerSubmit(e)} encType='multipart/form-data' className="w-full max-w-sm p-8 mx-auto border-2 rounded-md shadow-md bg-gradient-to-tr from-transparent to-zinc-600/20 border-zinc-800">
      <div className="mb-4">
        <label className="block mb-2 text-sm font-bold text-gray-50" htmlFor="name">Nombre</label>
        <input required onChange={handlerChange} value={usersFormdata?.name} className="w-full px-3 py-2 text-white border rounded-md border-zinc-800 bg-black/20 focus:outline-none focus:border-yellow-500"
          type="text" id="name" name="name" placeholder="Juan" />
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-bold text-gray-50" htmlFor="email">Correo electrónico</label>
        <input required onChange={handlerChange} value={usersFormdata?.email} className="w-full px-3 py-2 text-white border rounded-md border-zinc-800 bg-black/20 focus:outline-none focus:border-yellow-500"
          type="email" id="email" name="email" placeholder="john@example.com" />
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-bold text-gray-50" htmlFor="password">Cédula</label>
        <input required onChange={handlerChange} value={usersFormdata?.dni} className="w-full px-3 py-2 text-white border rounded-md border-zinc-800 bg-black/20 focus:outline-none focus:border-yellow-500"
          type="text" id="dni" name="dni" placeholder="v-29340532" />
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-bold text-gray-50" htmlFor="age">Edad</label>
        <input required onChange={handlerChange} value={usersFormdata?.age} className="w-full px-3 py-2 text-white border rounded-md border-zinc-800 bg-black/20 focus:outline-none focus:border-yellow-500"
          type="text" id="age" name="age" placeholder="12" />
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-bold text-gray-50" htmlFor="img">Foto Tipo carnet</label>
        <input required onChange={handlerImageChange} className="w-full px-3 py-2 text-white border rounded-md border-zinc-800 bg-black/20 focus:outline-none focus:border-yellow-500"
          type="file" id="img" name="img" accept="image/png, image/jpeg" />
        <img src={imgUrl} alt="" className='w-full h-full mt-2 rounded-md aspect-square' />
      </div>
      <button

        className="flex justify-center w-full px-4 py-2 text-sm font-bold text-white transition duration-300 bg-yellow-500 rounded-md disabled:bg-yellow-900 disabled:text-gray-400 hover:bg-yellow-600"
        type="submit" disabled={isLoading}> {isLoading ? <Spinner /> : "Register"}</button>
    </form></>
  )
}

export default Inscriptions