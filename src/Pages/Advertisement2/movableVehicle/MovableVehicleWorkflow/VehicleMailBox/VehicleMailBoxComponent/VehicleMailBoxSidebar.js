//////////////////////////////////////////////////////////////////////////////////////
//    Author - swati sharma
//    Version - 1.0
//    Date - 26-09-2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - VehicleMailBoxSidebar
//    DESCRIPTION - VehicleMailBoxSidebar Component
//////////////////////////////////////////////////////////////////////////////////////


import { useState } from 'react'
// import RawLink from '../Common/Sidebar/RawLink'
import { useQuery } from "react-query";
import axios from 'axios'
import VehicleMailBoxLink from './VehicleMailBoxLink';
import VehicleWorkFlowCandidate from './VehicleWorkFlowCandidate';

function VehicleMailBoxSidebar(props) {
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

                    <div onClick={() => tabSwitch(0)}><VehicleMailBoxLink activeStatus={tabIndex == 0 ? true : false} title="Inbox" /></div>
                    <div onClick={() => tabSwitch(1)}><VehicleMailBoxLink activeStatus={tabIndex == 1 ? true : false} title="Outbox" /></div>
                    <div onClick={() => tabSwitch(2)}><VehicleMailBoxLink activeStatus={tabIndex == 2 ? true : false} title="Search" /></div>
                    <div onClick={() => tabSwitch(3)}><VehicleMailBoxLink activeStatus={tabIndex == 3 ? true : false} title="Special" /></div>




                </div>
                <div className="shadow-xl bg-green-100 pt-4 border-t-4 border-green-500 h-40 sm:h-96 overflow-y-scroll">

                    {/* <div className='overflow-y-scroll h-auto'> */}
                    {!isLoading ? data.data.map((data) => {
                        return (
                            <>
                                <VehicleWorkFlowCandidate designation={data.designation} name={data.name} activeCandidateStatus={data.activeCandidateStatus} />
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

export default VehicleMailBoxSidebar