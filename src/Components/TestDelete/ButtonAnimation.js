import { useState } from 'react'
import { BiLoaderAlt } from 'react-icons/bi'
import './buttonanimation.css'
function ButtonAnimation() {
    const [loadingStatus, setLoadingStatus] = useState(false)

    return (
        <>
            <button class="bg-green-100 px-6 py-2 mx-auto my-auto shadow-lg w-40 relative flex justify-center items-center rounded-sm" onClick={() => setLoadingStatus(true)}>
                {!loadingStatus && <span class="submit">Submit</span>}

               {loadingStatus && <div className={`absolute bgAnimate left-0 top-0  h-full bg-green-400 transition-all rounded-sm border-2 border-white`}></div>}
                {loadingStatus && <div class="loading z-50 mx-auto font-bold"><BiLoaderAlt className='animate-spin text-white text-lg font-semibold' /></div>}
            </button>
        </>
    )

}

export default ButtonAnimation

