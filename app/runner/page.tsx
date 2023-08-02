import { createServerComponentSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from "next/headers";
import React from 'react'
import AtroposCardUser from '../components/atroposCardUser';
async function page() {
    //@ts-ignore
    const supabase = createServerComponentSupabaseClient({ cookies });

    const { data: users } = await supabase.from("users").select('*')
    return (
        <div className='flex flex-col gap-4 mt-4 '>{users?.map(({ id, fullname, img, age }) => (
            <a key={id} href={`runner/${id}`}>
                <AtroposCardUser id={id} fullname={fullname} img={img} age={age}></AtroposCardUser>
            </a>
        ))}</div>
    )
}

export default page