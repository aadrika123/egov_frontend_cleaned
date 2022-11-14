//////////////////////////////////////////////////////////////////////////////////////
//    Author - swati sharma
//    Version - 1.0
//    Date - 26-09-2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - AgencyTh
//    DESCRIPTION - AgencyTh Component
//////////////////////////////////////////////////////////////////////////////////////

import React from 'react'

function AgencyTh(props) {
    return (
        <>
            <th scope="col" className="px-5 py-3 border-b border-gray-200 text-gray-800  text-left text-sm uppercase">
                {props.value}
            </th>
        </>
    )
}

export default AgencyTh