import React from 'react'
import empty from 'Components/Media/empty.png'

function NoData() {
  return (
    <div className='w-full'>
        <img className='w-40 mx-auto' src={empty} alt="" />
        <div className='text-center '><span className='bg-gray-100 px-4 py-1 shadow-lg rounded-sm'>No Data Found !</span></div>
    </div>
  )
}

export default NoData