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

function GlobalFilter({ filter, setFilter }) {
  return (
    <>
      Search : {' '}
      <input className='border-2 border-gray-600 px-2 bg-gray-200' type="text" value={filter || ''} onChange={e => setFilter(e.target.value)} />
    </>
  )
}

export default GlobalFilter
/**
 * Exported to :
 * 1. ListItems Component
 * 
 */