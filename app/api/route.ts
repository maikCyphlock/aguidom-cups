import { NextResponse } from "next/server"
import { createClient } from '@supabase/supabase-js'


const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
//@ts-ignore
const supabase = createClient(supabaseUrl, supabaseAnonKey)


enum FormdataUser {
    dni = "dni",
    name = "name",
    email = "email",
    age = "age",
    img = "img",
}


export async function POST(request: Request) {
    const res = await request.json()
    
    const { data ,error} = await supabase
        .from('users')
        .insert({ 
            fullname: res.name, 
            email: res.email,
            dni: res.dni,
            age: res.age,
            img: res.img
        }) .select()

    if (error) {
        return NextResponse.json({
            error: error.message
        })
    }
    return NextResponse.json({
        id: data[0]?.id
    })
}