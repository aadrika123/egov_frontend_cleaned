//////////////////////////////////////////////////////////////////////////////////////
//    Author - Dipu Singh
//    Version - 1.0
//    Date - 09 July 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - WaterStatusTimeline
//    DESCRIPTION - WaterStatusTimeline Component
//////////////////////////////////////////////////////////////////////////////////////
import React from 'react'
import { GiCheckMark } from 'react-icons/gi'
import { TiDeleteOutline } from 'react-icons/ti'

function StatusTimeline(props) {
    return (
        <>
            <div className="relative">
                <div className={" mb-2 flex items-center w-full"}>
                    <div style={{ 'boxShadow': '2px 4px 2px gray' }} className={(props.verificationStatus ? "bg-green-400 border-2 border-green-500 shadow-lg" : "bg-gray-200") + " z-1 flex flex-initial items-center order-1 w-4 h-4 sm:w-6 sm:h-6 rounded-full"}>
                        <h1 className="mx-auto font-semibold text-sm text-white">{props.verificationStatus ? <GiCheckMark size={20} /> : 'X'}</h1>
                    </div>
                    {!props.last ? <div className={(props.verificationStatus ? "bg-green-300" : "bg-gray-200") + " order-2 flex-initial w-10 sm:w-32"} style={{ 'height': '2px' }}></div> : ''}



                </div>
                <div className='flex-initial text-xs text-left font-semibold pl-2'>{props.index}</div>
                <div className='flex-initial text-xs opacity-50 pl-0 sm:pl-2'>{props.level}</div>
            </div>
        </>

    )
}

export default StatusTimeline
/**
 * Exported to :
 * 1. WaterDetailsTabs Component
 * 
 */