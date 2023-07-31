import React from 'react'
import AtroposCardUser from '@/app/components/atroposCardUser';
import { createServerComponentSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from "next/headers";
async function page({ params }: any) {
  //@ts-ignore
  const supabase = createServerComponentSupabaseClient({ cookies });

  const { data: users } = await supabase.from("users").select('*').eq("id", params.id);
  return (
    <div className="grid min-h-screen bg-gradient-to-tr from-transparent to-indigo-950/20 place-content-center">
      {
        users?.map(({ id, fullname, img, age }) => (

          <AtroposCardUser key={id} id={id} fullname={fullname} img={img} age={age} />
        ))
      }
    </div>
  )
}

export default page