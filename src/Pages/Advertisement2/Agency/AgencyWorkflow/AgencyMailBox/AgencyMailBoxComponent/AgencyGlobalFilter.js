//////////////////////////////////////////////////////////////////////////////////////
//    Author - swati sharma
//    Version - 1.0
//    Date - 26-09-2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - AgencyGlobalFilter
//    DESCRIPTION - AgencyGlobalFilter Component
//////////////////////////////////////////////////////////////////////////////////////

import React from 'react'

function AgencyGlobalFilter({ filter, setFilter }) {
    return (
        <>
            Search : {' '}
            <input className='border-2 border-gray-600 px-2 bg-gray-200' type="text" value={filter || ''} onChange={e => setFilter(e.target.value)} />
        </>
    )
}

export default AgencyGlobalFilter