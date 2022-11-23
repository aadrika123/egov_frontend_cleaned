//////////////////////////////////////////////////////////////////////////////////////
//    Author - Talib Hussain
//    Version - 1.0
//    Date - 14 july 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - PropertySafInbox (closed)
//    DESCRIPTION - PropertySafInbox Component
//////////////////////////////////////////////////////////////////////////////////////
import { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { format } from "date-fns";
import ListTable from "Components/Common/ListTable/ListTable";
import LoadingData from "Components/Common/Loading/LoadingData";
import { InboxQuery } from "Components/ApiQueries/InboxApplicationList";
import LoadingAnimation2 from "Components/TestDelete/LoadingAnimation2";
import ErrorPage from "Components/TestDelete/ErrorPage";
import api_safInboxList from "Components/ApiList/api_safInboxList";
import NoData from "Components/TestDelete/NoData";
import ProjectApiList from "Components/ApiList/ProjectApiList";
import { HEADER, TRADE } from "Pages/Trade/tradeComponent/TradeApiListFile";

function TradeInboxList(props) {
  const [tableState, setTableState] = useState(false);
  const [listStatus, setlistStatus] = useState(false);
  const { api_safInboxList } = ProjectApiList();

  const COLUMNS = [
    {
      Header: "#",
      // accessor: 'ward_no'
      Cell: ({ row }) => <div className="pr-2">{row.index + 1}</div>,
    },
    {
      Header: "Application No",
      accessor: "application_no",
    },
    {
      Header: "Apply Date.",
      accessor: "apply_date",
    },
    {
      Header: "Apply From",
      accessor: "apply_from",
    },
    {
      Header: "Firm Name",
      accessor: "firm_name",
    },
    {
      Header: "Mobile No",
      accessor: "mobile_no",
      Cell: ({ cell }) =>
        // <div className={' rounded-full shadow-lg h-7 mx-auto w-7 font-semibold text-center py-1 text-sm px-1  ' + (cell.row.values.id == 'New Assessment' ? 'bg - green - 200 text- green - 900 ' : '') + (cell.row.values.assessment_type == 'Reassessment' ? 'bg - indigo - 200 text - indigo - 900 ' : '') + (cell.row.values.assessment_type == 'Mutation' ? 'bg - red - 200 text - red - 900' : '')}>
        cell.row.values.id,
        // </div>
    },
    // {
    //     Header: 'Apply Date',
    //     accessor: 'apply_date',
    //     Cell: ({ value }) => { return format(new Date(value), 'dd/MM/yyyy') }

    // }
    // ,
    {
      Header: "Action",
      accessor: "id",
      Cell: ({ cell }) => (
        <button
          onClick={() => props.fun(cell.row.values.id)}
          className="bg-sky-200 px-3 py-1 rounded-lg shadow-lg hover:shadow-xl hover:bg-sky-800 
                hover:text-white text-black"
        >
          View {cell.row.values.id}
        </button>
      ),
    },
  ];

  // let token = window.localStorage.getItem('token')
  // const header = {
  //     headers:
  //     {
  //         Authorization: `Bearer ${token}`,
  //         Accept: 'application/json',
  //     }
  // }
  const onSuccess = (data) => {
    console.log("after fetching inbox list ....", data?.data.data.licence);
    //> if table array is not empty then activate table
    {
      data?.data?.data?.licence.length > 0 && setTableState(true);
    }
  };

  const { isLoading, data, isError, error } = useQuery(
    "safinboxList",
    () => {
      return axios.post(TRADE.GET_APPLICATION_LIST, {}, HEADER());
    },
    {
      onSuccess,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    }
  );

  // if(!isLoading){
  //     console.log('inbox custom quey fething data ....',data.data.data_list)
  // }
  return (
    <>
      {/* <h1>testing....</h1> */}
      {isLoading && <LoadingAnimation2 />}
      {isError && <ErrorPage />}
      {/* {data.data?.data[0].id} */}
      {!isLoading && !isError && tableState && (
        <ListTable
          assessmentType={false}
          columns={COLUMNS}
          dataList={data.data?.data.licence}
        />
      )}
      {!isLoading && !tableState && <NoData />}
    </>
  );
}

export default TradeInboxList;
/**
 * Exported to :
 * 1. PropertySafInbox Component
 *
 */
