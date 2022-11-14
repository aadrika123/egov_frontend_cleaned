import React from 'react'
import {FcExpired} from 'react-icons/fc'

function ErrorPage() {
  return (
    <div className='px-20 text-center'><span className='text-center bg-red-400 text-white px-6 py-4 shadow-lg border-2 border-white'><FcExpired className='inline text-white text-2xl'/> Something Went Wrong..</span></div>
  )
}

export default ErrorPage