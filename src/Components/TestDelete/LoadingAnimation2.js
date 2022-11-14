import { useState } from 'react'
import rocket from './rocket.svg'
import './loading.css'

function LoadingAnimation2() {
    const [animateClass, setAnimateClass] = useState('')
    const animateToggle = () => {
        if (animateClass == '') {
            setAnimateClass('animaterocket1')
        } else {
            setAnimateClass('')
        }
    }
    return (
        <>
            {/* <img className='w-60 mx-auto animaterocket absolute' src={rocket} alt="image" /> */}
            {/* <div onClick={animateToggle} className='text-center' style={{ 'marginTop': '40vh' }}><span className='relative bg-gray-200 text-gray-900 text-lg px-10 shadow-lg font-mono font-semibold py-2  pr-28'>Loading     <img className='w-10 animaterocket2 inline absolute right-6 top-0' src={rocket} alt="image" /> </span>
                <div className={`${animateClass} flex justify-center items-center absolute`}>

                    <span className='bg-orange-400 text-white py-1 px-4 rounded-lg relative -bottom-10'>Bringing Data for you</span></div>
            </div> */}
            <div className='block justify-center items-center h-auto overflow-hidden'>
                <img className='oneRocket z-50' src={rocket} alt="" />
                {/* <img className='twoRocket z-50' src={rocket} alt="" />
                <img className='threeRocket z-50' src={rocket} alt="" />
                <img className='fourRocket z-50' src={rocket} alt="" /> */}
                <div className='text-center relative -top-12'><span className='px-10 py-1 bg-gray-100 text-3xl mx-auto my-auto shadow-lg'>Loading</span></div>
            </div>
        </>
    )
}

export default LoadingAnimation2