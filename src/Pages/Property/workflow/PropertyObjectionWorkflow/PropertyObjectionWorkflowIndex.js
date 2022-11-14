//////////////////////////////////////////////////////////////////////////////////////
//    Author - Talib Hussain
//    Version - 1.0
//    Date - 16 july 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - PropertyObjectionWorkflowIndex (closed)
//    DESCRIPTION - PropertyObjectionWorkflowIndex Component
//////////////////////////////////////////////////////////////////////////////////////
import { useState } from 'react'
import OutBox from 'Components/MailboxComponent/OutBox'
import Search from 'Components/MailboxComponent/Search'
import Special from 'Components/MailboxComponent/Special'
import MailboxSidebar from 'Components/Common/MailboxSidebar'
import { TbWebhook } from 'react-icons/tb'
import { useQuery } from 'react-query'
import axios from 'axios'
import PropertyObjectionInbox from './PropertyObjectionInbox'
import { WorkflowCandidateQuery } from 'Components/ApiQueries/QueryWorkflowCandidates'


function PropertyObjectionWorkflowIndex() {
    const [tabIndex, settabIndex] = useState(0)     //state to store current tab index

    const tabs = [ //tab list to pass to common mailboxSidebar component
        { title: "Inbox", tabIndex: 0 },
        { title: "Outbox", tabIndex: 1 },
        { title: "Search", tabIndex: 2 },
        { title: "Special", tabIndex: 3 },
    ]
    const safWorkflowId=1
    const {isLoading, data, isError, error } = WorkflowCandidateQuery(true,safWorkflowId)
    const tabSwitch = (index) => {        //tabSwitch function receive tabIndex to switch between tabs called from Sidebar menu
        settabIndex(index)      //updating the tab index to recent value
    }
    return (
        <>

            {/* <div className="grid grid-cols-12 mb-2">
                <div className='bg-sky-100 border-l border-b border-white text-black col-span-12 sm:col-span-3 sm:col-start-10 pl-4 rounded-l shadow-lg font-semibold'><TbWebhook className='inline' /> Objection WorkFlow</div>
            </div> */}
            <div className="grid grid-cols-12 rounded-lg mt-0 -ml-10 shadow-xl broder-2 border-sky-200 bg-gray-200">
                <div className='col-span-12 sm:col-span-2 '>{isLoading && <h1>Looading ...</h1>}
                    {!isLoading && <MailboxSidebar candidateListStatus={true} workflowCandidates={data?.data} tabs={tabs} fun={tabSwitch} />} </div> {/** MailboxSidebar - common mailbox sidebar component */}
                {tabIndex == 0 && <div className='col-span-12 sm:col-span-10 shadow-lg bg-white overflow-y-scroll' style={{ 'height': '90vh' }}><PropertyObjectionInbox /></div>}       {/**PropertySafInbox  component to show list of all incoming holding applications */}
                {tabIndex == 1 && <div className='col-span-12 sm:col-span-10 shadow-lg bg-white overflow-y-scroll' style={{ 'height': '90vh' }}><OutBox /></div>}       {/**outbox component to show list of all application except incoming holdin application */}
                {tabIndex == 2 && <div className='col-span-12 sm:col-span-10 shadow-lg bg-white overflow-y-scroll' style={{ 'height': '90vh' }}><Search /></div>}       {/**serach component to search list of verfied property */}
                {tabIndex == 3 && <div className='col-span-12 sm:col-span-10 shadow-lg bg-white overflow-y-scroll' style={{ 'height': '90vh' }}><Special /></div>}      {/**Special component which receives list of escalted holding applications */}
            </div>
        </>
    )
}

export default PropertyObjectionWorkflowIndex
/**
 * Exported to :
 * 1. App.js
 * 
 */