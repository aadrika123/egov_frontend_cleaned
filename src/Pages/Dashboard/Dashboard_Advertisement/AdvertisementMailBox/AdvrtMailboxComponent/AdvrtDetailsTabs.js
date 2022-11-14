//////////////////////////////////////////////////////////////////////////////////////
//    Author - swati sharma
//    Version - 1.0
//    Date - 24-09-2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - AdvrtDetailsTabs
//    DESCRIPTION - AdvrtDetailsTabs Component
//////////////////////////////////////////////////////////////////////////////////////

import { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AdvrtWorkFlow from './AdvrtWorkFlow.js';
import AdvrtDetailsTable from './AdvrtDetailsTable.js';
import AdvrtSafDetialsCard from './AdvrtSafDetialsCard.js';
import AdvrtDocumentMailbox from './AdvrtDocumentMailbox.js';
import AdvrtStatusTimeline from './AdvrtStatusTimeline.js';




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

function AdvrtDetailsTabs(props) {
    const [value, setValue] = useState(0);


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };




    return (
        <>
            <div>
                <div className="flex">
                    {/* AdvrtStatusTimeline to show the progress level of holding application */}
                    <div><AdvrtStatusTimeline index="1" level="Back Office" verificationStatus={true} last={false} /></div>
                    <div><AdvrtStatusTimeline index="2" level="Dealing Assistant" verificationStatus={true} last={false} /></div>
                    <div><AdvrtStatusTimeline index="3" level="Agency TC" verificationStatus={true} last={false} /></div>
                    <div><AdvrtStatusTimeline index="4" level="UlB TC" verificationStatus={false} last={false} /></div>
                    <div><AdvrtStatusTimeline index="5" level="Section Incharge" verificationStatus={false} last={false} /></div>
                    <div><AdvrtStatusTimeline index="6" level="Executive Officer" verificationStatus={false} last={true} /></div>
                </div>
                {/* DetailTable to show basic details of holding application */}
                <AdvrtDetailsTable id={props.id} />
                <div className=''></div>

                {/* Tab view which contains three tabs, which are Saf Detials, Documents and AdvrtWorkFlow */}
                <Box sx={{ width: '100%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label="Saf Details" {...a11yProps(0)} />
                            <Tab label="Documents" {...a11yProps(1)} />
                            <Tab label="AdvrtWorkFlow" {...a11yProps(2)} />
                        </Tabs>
                    </Box>
                    <TabPanel value={value} index={0}>
                        {/* SafDetialsCard containe details about saf */}
                        <AdvrtSafDetialsCard />
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        {/* AdvrtDocumentMailbox Contains documents uploaded with holding application */}
                        <AdvrtDocumentMailbox />
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        {/* AdvrtWorkFlow contains timeline and action for holding application */}
                        <AdvrtWorkFlow />
                    </TabPanel>

                </Box>
            </div>
        </>
    )
}

export default AdvrtDetailsTabs