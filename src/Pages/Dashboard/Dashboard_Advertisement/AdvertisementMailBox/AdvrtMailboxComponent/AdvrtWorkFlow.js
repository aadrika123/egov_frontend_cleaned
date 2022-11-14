//////////////////////////////////////////////////////////////////////////////////////
//    Author - swati sharma
//    Version - 1.0
//    Date - 24-09-2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - AdvrtWorkFlow
//    DESCRIPTION - AdvrtWorkFlow Component
//////////////////////////////////////////////////////////////////////////////////////

import React from 'react'
import CheckBoxInput from 'Components/Shared/CheckBoxInput'
import RippleAnimation from 'Components/Shared/RippleAnimation'
import TextArea from 'Components/Shared/TextArea'
import { useState } from 'react'
import { BsArrowRightShort } from 'react-icons/bs'
import AdvrtTimeLine2 from './AdvrtTimeLine2.js'
import AdvrtMemebersAction from './AdvrtMemebersAction.js'

function AdvrtWorkFlow() {

    const [escalateStatus, setescalateStatus] = useState(false)


    const swithEscalateStatus = (status) => {
        setescalateStatus(status)
    }


    const [user, setuser] = useState('')
    return (
        <>
            <div className="grid grid-cols-12 shadow-lg border-2 border-gray-200 relative">
                <div className={'bg-gray-200 col-span-12 md:col-span-3 h-auto'}>
                    <h1 className={(escalateStatus ? 'bg-sky-200' : 'bg-sky-200') + '  text-black font-semibold text-center py-2 mb-8'}>Members {escalateStatus ? <RippleAnimation /> : ''}</h1>
                    {/**RippleAnimation to  highlight escalated application*/}
                    <AdvrtMemebersAction />
                    <div className='px-2 mt-4 h-auto'>
                        <h1 className='text-xs'>Comments</h1>
                        <div className='h-28'><TextArea bgColor="bg-gray-100" value="Enter comments here" /></div>
                        <div className="flex mt-2">
                            <div className='flex-1'><button className='bg-green-300 text-black rounded-sm px-1 py-0 hover:shadow-lg'><a className='' style={{ 'fontSize': '10px' }} target="_blank" href="https://www.google.com/inputtools/try/">Type Hindi &#8594;</a></button></div>
                            <div className='flex-1'><button style={{ 'fontSize': '10px' }} className='bg-green-500 text-white rounded-sm px-2 hover:shadow-lg py-1'>Send Comment</button></div>

                        </div>
                        <div><CheckBoxInput fun={swithEscalateStatus} /></div>
                        {/* <div><button
                            className="block w-full bg-sky-500 border-2  shadow-lg text-white text-sm font-semibold rounded-lg  focus:outline-none focus:shadow-outline  hover:shadow-xs p-3 py-2 hover:bg-sky-600 hover:text-white my-4">Approved</button></div> */}

                    </div>
                </div>
                <div className='col-span-12 md:col-span-9 bg-white'>
                    {/* <TimeLine /> */}
                    <AdvrtTimeLine2 />
                </div>
            </div>
        </>
    )
}

export default AdvrtWorkFlow