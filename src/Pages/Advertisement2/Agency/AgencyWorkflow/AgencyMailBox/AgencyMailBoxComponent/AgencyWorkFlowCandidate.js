//////////////////////////////////////////////////////////////////////////////////////
//    Author - swati sharma
//    Version - 1.0
//    Date - 26-09-2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - AgencyWorkFlowCandidate
//    DESCRIPTION - AgencyWorkFlowCandidate Component
//////////////////////////////////////////////////////////////////////////////////////


import React from 'react'
// import user from '../../../Components/MailboxComponent/user.jpg'

function AgencyWorkFlowCandidate(props) {
    return (
        <>
            <div className={(props.activeCandidateStatus && "mb-2") + " flex ml-2 py-1 relative mt-3"}>
                {props.activeCandidateStatus && <div className="absolute -bottom-1 font-semibold left-1 bg-green-500 text-gray-100 rounded-lg px-1 py-0 shadow-xl" style={{ 'fontSize': '10px' }}>Active</div>}
                <div className="absolute -top-2 right-4 bg-yellow-500 text-white rounded-full px-1  py-0 shadow-xl" style={{ 'fontSize': '10px' }}>12</div>
                {/* <div className="flex-initial pl-1"><img className='w-8 rounded-full' src={user} alt="" /></div> */}
                <div className="flex-initial pl-2 text-sm"><div className='text-black'>{props.name}</div>
                    <div className='text-xs text-gray-400'>{props.designation}</div></div>
            </div>
        </>
    )
}

export default AgencyWorkFlowCandidate