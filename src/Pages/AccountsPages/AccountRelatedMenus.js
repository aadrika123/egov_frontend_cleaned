
//////////////////////////////////////////////////////////////////////////////////////
//    Author - Anshuman
//    Version - 1.0
//    Date - 09 July 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - Related Menus
//    DESCRIPTION - Related Menus for userPermission | Includes - Horizontal Tabs
//////////////////////////////////////////////////////////////////////////////////////
import { useState } from 'react'
import MailboxSidebar from 'Components/Common/MailboxSidebar'
import NewApplication from '../Trade/NewApplication/NewApplication';
import { contextVar } from '.././../Components/Context/Context';
import axios from 'axios';
import ApplicationList from '../Trade/NewApplication/ApplicationList';
import Renewal from '../Trade/Renewal/Renewal';
import Surrender from '../Trade/Surrender/Surrender';
import Amendment from '../Trade/Amendment/Amendment';
import CashVerificationList from './CashVerificationList';
import CashVerification from './CashVerification';
import BankReconciliation from './BankReconciliation';
import TradeTransactionDeactivate from './TradeTransactionDeactivate';
function AccountRelatedMenus() {
    const [tabIndex, settabIndex] = useState(0)     //state to store current tab index
    const [idApi, setidApi] = useState(0)
    const [updateData, setupdateData] = useState(
        {
            category: "Not Authenticated",
            created_at: "2022-08-02 05:37:55",
            created_by: "Anshu Kumar",
            created_on: "2022-06-29 00:00:00",
            description: "abc",
            discontinued: false,
            end_point: "test2",
            id: 3,
            post_condition: "None",
            pre_condition: "Authentication is required",
            remarks: "",
            request_payload: "Token Only",
            response_payload: "username,password,userid",
            revision_no: 1,
            tags: "tag5,tag6",
            updated_at: "2022-08-02 05:37:55",
            usage: "For Saving API Keys",
            version: "Version 1.0",
        });

    const tabs = [
        { title: "Cash Verification", tabIndex: 0 },
        { title: "Bank Reconciliation", tabIndex: 1 },
        { title: "Trade Trxn Deactivate", tabIndex: 2 },
        
    ]
    const tabSwitch = (index) => {
        //tabSwitch function receive tabIndex to switch between tabs called from Sidebar menu
        settabIndex(index)      //updating the tab index to recent value
        console.log('index called ', index)
    }

    const handleIdApi = (apiId, index) => {
        alert('api id ' + apiId + ' index ' + index)

        axios.get(`http://192.168.0.166/api/get-api-by-id/${apiId}`)
            .then(function (response) {
                console.log('data from api ', response);
                setupdateData(response.data)

            })
            .then(function (error) {
                console.log(error)
            })

        setidApi(apiId);
        tabSwitch(index)
        console.log('id api is called ', apiId)
    }

    return (
        <>

            <div className="grid grid-cols-12 rounded-lg mt-4 -ml-10 shadow-xl broder-2 border-sky-200 bg-gray-200">
                <div className='col-span-12 sm:col-span-2 '>
                    <MailboxSidebar tabs={tabs} fun={tabSwitch} />
                </div>

                {/**component to show New License Application Screen */}
                {tabIndex == 0 && <div className='col-span-12 sm:col-span-10 shadow-lg bg-white overflow-y-scroll' style={{ 'height': '90vh' }}> <CashVerificationList fun={tabSwitch} title="CashVerificationList" /> </div>}

                {/** component to show Renewal Screen */}
                {tabIndex == 1 && <div className='col-span-12 sm:col-span-10 shadow-lg bg-white overflow-y-scroll' style={{ 'height': '90vh' }}><BankReconciliation  title="reconciliation" /></div>}

                {/* component to show Surrender Screenm */}
                {tabIndex == 2 && <div className='col-span-12 sm:col-span-10 shadow-lg bg-white overflow-y-scroll' style={{ 'height': '90vh' }}><TradeTransactionDeactivate title="trxnDeactivation" /></div>}

                {/* component to show Cash Verification Screen */}
                {tabIndex == 3 && <div className='col-span-12 sm:col-span-10 shadow-lg bg-white overflow-y-scroll' style={{ 'height': '90vh' }}><CashVerification  fun={tabSwitch}  title="CashVerification" /></div>}


            </div>
        </>
    )
}

export default AccountRelatedMenus
/**
 * Exported to :
 * 1. Cms.js
 * 
 *  
 */


