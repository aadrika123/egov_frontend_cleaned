//////////////////////////////////////////////////////////////////////////////////////
//    Author - Talib Hussain
//    Version - 1.0
//    Date - 14 july 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - PropertySafWorkflowTimeline (closed)
//    DESCRIPTION - PropertySafWorkflowTimeline Component
//////////////////////////////////////////////////////////////////////////////////////
import CheckBoxInput from "Components/Shared/CheckBoxInput";
import RippleAnimation from "Components/Shared/RippleAnimation";
import TextArea from "Components/Shared/TextArea";
import { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import PropertySafTimeline from "./PropertySafTimeline";
import { EscalateToggleQuery } from "Components/ApiQueries/EscalateToggleQuery";
import ProjectApiList from "Components/ApiList/ProjectApiList";
import { useEffect } from "react";

function PropertySafWorkflowTimeline(props) {
  const {
    api_postEscalateStatus,
    api_postComment,
    api_postApplicationToLevel,
    api_fetchRoleDetail,
    api_approveRejectForm,
    api_backToCitizen,
  } = ProjectApiList();

  const [escalateStatus, setescalateStatus] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [roleDetails, setRoleDetails] = useState("");

  console.log("roleDetails", roleDetails);

  let token = window.localStorage.getItem("token");
  const header = {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
    },
  };

  //{////********recording comment here*******//////}
  const commentFun = (commentText) => {
    setCommentText(commentText);
    console.log("comment...", commentText);
  };

  // {////********sending independent comment*******//////}
  const sendIndependentComment = () => {
    console.log("comment", commentText);
    let requestBody = {
      safId: props?.applicationData?.data?.id,
      comment: commentText,
    };
    axios
      .post(`${api_postComment}`, requestBody, header)
      .then(function (response) {
        alert("comment forwarded");
      })
      .catch(function (error) {
        props.toast("Oops! Something went wrong", "error");
      });
  };

  //{////********sending application to level*******//////}
  const sendApplicationToLevel = (e) => {
    console.log("receiverRoleId ", e.target.value);
    console.log("senderRoleId", props?.applicationData?.data?.current_role);
    console.log("safId", props?.applicationData?.data?.id);

    let requestBody = {
      safId: props?.applicationData?.data?.id,
      // safId: 343,
      senderRoleId: props?.applicationData?.data?.current_role,
      receiverRoleId: e.target.value,
    };

    axios
      .post(`${api_postApplicationToLevel}`, requestBody, header)
      .then(function (response) {
        console.log("application forwarded", response);
        props.showTabFun(false); //hiding tabs
        {
          e.target.id == "btn_forward" &&
            props.toast("Application is forwarded successfully", "escalated");
        }
        {
          e.target.id == "btn_back" &&
            props.toast(
              "Application send backward successfully",
              "de-escalated"
            );
        }
      })
      .catch(function (error) {
        props.toast("Oops! Something went wrong", "error", error);
      });
  };

  //{////********toggle escalate function*******//////}
  const escalateAction = (status) => {
    let escalateStatus;
    //setting escalate status via checkbox
    {
      status && (escalateStatus = 1);
    }
    {
      !status && (escalateStatus = 0);
    }

    //setting request body
    let requestBody = {
      escalateStatus: escalateStatus,
      safId: props?.applicationData?.data?.id,
    };

    console.log("escalate body....", requestBody);
    console.log(
      "---------------------------------escalate body....",
      props?.applicationData?.data?.id
    );
    // return
    axios
      .post(`${api_postEscalateStatus}`, requestBody, header)
      .then(function (response) {
        {
          escalateStatus == 1 &&
            props.toast("Application Escalated Successfully!", "escalated");
        }
        {
          escalateStatus == 0 &&
            props.toast(
              "Application De-Escalated Successfully!",
              "de-escalated"
            );
        }
      })
      .catch(function (error) {
        props.toast("Oops! Something went wrong", "error");
      });
  };
  const swithEscalateStatus = (status) => {
    setescalateStatus(status); //setting the escalateStatus to show escalate view
    escalateAction(status);
  };

  //{////********sending back to citizen*******//////}
  const sendBackToCitizen = (e) => {
    console.log("safId", props?.applicationData?.data?.id);

    let requestBody = {
      safId: props?.applicationData?.data?.id,
    };

    axios
      .post(`${api_backToCitizen}`, requestBody, header)
      .then(function (response) {
        console.log("application forwarded ", response);
        props.showTabFun(false); //hiding tabs
        {
          e.target.id == "btn_backToCitizen" &&
            props.toast(
              "Application is forwarded to BTC successfully",
              "escalated"
            );
        }
      })
      .catch(function (error) {
        props.toast("Oops! Something went wrong", "error", error);
      });
  };

  //{////********Role Detail*******//////}
  const fetchRoleDetail = () => {
    axios
      .post(
        api_fetchRoleDetail,
        {
          workflowId: props?.applicationData?.data?.workflow_id,
          wfRoleId: props?.applicationData?.data?.current_role,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        }
      )
      .then(function (response) {
        console.log("roles ", response.data);
        setRoleDetails(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchRoleDetail();
  }, []);

  //{////********Application Approve & Reject*******//////}
  const approveRejectApplication = (e) => {
    alert("clicked");
    console.log("safId", props?.applicationData?.data?.id);
    console.log("Status for Approve Reject", e.target.value);

    let requestBody = {
      safId: props?.applicationData?.data?.id,
      status: e.target.value,
    };

    axios
      .post(`${api_approveRejectForm}`, requestBody, header)
      .then(function (response) {
        console.log("application status for approve a reject", response);
        props.showTabFun(false); //hiding tabs
        {
          e.target.value == "1" &&
            props.toast("Application is Approved ", "escalated");
        }
        {
          e.target.value == "0" &&
            props.toast("Application is Rejected", "de-escalated");
        }
      })
      .catch(function (error) {
        props.toast("Oops! Something went wrong", "error", error);
      });
  };
  console.log("data at timeline .....", props?.applicationData?.data?.id);
  console.log(
    "current role id of user .....",
    props?.applicationData?.data?.current_role
  );
  console.log(
    "workFlow Id on workflowtimelinfe .....",
    props?.applicationData?.data?.workflow_id
  );

  return (
    <>
      <div
        className={` grid grid-cols-12 shadow-lg border-2 border-gray-200 relative overflow-hidden h-auto`}
      >
        <div className={"bg-gray-200 col-span-12 md:col-span-3 h-auto"}>
          <h1
            className={
              (escalateStatus ? "bg-sky-200" : "bg-sky-200") +
              "  text-black font-semibold text-center py-2 mb-8"
            }
          >
            Members {escalateStatus ? <RippleAnimation /> : ""}
          </h1>
          {/**RippleAnimation to  highlight escalated application*/}
          <div className="px-2 hidden">
            <select className="shadow-lg h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-pointer">
              {props?.applicationData?.data?.time_line?.length
                ? props?.applicationData?.data?.time_line.map((data) => (
                    <option value={data.id}>{data.designation}</option>
                  ))
                : ""}
            </select>
          </div>
          <div className="px-2 mt-4 h-auto">
            <h1 className="text-xs">Comments</h1>
            <div className="h-28">
              <TextArea
                commentFun={commentFun}
                bgColor="bg-gray-100"
                value={commentText}
              />
            </div>
            <div className="flex mt-2">
              <div className="flex-1">
                <button className="bg-green-300 text-black rounded-sm px-1 py-0 hover:shadow-lg">
                  <a
                    className=""
                    style={{ fontSize: "10px" }}
                    target="_blank"
                    href="https://www.google.com/inputtools/try/"
                  >
                    Type Hindi &#8594;
                  </a>
                </button>
              </div>
              <div className="flex-1">
                <button
                  onClick={sendIndependentComment}
                  style={{ fontSize: "10px" }}
                  className="bg-green-500 text-white rounded-sm px-2 hover:shadow-lg py-1"
                >
                  Send Comment
                </button>
              </div>
            </div>
            <div>
              <CheckBoxInput
                is_escalate={props?.applicationData?.is_escalate}
                fun={swithEscalateStatus}
              />
            </div>
            <div className="flex">
              <div className="flex-1 ">
                <button
                  type="button"
                  id="btn_back"
                  value={roleDetails.backward_role_id}
                  className="w-full bg-sky-500 border-2  shadow-lg text-white text-sm font-semibold rounded-lg  focus:outline-none focus:shadow-outline  hover:shadow-xs p-3 py-2 hover:bg-sky-600 hover:text-white my-4 text-center"
                  onClick={sendApplicationToLevel}
                >
                  back
                </button>
              </div>
              {props?.applicationData?.data?.current_role != 10 && (
                <div className="flex-1 ">
                  <button
                    type="button"
                    id="btn_forward"
                    value={roleDetails.forward_role_id}
                    className="w-full bg-sky-500 border-2  shadow-lg text-white text-sm font-semibold rounded-lg  focus:outline-none focus:shadow-outline  hover:shadow-xs p-3 py-2 hover:bg-sky-600 hover:text-white my-4 text-center"
                    onClick={sendApplicationToLevel}
                  >
                    forward
                  </button>
                </div>
              )}
            </div>
            {props?.applicationData?.data?.current_role != 5 &&
              props?.applicationData?.data?.current_role != 11 && (
                <div className="flex-1 ">
                  <button
                    type="button"
                    id="btn_backToCitizen"
                    value=""
                    className="w-full bg-sky-500 border-2  shadow-lg text-white text-sm font-semibold rounded-lg  focus:outline-none focus:shadow-outline  hover:shadow-xs p-3 py-2 hover:bg-sky-600 hover:text-white my-4 text-center"
                    onClick={sendBackToCitizen}
                  >
                    back to citizen
                  </button>
                </div>
              )}

            {props?.applicationData?.data?.current_role == 10 && (
              <div className={`flex`}>
                <div className="flex-1 ">
                  <button
                    type="button"
                    id="btn_approve"
                    value={1}
                    className="block w-full bg-green-500 border-2  shadow-lg text-white text-sm font-semibold rounded-lg  focus:outline-none focus:shadow-outline  hover:shadow-xs p-3 py-2 hover:bg-green-600 hover:text-white my-4"
                    onClick={approveRejectApplication}
                  >
                    Approved
                  </button>
                </div>
                <div className="flex-1 ">
                  <button
                    type="button"
                    id="btn_reject"
                    value={0}
                    className="block w-full bg-red-500 border-2  shadow-lg text-white text-sm font-semibold rounded-lg  focus:outline-none focus:shadow-outline  hover:shadow-xs p-3 py-2 hover:bg-red-600 hover:text-white my-4"
                    onClick={approveRejectApplication}
                  >
                    Reject
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="col-span-12 md:col-span-9 bg-white oveflow-y-scroll">
          {/* <TimeLine /> */}
          <h1 className="text-center bg-gray-200 h-10 grid items-center font-semibold">
            Timeline
          </h1>

          {props?.applicationData?.data?.time_line?.length &&
            props?.applicationData?.data?.time_line.map((data, index) => (
              <PropertySafTimeline
                index={index + 1}
                comment={data.message}
                role={data.role_name}
                track_date={data.track_date}
              />
            ))}
        </div>
      </div>
    </>
  );
}

export default PropertySafWorkflowTimeline;
/**
 * Exported to :
 * 1.PropertySafDetailsTabs Component
 *
 */
