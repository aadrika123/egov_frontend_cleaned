//////////////////////////////////////////////////////////////////////////////////////
//    Author - swati sharma
//    Version - 1.0
//    Date - 23-09-2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - SelfAdvrtMailboxPattern
//    DESCRIPTION - SelfAdvrtMailboxPattern Component
//////////////////////////////////////////////////////////////////////////////////////

import { useState } from 'react'
import OutBox from 'Components/MailboxComponent/OutBox'
import Search from 'Components/MailboxComponent/Search'
import Special from 'Components/MailboxComponent/Special'
import SelfAdvrtMailBoxSidebar from './SelfAdvrtMailboxComponent/SelfAdvrtMailBoxSidebar'
import SelfAdvrtMailBoxContent from './SelfAdvrtMailboxComponent/SelfAdvrtMailBoxContent'

function SelfAdvrtMailboxPattern() {

    const [tabIndex, settabIndex] = useState(0)     //state to store current tab index
    const tabSwitch = (index) => {        //tabSwitch function receive tabIndex to switch between tabs called from Sidebar menu
        settabIndex(index)      //updating the tab index to recent value
    }

    return (
        <>
            <div className="grid grid-cols-12 rounded-lg mt-4 -ml-10 shadow-xl broder-2 border-sky-200 bg-gray-200">
                <div className='col-span-12 sm:col-span-2 '> <SelfAdvrtMailBoxSidebar fun={tabSwitch} /></div>
                {tabIndex == 0 && <div className='col-span-12 sm:col-span-10 shadow-lg bg-white overflow-y-scroll' style={{ 'height': '90vh' }}><SelfAdvrtMailBoxContent /></div>}       {/**input box component to show list of all incoming holding applications */}
                {tabIndex == 1 && <div className='col-span-12 sm:col-span-10 shadow-lg bg-white overflow-y-scroll' style={{ 'height': '90vh' }}><OutBox /></div>}       {/**outbox component to show list of all application except incoming holdin application */}
                {tabIndex == 2 && <div className='col-span-12 sm:col-span-10 shadow-lg bg-white overflow-y-scroll' style={{ 'height': '90vh' }}><Search /></div>}       {/**serach component to search list of verfied property */}
                {tabIndex == 3 && <div className='col-span-12 sm:col-span-10 shadow-lg bg-white overflow-y-scroll' style={{ 'height': '90vh' }}><Special /></div>}  
                {tabIndex == 4 && <div className='col-span-12 sm:col-span-10 shadow-lg bg-white overflow-y-scroll' style={{ 'height': '90vh' }}><Special /></div>}
                {tabIndex == 5 && <div className='col-span-12 sm:col-span-10 shadow-lg bg-white overflow-y-scroll' style={{ 'height': '90vh' }}><Special /></div>}    {/**Special component which receives list of escalted holding applications */}
            </div>
        </>
    )
}

export default SelfAdvrtMailboxPattern
/**
 * Exported to :
 * 1. selfAdvertisementMailbox.js
 * 
 */