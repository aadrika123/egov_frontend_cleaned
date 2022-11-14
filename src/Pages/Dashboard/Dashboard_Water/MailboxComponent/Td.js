//////////////////////////////////////////////////////////////////////////////////////
//    Author - Dipu Singh
//    Version - 1.0
//    Date - 10 Aug 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - Water 
//    DESCRIPTION - Water Final
//////////////////////////////////////////////////////////////////////////////////////
import React from 'react'

function Td(props) {
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

export default Td
/**
 * Exported to :
 * 1. DetailsTable component
 */