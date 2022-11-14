//////////////////////////////////////////////////////////////////////////////////////
//    Author - Dipu Singh
//    Version - 1.0
//    Date - 09 July 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - WaterDetailsTabs
//    DESCRIPTION - WaterDetailsTabs Component
//////////////////////////////////////////////////////////////////////////////////////
import { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import WaterWorkFlow from '../WaterWorkflowMaster/WaterWorkFlow';
import WaterDetailsTable from './WaterDetailsTable';
import WaterDocumentMailbox from './WaterDocumentMailbox';
import WaterStatusTimeline from './WaterStatusTimeline';
import WaterSafDetialsCard from './WaterSafDetialsCard';


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

export default function DetailsTabs(props) {
    const [value, setValue] = useState(0);


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };




    return (
        <div>
            <div className="flex">
                {/* WaterStatusTimeline to show the progress level of holding application */}
                <div><WaterStatusTimeline index="1" level="Back Office" verificationStatus={true} last={false} /></div>
                <div><WaterStatusTimeline index="2" level="Dealing Assistant" verificationStatus={true} last={false} /></div>
                <div><WaterStatusTimeline index="3" level="Junior Engineer" verificationStatus={true} last={false} /></div>
                <div><WaterStatusTimeline index="4" level="Section Head" verificationStatus={false} last={false} /></div>
                <div><WaterStatusTimeline index="5" level="Assistant Engineer" verificationStatus={false} last={false} /></div>
                <div><WaterStatusTimeline index="6" level="Executive Officer" verificationStatus={false} last={true} /></div>
            </div>
            {/* DetailTable to show basic details of holding application */}
            <WaterDetailsTable id={props.id} />
            <div className=''></div>

            {/* Tab view which contains three tabs, which are Saf Detials, Documents and Workflow */}
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Saf Details" {...a11yProps(0)} />
                        <Tab label="Documents" {...a11yProps(1)} />
                        <Tab label="Workflow" {...a11yProps(2)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    {/* SafDetialsCard containe details about saf */}
                    <WaterSafDetialsCard />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    {/* DocumentMailbox Contains documents uploaded with holding application */}
                    <WaterDocumentMailbox />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    {/* WorkFlow contains timeline and action for holding application */}
                    <WaterWorkFlow />
                </TabPanel>

            </Box>
        </div>
    );
}
/**
 * Exported to :
 * 1. WaterOutBox Component
 * 
 */