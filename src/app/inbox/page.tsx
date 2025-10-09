"use client"


import { useRouter } from 'next/navigation';
import React from 'react'

const page = () => {
    const router = useRouter();
    return router?.push('https://da22.host-ww.net/roundcube/');


  return (
    <div>page</div>
  )
}

export default page