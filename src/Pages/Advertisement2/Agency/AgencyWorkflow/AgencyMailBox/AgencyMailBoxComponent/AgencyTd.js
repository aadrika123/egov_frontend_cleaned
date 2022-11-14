//////////////////////////////////////////////////////////////////////////////////////
//    Author - swati sharma
//    Version - 1.0
//    Date - 26-09-2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - AgencyTd
//    DESCRIPTION - AgencyTd Component
//////////////////////////////////////////////////////////////////////////////////////


import React from 'react'

function AgencyTd(props) {
    return (
        <>
            <td className="px-5 py-3 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">
                    {props.value}
                </p>
            </td>
        </>
    )
}

export default AgencyTd