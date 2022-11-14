//////////////////////////////////////////////////////////////////////////////////////
//    Author - Talib Hussain
//    Version - 1.0
//    Date - 14 july 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - PropertySafDetailsTabs (closed)
//    DESCRIPTION - PropertySafDetailsTabs Component
//////////////////////////////////////////////////////////////////////////////////////
import { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import StatusTimeline from 'Components/MailboxComponent/StatusTimeline';
import DocumentMailbox from 'Components/MailboxComponent/DocumentMailbox';
import WorkFlow from 'Components/MailboxComponent/WorkFlow';
import PropertyConcessionDetailsCard from './PropertyConcessionDetailsCard';
import PropertyConcessionDetailsCard2 from './PropertyConcessionDetailsCard2';
import PropertyConcessionDocumentView from './PropertyConcessionDocumentView';
import PropertyConcessionWorkflowTimeline from './PropertyConcessionWorkflowTimeline';
import EmptyDetailsIllustration from 'Components/Common/EmptyDetails/EmptyDetailsIllustration';


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

export default function PropertyConcessionDetailsTabs(props) {
    const [value, setValue] = useState(0);


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [applicationData, setApplicationData] = useState(
        {
            "id": 2,
            "saf_no": "0880155833",
            "owner_name": "Maddalena",
            "mobile": "2494499119",
            "property_type": "INDEPENDENT",
            "assessment_type": "Mutation",
            "ward_no": 2,
            "received_at": "5/27/2022"
        }
    )

    if (props.id == '') {
        return (
            <>
                <EmptyDetailsIllustration fun={props.fun} title="No Application Selected !" />
            </>
        )
    }



    return (
        <div>

            <div className="flex">
                {/* StatusTimeline to show the progress level of holding application */}
                <div><StatusTimeline index="1" level="Document Upload" verificationStatus={true} last={false} active={false} /></div>
                <div><StatusTimeline index="2" level="Dealing Assistant Verification" verificationStatus={false} last={true} active={false} /></div>

            </div>
            {/* DetailTable to show basic details of holding application */}
            <PropertyConcessionDetailsCard applicationData={applicationData} />
            <div className=''></div>

            {/* Tab view which contains three tabs, which are Saf Detials, Documents and Workflow */}
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Concession Details" {...a11yProps(0)} />
                        <Tab label="Concession Documents" {...a11yProps(1)} />
                        <Tab label="Workflow" {...a11yProps(2)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    {/* SafDetialsCard containe details about saf */}
                    <PropertyConcessionDetailsCard2 />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    {/* DocumentMailbox Contains documents uploaded with holding application */}
                    <PropertyConcessionDocumentView />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    {/* WorkFlow contains timeline and action for holding application */}
                    <PropertyConcessionWorkflowTimeline />
                </TabPanel>

            </Box>
        </div>
    );
}
/**
 * Exported to :
 * 1. PropertyConcessionInbox Component
 * 
 */