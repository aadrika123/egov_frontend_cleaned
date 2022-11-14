import React from 'react'

function RoundLoader() {
    return (
        <div className="loader w-40 absolute bg-transparent top-0 left-0 flex justify-center items-center w-screen h-screen z-50">
            <div>
                <div className='h-screen opacity-70 w-screen absolute top-0 left-0 bg-gray-200 border-5 border-green-500'></div>
                    <div className='h-20 w-20 border-l-2 border-t-2 border-sky-200 rounded-full animate-spin'>
                        <div></div>
                    </div>

            </div>
            <div className='text-sky-200 text-2xl font-semibold z-50 px-10 '>Loading...</div>
        </div>
    )
}

export default RoundLoader