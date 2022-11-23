//////////////////////////////////////////////////////////////////////////////////////
//>    Author - Anshuman
//>    Version - 1.0
//>    Date - 28 oct 2022
//>    Revision - 1
//>    Project - JUIDCO
//>    Component  - Trade Trade (closed)
//>    DESCRIPTION - Trade Trade Component
//////////////////////////////////////////////////////////////////////////////////////
import { useEffect, useState } from "react";
import OutBox from "Components/MailboxComponent/OutBox";
import Search from "Components/MailboxComponent/Search";
import Special from "Components/MailboxComponent/Special";
import MailboxSidebar from "Components/Common/MailboxSidebar";
import { TbWebhook } from "react-icons/tb";
import { useQuery } from "react-query";
import axios from "axios";
// import PropertyConcessionInbox from '../PropertyConcessionWorkflow/PropertyConcessionInbox'
import TradeListBox from "./TradeListBox";
import api_getWorkflowCandidates from "Components/ApiList/api_getWorkflowCandidates";
import api_headers from "Components/ApiList/api_headers";
import ProjectApiList from "Components/ApiList/ProjectApiList";
import { HEADER, TRADE } from "Pages/Trade/tradeComponent/TradeApiListFile";

function TradeMailbox() {
  const { api_getWorkflowCandidates } = ProjectApiList();
  const [tabIndex, settabIndex] = useState(0); //state to store current tab index

  const tabs = [
    //tab list to pass to common mailboxSidebar component
    { title: "Inbox", tabIndex: 0 },
    { title: "Outbox", tabIndex: 1 },
    { title: "Search", tabIndex: 2 },
    { title: "Special", tabIndex: 3 },
  ];
  const safWorkflowId = 1;

  const [workflowCandidate, setWorkflowCandidate] = useState();

  console.log("workflowcandidate....", workflowCandidate);

  useEffect(() => {
    fetchDetailsById();
  }, []);

  const fetchDetailsById = () => {
    // let token = window.localStorage.getItem('token')
    // const header = {
    //     headers:
    //     {
    //         Authorization: `Bearer ${token}`,
    //         Accept: 'application/json',
    //     }

    // }
    axios
      .post(`${api_getWorkflowCandidates}`, { workflowId: 4 }, HEADER())
      .then(function (response) {
        console.log("worlflow candidate list by workflow id...", response.data);
        setWorkflowCandidate(response.data);
      })
      .catch(function (error) {
        console.log("worlflow candidate list by workflow id error...", error);
      });
  };

  const onSuccess = (data) => {
    console.log("inbox custom quey fething data ....", data);
    //> if table array is not empty then activate table
    // { (data.data.data.data_list.length > 0) && setTableState(true) }
  };

  const { isLoading, data, isError, error } = useQuery(
    "safCandidateList",
    () => {
      // return axios.post(TRADE.GET_APPLICATION_LIST, HEADER);
      axios.get(`${api_getWorkflowCandidates}`, { workflowId: 4 }, HEADER());
    },
    {
      onSuccess,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    }
  );

  // let isLoading=true

  if (!isLoading) {
    console.log("workflow candidate list ", data);
  }
  //> tabSwitch function receive tabIndex to switch between tabs called from Sidebar menu
  const tabSwitch = (index) => {
    //> updating the tab index to recent value
    settabIndex(index);
  };

  return (
    <>
      {/* <div className="grid grid-cols-12 mb-2">
                <div className='bg-sky-100 border-l border-b border-white text-black col-span-12 sm:col-span-2 sm:col-start-11 pl-4 rounded-l shadow-lg font-semibold'><TbWebhook className='inline' /> Saf WorkFlow</div>
            </div> */}
      <div className="grid grid-cols-12 rounded-lg mt-0 -ml-10 shadow-xl broder-2 border-sky-200 bg-gray-200">
        <div className="col-span-12 sm:col-span-2 ">
          {isLoading && <h1>Looading ...</h1>}
          {!isLoading && !isError && (
            <MailboxSidebar
              candidateListStatus={true}
              workflowCandidates={workflowCandidate}
              tabs={tabs}
              fun={tabSwitch}
            />
          )}
          {/* {!isLoading && (!isError && <MailboxSidebar candidateListStatus={true} workflowCandidates={data?.data} tabs={tabs} fun={tabSwitch} />)} */}
          {/* <MailboxSidebar candidateListStatus={true} workflowId={6} tabs={tabs} fun={tabSwitch} /> */}
        </div>{" "}
        {/** MailboxSidebar - common mailbox sidebar component */}
        {tabIndex == 0 && (
          <div
            className="col-span-12 sm:col-span-10 shadow-lg bg-white overflow-y-scroll"
            style={{ height: "90vh" }}
          >
            <TradeListBox
              workflowCandidates={workflowCandidate}
              boxType="inbox"
              boxUrl="http://192.168.0.166/api/property/saf/inbox"
            />
          </div>
        )}
        {tabIndex == 1 && (
          <div
            className="col-span-12 sm:col-span-10 shadow-lg bg-white overflow-y-scroll"
            style={{ height: "90vh" }}
          >
            <TradeListBox
              boxType="outbox"
              boxUrl="http://192.168.0.166/api/saf-out"
            />
          </div>
        )}
        {tabIndex == 2 && (
          <div
            className="col-span-12 sm:col-span-10 shadow-lg bg-white overflow-y-scroll"
            style={{ height: "90vh" }}
          >
            <Search />
          </div>
        )}
        {tabIndex == 3 && (
          <div
            className="col-span-12 sm:col-span-10 shadow-lg bg-white overflow-y-scroll"
            style={{ height: "90vh" }}
          >
            <TradeListBox
              workflowCandidates={workflowCandidate}
              boxType="specialbox"
              boxUrl="http://192.168.0.166/api/property/saf/escalate/inbox"
            />
          </div>
        )}
      </div>
    </>
  );
}

export default TradeMailbox;
/**
 * Exported to :
 * 1. App.js
 *
 */
