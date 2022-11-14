//////////////////////////////////////////////////////////////////////////////////////
//    Author - swati sharma
//    Version - 1.0
//    Date - 24-09-2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - AdvrtGlobalFilter
//    DESCRIPTION - AdvrtGlobalFilter Component
//////////////////////////////////////////////////////////////////////////////////////

import React from 'react'

function AdvrtGlobalFilter({ filter, setFilter }) {
    return (
        <>
            Search : {' '}
            <input className='border-2 border-gray-600 px-2 bg-gray-200' type="text" value={filter || ''} onChange={e => setFilter(e.target.value)} />
        </>
    )
}

export default AdvrtGlobalFilter