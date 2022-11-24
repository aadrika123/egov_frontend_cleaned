import React from 'react'
import {RiBuilding2Line} from 'react-icons/ri'
import {GiFlatHammer} from 'react-icons/gi'
import { useNavigate } from 'react-router-dom'

const ObjectionIndex = () => {

    const navigate = useNavigate()

  return (
    <>
    
    <div className='px-6 mt-[5rem]'>

        <div className='flex flex-row justify-evenly items-center space-x-2 w-[10vw] my-4'>
           <span className='font-extrabold text-[30px]'><GiFlatHammer/></span>
           <span className='text-lg font-bold'>Objections</span>
        </div>

        <div className='flex flex-wrap flex-row '>
            <div onClick={() => navigate('/objection-clerical-mistake')} className='mr-4 mb-4 bg-blue-200 hover:bg-blue-300 px-4 py-2 rounded-md shadow-lg cursor-pointer w-[15rem] h-[5rem] flex flex-row flex-wrap items-center justify-evenly hover:scale-105 transition-all duration-500'><span className='font-extrabold text-[30px] text-blue-600'><RiBuilding2Line/></span><span>Clerical Mistake</span></div>
            <div onClick={() => navigate('/objection-assessment-error')} className='mr-4 mb-4 bg-blue-200 hover:bg-blue-300 px-4 py-2 rounded-md shadow-lg cursor-pointer w-[15rem] h-[5rem] flex flex-row flex-wrap items-center justify-evenly hover:scale-105 transition-all duration-500'><span className='font-extrabold text-[30px] text-blue-600'><RiBuilding2Line/></span><span>Assessment Error</span></div>
            <div onClick={() => navigate('/objection-forgery')} className='mr-4 mb-4 bg-blue-200 hover:bg-blue-300 px-4 py-2 rounded-md shadow-lg cursor-pointer w-[15rem] h-[5rem] flex flex-row flex-wrap items-center justify-evenly hover:scale-105 transition-all duration-500'><span className='font-extrabold text-[30px] text-blue-600'><RiBuilding2Line/></span><span>Forgery</span></div>
        </div>

    </div>
    
    </>
  )
}

export default ObjectionIndex