//////////////////////////////////////////////////////////////////////////////////////
//    Author - Talib Hussain
//    Version - 1.0
//    Date - 14 july 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - PropertySafDetailsTabs (closed)
//    DESCRIPTION - PropertySafDetailsTabs Component
//////////////////////////////////////////////////////////////////////////////////////
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import StatusTimeline from 'Components/MailboxComponent/StatusTimeline';
import TradeDetailsCard from './TradeDetailsCard';
import TradeDetailsCard2 from './TradeDetailsCard2';
import TradeDocumentView from './TradeDocumentView';
import TradeWorkflowTimeline from './TradeWorkflowTimeline';
import EmptyDetailsIllustration from 'Components/Common/EmptyDetails/EmptyDetailsIllustration';
import { ToastContainer, toast } from 'react-toastify';
import { useQuery } from 'react-query'
import axios from 'axios'
import ProjectApiList from 'Components/ApiList/ProjectApiList';
import ApiHeader from 'Components/ApiList/ApiHeader';
import { HEADER, TRADE } from 'Pages/Trade/tradeComponent/TradeApiListFile';


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
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function TradeDetailsTabs(props) {
    const { api_getSafDetailsById } = ProjectApiList()


    console.log("workflow candidate in safDetailTabs...", props.members)
    console.log("handleChangeValue in Details tab...", props.id)

    // const [applicationData, setApplicationData] = useState({})
    const [value, setValue] = useState(0);
    const [applicationData, setApplicationData] = useState({})


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const notify = (toastData, actionFlag) => {
        toast.dismiss();
        { actionFlag == 'escalated' && toast.success(toastData) }
        { actionFlag == 'de-escalated' && toast.warn(toastData) }
        { actionFlag == 'error' && toast.error(toastData) }
    };


    useEffect(() => {
        fetchDetailsById()


    }, [props.id])

    const fetchDetailsById = () => {
        let token = JSON.parse(window.localStorage.getItem('token'))
        const header = {
            headers:
            {
                Authorization: `Bearer ${token}`,
                Accept: 'application/json',
            }

        }
        axios.get(TRADE.GET_LICENSE_DTL_BY_ID + props.id, HEADER())
            .then(function (response) {
                console.log('==2 details by id response...', response.data)
                if (response.data.status) {
                    setApplicationData(response.data.data)
                }else{
                    console.log("response.data.status",response.data.message)
                }
            })
            .catch(function (error) {
                console.log('==2 details by id error...', error)
            })
    }

    // <EmptyDetailsIllustration title="No Application Selected !" />

    if (props.id == '') {
        return <EmptyDetailsIllustration fun={props.fun} title="No Application Selected !" />
    }





    return (
        <>
            <ToastContainer position="top-right"
                autoClose={2000} />
            <div>

                <div className="flex">
                    {/* StatusTimeline to show the progress level of holding application */}
                    <div><StatusTimeline index="1" level="Back Office" verificationStatus={true} last={false} active={false} backStatus={false} btc={false} /></div>
                    <div><StatusTimeline index="2" level="Dealing Assistant" verificationStatus={true} last={false} active={false} backStatus={false} btc={false} /></div>
                    <div><StatusTimeline index="3" level="Agency TC" verificationStatus={true} last={false} active={false} backStatus={false} btc={false} /></div>
                    <div><StatusTimeline index="4" level="UlB TC" verificationStatus={false} last={false} active={true} backStatus={true} btc={false} /></div>
                    <div><StatusTimeline index="5" level="Section Incharge" verificationStatus={false} last={false} active={false} backStatus={false} btc={true} /></div>
                    <div><StatusTimeline index="6" level="Executive Officer" verificationStatus={false} last={true} active={false} backStatus={false} btc={false} /></div>
                </div>
                {/* DetailTable to show basic details of holding application */}
                {/* <PropertySafDetailsCard applicationData={data?.data} /> */}
                <TradeDetailsCard applicationData={applicationData} />
                <div className=''></div>

                {/* Tab view which contains three tabs, which are Saf Detials, Documents and Workflow */}
                <Box sx={{ width: '100%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            {/* <Tab label="Saf Details" {...a11yProps(0)} /> */}
                            <Tab label="Documents" {...a11yProps(0)} />
                            <Tab label="Workflow" {...a11yProps(1)} />
                        </Tabs>
                    </Box>

                    <TabPanel value={value} index={0}>
                        {/* DocumentMailbox Contains documents uploaded with holding application */}
                        <TradeDocumentView applicationData={applicationData}/>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        {/* WorkFlow contains timeline and action for holding application */}
                        <TradeWorkflowTimeline toast={notify} applicationData={applicationData} members={props.members} />
                    </TabPanel>

                </Box>
            </div>
        </>
    );
}
/**
 * Exported to :
 * 1. PropertySafInbox Component
 * 
 */