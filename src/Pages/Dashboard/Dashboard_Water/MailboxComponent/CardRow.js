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

function cardRow(props) {
    return (
        <>
            <div className='font-semibold text-sm'>{props.title} :</div>
            <div className='text-sm'>{props.value}</div>
        </>
    )
}

export default cardRow
/**
 * Exported to :
 * 
 */