//////////////////////////////////////////////////////////////////////////////////////
//    Author - Dipu Singh
//    Version - 1.0
//    Date - 16 Aug 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - 
//    DESCRIPTION -
//////////////////////////////////////////////////////////////////////////////////////
import { useState } from 'react'
import MailboxSidebar from 'Components/Common/MailboxSidebar'
import PaymentListAndViewDetails from './PaymentListAndViewDetails'
import BillGenerationINdex from './BillGeneration/BillGenerationINdex'
import TestPayment from './TestRzp/TestPayment'
// import PropertyNoticeIndex from './PropertyNoticeIndex'


function PaymentMasterSidebar() {
    const [tabIndex, settabIndex] = useState(0)     //state to store current tab index
    const tabs = [
        { title: "All Transactions", tabIndex: 0 },
        { title: "Success", tabIndex: 1 },
        { title: "Failed", tabIndex: 2 },
        { title: "Bill Generation", tabIndex: 3 },
        { title: "Test Payment", tabIndex: 4 }
    
    ]
    const tabSwitch = (index) => {        //tabSwitch function receive tabIndex to switch between tabs called from Sidebar menu
        settabIndex(index)      //updating the tab index to recent value
    }
    return (
        <>

            <div className="grid grid-cols-12 rounded-lg mt-4 -ml-10 shadow-xl broder-2 border-sky-200 bg-gray-200">
                <div className='col-span-12 sm:col-span-2 '>
                    <MailboxSidebar tabs={tabs} fun={tabSwitch} /></div>
                {tabIndex == 0 && <div className='col-span-12 sm:col-span-10 shadow-lg bg-white overflow-y-scroll' style={{ 'height': '90vh' }}> <PaymentListAndViewDetails /> </div>}     
                {tabIndex == 1 && <div className='col-span-12 sm:col-span-10 shadow-lg bg-white overflow-y-scroll' style={{ 'height': '90vh' }}> <PaymentListAndViewDetails  /> </div>}     
                {tabIndex == 2 && <div className='col-span-12 sm:col-span-10 shadow-lg bg-white overflow-y-scroll' style={{ 'height': '90vh' }}> <PaymentListAndViewDetails /> </div>}     
                {tabIndex == 3 && <div className='col-span-12 sm:col-span-10 shadow-lg bg-white overflow-y-scroll' style={{ 'height': '90vh' }}> <BillGenerationINdex /> </div>}     
                {tabIndex == 4 && <div className='col-span-12 sm:col-span-10 shadow-lg bg-white overflow-y-scroll' style={{ 'height': '90vh' }}> <TestPayment /> </div>}     
                
            </div>
        </>
    )
}

export default PaymentMasterSidebar
/**
 * Exported to :
 * 1. NoticeIndex.js
 * 
 * 
 */