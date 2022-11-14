import React from 'react'
import { BeatLoader } from 'react-spinners'
import { RingLoader } from 'react-spinners'

function Loader() {
    return (

        <>
            <div className="flex  md:w-40 md:h-10 items-center justify-center mx-auto">
            <BeatLoader color='#022751' />
            </div>

        </>
    )
}

export default Loader