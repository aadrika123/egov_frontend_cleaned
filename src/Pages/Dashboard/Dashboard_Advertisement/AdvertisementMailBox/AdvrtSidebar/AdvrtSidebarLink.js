//////////////////////////////////////////////////////////////////////////////////////
//    Author - swati sharma
//    Version - 1.0
//    Date - 24-09-2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - AdvrtSidebarLink
//    DESCRIPTION - AdvrtSidebarLink Component
//////////////////////////////////////////////////////////////////////////////////////

import React from 'react'
import { FaEnvelope } from 'react-icons/fa';
import TradeRawLink from './TradeRawLink';

function AdvrtSidebarLink(props) {
    return (
        <>
            <li className='flex items-center pl-2 py-2 mt-2 hover:bg-sky-100 hover:border-l-2 hover:border-indigo-600  hover:text-blue-500' style={{ 'width': '250px' }}>
                <div className="flex-none ">
                    <FaEnvelope size={14} />
                </div>
                <div className="flex-initial w-40">
                    <TradeRawLink path={props.path} title={props.title} />
                </div>
            </li>
            {props.children}
        </>
    )
}

export default AdvrtSidebarLink