import { useState } from 'react'
import rocket from './rocket.svg'
import './loading.css'

function LoadingAnimation() {
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
            <div onClick={animateToggle} className='text-center' style={{'marginTop':'40vh'}}><span className='relative bg-gray-200 text-gray-900 text-lg px-10 shadow-lg font-mono font-semibold py-2  pr-28'>Loading     <img className='w-10 animaterocket2 inline absolute right-6 top-0' src={rocket} alt="image" />  <img className='w-10 animaterocket3 inline absolute right-0 top-0' src={rocket} alt="image" /></span>
                <div className={`${animateClass} flex justify-center items-center absolute`}>
                    <img className={`w-10  inline absolute animaterocketimg`} src={rocket} alt="image" />
                    <span className='bg-orange-400 text-white py-1 px-4 rounded-lg relative -bottom-10'>Bringing Data for you</span></div>
            </div>
        </>
    )
}

export default LoadingAnimation