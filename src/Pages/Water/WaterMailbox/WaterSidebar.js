//////////////////////////////////////////////////////////////////////////////////////
//    Author - Dipu Singh
//    Version - 1.0
//    Date - 09 July 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - WaterSidebar
//    DESCRIPTION - Water Sidebar Component
//////////////////////////////////////////////////////////////////////////////////////
import { useState } from 'react'
// import MailboxLink from './MailboxLink'
import WaterMailboxLink from './WaterMailboxLink'
// import WorkFlowCandidate from './WorkFlowCandidate'
import WaterWorkFlowCandidate from './WaterWorkFlowCandidate'
import { useQuery } from "react-query";
import axios from 'axios'

function Sidebar(props) {
    const [tabIndex, setTabIndex] = useState(0)
    const { isLoading, data, isError, error } = useQuery("first-query", () => {
        return axios.get("http://localhost:3001/levelCandidateList");
    });

    const tabSwitch = (index) => {
        setTabIndex(index)
        props.fun(index)
    }
    return (
        <>

            <aside className="" >
                <div className="py-4 rounded flex flex-row sm:flex-col pl-4 sm:pl-0">

                    <div onClick={() => tabSwitch(0)}><WaterMailboxLink activeStatus={tabIndex == 0 ? true : false} title="Inbox" /></div>
                    <div onClick={() => tabSwitch(1)}><WaterMailboxLink activeStatus={tabIndex == 1 ? true : false} title="Outbox" /></div>
                    <div onClick={() => tabSwitch(2)}><WaterMailboxLink activeStatus={tabIndex == 2 ? true : false} title="Search" /></div>
                    <div onClick={() => tabSwitch(3)}><WaterMailboxLink activeStatus={tabIndex == 3 ? true : false} title="Special" /></div>




                </div>
                <div className="shadow-xl bg-green-100 pt-4 border-t-4 border-green-500 h-40 sm:h-96 overflow-y-scroll">

                    {/* <div className='overflow-y-scroll h-auto'> */}
                    {!isLoading ? data.data.map((data) => {
                        return (
                            <>
                                <WaterWorkFlowCandidate designation={data.designation} name={data.name} activeCandidateStatus={data.activeCandidateStatus} />
                                <hr />
                            </>
                        )
                    }) : ''}

                    {/* </div> */}


                </div>
            </aside>

        </>
    )
}

export default Sidebar
/**
 * Exported to :
 * 1. WaterMailbox.js Component
 * 
 */