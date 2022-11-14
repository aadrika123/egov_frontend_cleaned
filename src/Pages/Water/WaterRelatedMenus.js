import React from 'react'

function WaterRelatedMenus() {
    return (

        <div className='font-semibold text-md uppercase font-mono '>

            <div className='w-full h-16 bg-gradient-to-r from-green-400 to-sky-200 text-stone-50 rounded-lg text-xl'>
                <h1 className='pl-16 pt-4 '> Water Related Services </h1>
            </div>

            <div className='grid grid-cols-5 gap-4 m-4 font-semibold text-md text-gray-700'>

                <div className='h-32 shadow-md shadow-sky-100 text-center rounded-lg hover:bg-amber-200 '>
                    <img src="https://cdn-icons-png.flaticon.com/512/2487/2487463.png" alt="" className='h-16 w-16 mx-auto' />
                    <h1 className=''>NEW CONNECTION</h1>
                </div>
                <div className='h-32 shadow-md shadow-sky-100 text-center rounded-lg hover:bg-amber-200 '>
                    <img src="https://cdn-icons-png.flaticon.com/512/3566/3566511.png" alt="" className='h-16 w-16 mx-auto' />
                    <h1 className=''>APPLIED CONNECTIONS </h1>
                </div>
                <div className='h-32 shadow-md shadow-sky-100 text-center rounded-lg hover:bg-amber-200 '>
                    <img src="https://cdn-icons-png.flaticon.com/512/2487/2487463.png" alt="" className='h-16 w-16 mx-auto' />
                    <h1 className=''>NEW CONNECTION</h1>
                </div>
                <div className='h-32 shadow-md shadow-sky-100 text-center rounded-lg hover:bg-amber-200 '>
                    <img src="https://cdn-icons-png.flaticon.com/512/2487/2487463.png" alt="" className='h-16 w-16 mx-auto' />
                    <h1 className=''>NEW CONNECTION</h1>
                </div>

            </div>
        </div>
    )
}

export default WaterRelatedMenus