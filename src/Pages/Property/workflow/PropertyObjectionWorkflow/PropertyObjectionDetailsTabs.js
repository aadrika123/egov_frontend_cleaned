//////////////////////////////////////////////////////////////////////////////////////
//    Author - Talib Hussain
//    Version - 1.0
//    Date - 14 july 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - PropertyObjectionDetailsTabs (closed)
//    DESCRIPTION - PropertyObjectionDetailsTabs Component
//////////////////////////////////////////////////////////////////////////////////////
import { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import StatusTimeline from 'Components/MailboxComponent/StatusTimeline';
import PropertyHarvestingDetailsCard from './PropertyObjectionDetailsCard';
import PropertyObjectionDetailsCard2 from './PropertyObjectionDetailsCard2';
import PropertyObjectionDocumentView from './PropertyObjectionDocumentView';
import PropertyObjectionWorkflowTimeLine from './PropertyObjectionWorkflowTimeline';
import EmptyDetailsIllustration from 'Components/Common/EmptyDetails/EmptyDetailsIllustration';
import PropertyObjectionComparision from './PropertyObjectionComparision';
import PropertyObjectionVerification from './PropertyObjectionVerification';
import PropertySafDocumentVerify from 'Pages/Property/PropertyEntryForms/DaVerificationScreen.js/PropertySafDocumentVerify';


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

export default function PropertyObjectionDetailsTabs(props) {
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

            <div className="flex w-full overflow-hidden">
                {/* StatusTimeline to show the progress level of holding application */}
                <div><StatusTimeline index="1" level="Back Office" verificationStatus={true} last={false} active={false} /></div>
                <div><StatusTimeline index="2" level="RMC IT Head" verificationStatus={false} last={false} active={false} /></div>
                <div><StatusTimeline index="3" level="Dealing Assistant" verificationStatus={false} last={false} active={false} /></div>
                <div><StatusTimeline index="4" level="Agency TC" verificationStatus={false} last={false} active={false} /></div>
                <div><StatusTimeline index="5" level="ULB TC" verificationStatus={false} last={false} active={false} /></div>
                <div><StatusTimeline index="6" level="Section Incharge" verificationStatus={false} last={false} active={false} /></div>
                <div><StatusTimeline index="7" level="Executive Officer" verificationStatus={false} last={true} active={false} /></div>

            </div>
            {/* DetailTable to show basic details of holding application */}
            <PropertyHarvestingDetailsCard applicationData={applicationData} />
            <div className=''></div>

            {/* Tab view which contains three tabs, which are Saf Detials, Documents and Workflow */}
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Objection Comparision" {...a11yProps(0)} />
                        <Tab label="Objection Verification" {...a11yProps(1)} />
                        <Tab label="Da Doc Verify" {...a11yProps(2)} />
                        <Tab label="Workflow" {...a11yProps(3)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    {/* SafDetialsCard containe details about saf */}
                    <PropertyObjectionComparision />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    {/* DocumentMailbox Contains documents uploaded with holding application */}
                    <PropertyObjectionVerification />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    {/* WorkFlow contains timeline and action for holding application */}
                    <PropertySafDocumentVerify />
                </TabPanel>
                <TabPanel value={value} index={3}>
                    {/* WorkFlow contains timeline and action for holding application */}
                    <PropertyObjectionWorkflowTimeLine />
                </TabPanel>

            </Box>
        </div>
    );
}
/**
 * Exported to :
 * 1. PropertyObjectionInbox Component
 * 
 */