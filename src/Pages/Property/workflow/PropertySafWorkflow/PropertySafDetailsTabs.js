//////////////////////////////////////////////////////////////////////////////////////
//    Author - Talib Hussain
//    Version - 1.0
//    Date - 14 july 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - PropertySafDetailsTabs (closed)
//    DESCRIPTION - PropertySafDetailsTabs Component
//////////////////////////////////////////////////////////////////////////////////////
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import StatusTimeline from "Components/MailboxComponent/StatusTimeline";
import PropertySafDetailsCard from "./PropertySafDetailsCard";
import PropertySafDetailsCard2 from "./PropertySafDetailsCard2";
import PropertySafDocumentView from "./PropertySafDocumentView";
import PropertySafWorkflowTimeline from "./PropertySafWorkflowTimeline";
import EmptyDetailsIllustration from "Components/Common/EmptyDetails/EmptyDetailsIllustration";
import { ToastContainer, toast } from "react-toastify";
import { useQuery } from "react-query";
import axios from "axios";
import ProjectApiList from "Components/ApiList/ProjectApiList";
import ApiHeader from "Components/ApiList/ApiHeader";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function PropertySafDetailsTabs(props) {
  const { api_getSafDetailsById } = ProjectApiList();
  const [showTabs, setshowTabs] = useState(true);

  console.log("workflow candidate in safDetailTabs...", props.members);

  console.log("-----------------outbox...", props.boxTypeFun);

  // const [applicationData, setApplicationData] = useState({})
  const [value, setValue] = useState(0);
  const [applicationData, setApplicationData] = useState({});

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const notify = (toastData, actionFlag) => {
    toast.dismiss();
    {
      actionFlag == "escalated" && toast.success(toastData);
    }
    {
      actionFlag == "de-escalated" && toast.warn(toastData);
    }
    {
      actionFlag == "error" && toast.error(toastData);
    }
  };

  useEffect(() => {
    fetchDetailsById();
  }, [props.id]);

  const fetchDetailsById = () => {
    let token = window.localStorage.getItem("token");
    const header = {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
    };
    axios
      .post(`${api_getSafDetailsById}`, { id: props.id }, header)
      .then(function (response) {
        console.log("==2 details by id response...", response.data);
        setApplicationData(response.data);
      })
      .catch(function (error) {
        console.log("==2 details by id error...", error);
      });
  };

  // <EmptyDetailsIllustration title="No Application Selected !" />

  if (props.id == "") {
    return (
      <EmptyDetailsIllustration
        fun={props.fun}
        title="No Application Selected !"
      />
    );
  }

  return (
    <>
      <ToastContainer position="top-right" autoClose={2000} />
      <div>
        <div className="flex">
          {/* StatusTimeline to show the progress level of holding application */}
          <div>
            <StatusTimeline
              index="1"
              level="Back Office"
              verificationStatus={true}
              last={false}
              active={false}
              backStatus={false}
              btc={false}
            />
          </div>
          <div>
            <StatusTimeline
              index="2"
              level="Dealing Assistant"
              verificationStatus={true}
              last={false}
              active={false}
              backStatus={false}
              btc={false}
            />
          </div>
          <div>
            <StatusTimeline
              index="3"
              level="Agency TC"
              verificationStatus={true}
              last={false}
              active={false}
              backStatus={false}
              btc={false}
            />
          </div>
          <div>
            <StatusTimeline
              index="4"
              level="UlB TC"
              verificationStatus={false}
              last={false}
              active={true}
              backStatus={true}
              btc={false}
            />
          </div>
          <div>
            <StatusTimeline
              index="5"
              level="Section Incharge"
              verificationStatus={false}
              last={false}
              active={false}
              backStatus={false}
              btc={true}
            />
          </div>
          <div>
            <StatusTimeline
              index="6"
              level="Executive Officer"
              verificationStatus={false}
              last={true}
              active={false}
              backStatus={false}
              btc={false}
            />
          </div>
        </div>
        {/* DetailTable to show basic details of holding application */}
        {/* <PropertySafDetailsCard applicationData={data?.data} /> */}
        <PropertySafDetailsCard applicationData={applicationData} />
        <div className=""></div>

        {/* Tab view which contains three tabs, which are Saf Detials, Documents and Workflow */}

        {props.boxTypeFun != true && showTabs ? (
          <div className=" ">
            <Box sx={{ width: "100%" }}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                >
                  {/* <Tab label="Saf Details" {...a11yProps(0)} /> */}
                  <Tab label="Documents" {...a11yProps(0)} />
                  <Tab label="Workflow" {...a11yProps(1)} />
                </Tabs>
              </Box>

              <TabPanel value={value} index={0}>
                {/* DocumentMailbox Contains documents uploaded with holding application */}
                <PropertySafDocumentView />
              </TabPanel>
              <TabPanel value={value} index={1}>
                {/* WorkFlow contains timeline and action for holding application */}
                <PropertySafWorkflowTimeline
                  toast={notify}
                  applicationData={applicationData}
                  members={props.members}
                  showTabFun={setshowTabs}
                />
              </TabPanel>
            </Box>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
/**
 * Exported to :
 * 1. PropertySafInbox Component
 *
 */
