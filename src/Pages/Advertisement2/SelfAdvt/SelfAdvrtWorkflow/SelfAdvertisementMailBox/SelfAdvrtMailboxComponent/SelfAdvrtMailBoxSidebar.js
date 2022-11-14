//////////////////////////////////////////////////////////////////////////////////////
//    Author - swati sharma
//    Version - 1.0
//    Date - 26-09-2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - SelfAdvrtMailBoxSidebar
//    DESCRIPTION - SelfAdvrtMailBoxSidebar Component
//////////////////////////////////////////////////////////////////////////////////////


import { useState } from 'react'
// import RawLink from '../Common/Sidebar/RawLink'
import { useQuery } from "react-query";
import axios from 'axios'
import SelfAdvrtMailBoxLink from './SelfAdvrtMailBoxLink';
import SelfAdvrtWorkFlowCandidate from './SelfAdvrtWorkFlowCandidate';

function SelfAdvrtMailBoxSidebar(props) {
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
                <div className="py-4 ml-2 rounded flex flex-row sm:flex-col pl-4 sm:pl-0">

                    <div onClick={() => tabSwitch(0)}><SelfAdvrtMailBoxLink activeStatus={tabIndex == 0 ? true : false} title="Inbox" /></div>
                    <div onClick={() => tabSwitch(1)}><SelfAdvrtMailBoxLink activeStatus={tabIndex == 1 ? true : false} title="Outbox" /></div>
                    <div onClick={() => tabSwitch(2)}><SelfAdvrtMailBoxLink activeStatus={tabIndex == 2 ? true : false} title="Search" /></div>
                    <div onClick={() => tabSwitch(3)}><SelfAdvrtMailBoxLink activeStatus={tabIndex == 3 ? true : false} title="Special" /></div>
                    <div onClick={() => tabSwitch(4)}><SelfAdvrtMailBoxLink activeStatus={tabIndex == 4 ? true : false} title="Approve" /></div>
                    <div onClick={() => tabSwitch(5)}><SelfAdvrtMailBoxLink activeStatus={tabIndex == 5 ? true : false} title="Reject" /></div>




                </div>
                <div className="shadow-xl bg-green-100 pt-4 border-t-4 border-green-500 h-40 sm:h-96 overflow-y-scroll">

                    {/* <div className='overflow-y-scroll h-auto'> */}
                    {!isLoading ? data.data.map((data) => {
                        return (
                            <>
                                <SelfAdvrtWorkFlowCandidate designation={data.designation} name={data.name} activeCandidateStatus={data.activeCandidateStatus} />
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

export default SelfAdvrtMailBoxSidebar