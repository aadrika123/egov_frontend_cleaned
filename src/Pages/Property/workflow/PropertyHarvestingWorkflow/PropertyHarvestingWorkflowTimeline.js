//////////////////////////////////////////////////////////////////////////////////////
//    Author - Talib Hussain
//    Version - 1.0
//    Date - 14 july 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - PropertyHarvestingWorkflowTimeLine (closed)
//    DESCRIPTION - PropertyHarvestingWorkflowTimeLine Component
//////////////////////////////////////////////////////////////////////////////////////
import CheckBoxInput from 'Components/Shared/CheckBoxInput'
import RippleAnimation from 'Components/Shared/RippleAnimation'
import TextArea from 'Components/Shared/TextArea'
import { useState } from 'react'
import {useQuery} from 'react-query'
import axios from 'axios'
import PropertyHarvestingTimeline from './PropertyHarvestingTimeline'

function PropertyHarvestingWorkflowTimeLine() {
    const [escalateStatus, setescalateStatus] = useState(false)


    const swithEscalateStatus = (status) => {
        setescalateStatus(status)
    }

    const { isLoading, data, isError, error } = useQuery("first-query", () => {
        return axios.get("http://localhost:3001/levelCandidateList");
    });


    const [user, setuser] = useState('')
    return (
        <>
            <div className="grid grid-cols-12 shadow-lg border-2 border-gray-200 relative">
                <div className={'bg-gray-200 col-span-12 md:col-span-3 h-auto'}>
                    <h1 className={(escalateStatus ? 'bg-sky-200' : 'bg-sky-200') + '  text-black font-semibold text-center py-2 mb-8'}>Members {escalateStatus ? <RippleAnimation /> : ''}</h1>
                    {/**RippleAnimation to  highlight escalated application*/}
                    <div className='px-2'>
                        <select className="shadow-lg h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-pointer"  >
                            {!isLoading ?
                                data.data.map((data) => (
                                    <option value={data.id}>{data.designation}</option>
                                )) : ''
                            }

                        </select>
                    </div>
                    <div className='px-2 mt-4 h-auto'>
                        <h1 className='text-xs'>Comments</h1>
                        <div className='h-28'><TextArea bgColor="bg-gray-100" value="Enter comments here" /></div>
                        <div className="flex mt-2">
                            <div className='flex-1'><button className='bg-green-300 text-black rounded-sm px-1 py-0 hover:shadow-lg'><a className='' style={{ 'fontSize': '10px' }} target="_blank" href="https://www.google.com/inputtools/try/">Type Hindi &#8594;</a></button></div>
                            <div className='flex-1'><button style={{ 'fontSize': '10px' }} className='bg-green-500 text-white rounded-sm px-2 hover:shadow-lg py-1'>Send Comment</button></div>

                        </div>
                        <div><CheckBoxInput fun={swithEscalateStatus} /></div>
                        <div><button
                            className="block w-full bg-sky-500 border-2  shadow-lg text-white text-sm font-semibold rounded-lg  focus:outline-none focus:shadow-outline  hover:shadow-xs p-3 py-2 hover:bg-sky-600 hover:text-white my-4">Approved</button></div>

                    </div>
                </div>
                <div className='col-span-12 md:col-span-9 bg-white'>
                    {/* <TimeLine /> */}
                    <PropertyHarvestingTimeline />
                </div>
            </div>
        </>
    )
}

export default PropertyHarvestingWorkflowTimeLine
/**
 * Exported to :
 * 1.PropertyHarvestingDetailsTabs Component
 * 
 */