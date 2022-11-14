//////////////////////////////////////////////////////////////////////////////////////
//    Author - swati sharma
//    Version - 1.0
//    Date - 26-09-2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - VehicleDetailsTabs
//    DESCRIPTION - VehicleDetailsTabs Component
//////////////////////////////////////////////////////////////////////////////////////

import { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import VehicleSafDetialsCard from './VehicleSafDetialsCard.js';
import VehicleDocumentMailbox from './VehicleDocumentMailbox.js';
import VehicleWorkFlow from './VehicleWorkFlow.js';
import VehicleStatusTimeline from './VehicleStatusTimeline.js';
import VehicleDetailsTable from './VehicleDetailsTable.js';




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

function VehicleDetailsTabs(props) {
    const [value, setValue] = useState(0);


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };




    return (
        <>
            <div>
                <div className="flex">
                    {/* SelfAdvrtStatusTimeline to show the progress level of holding application */}
                    <div><VehicleStatusTimeline index="1" level="Back Office" verificationStatus={true} last={false} /></div>
                    <div><VehicleStatusTimeline index="2" level="Dealing Assistant" verificationStatus={true} last={false} /></div>
                    <div><VehicleStatusTimeline index="3" level="Agency TC" verificationStatus={true} last={false} /></div>
                    <div><VehicleStatusTimeline index="4" level="UlB TC" verificationStatus={false} last={false} /></div>
                    <div><VehicleStatusTimeline index="5" level="Section Incharge" verificationStatus={false} last={false} /></div>
                    <div><VehicleStatusTimeline index="6" level="Executive Officer" verificationStatus={false} last={true} /></div>
                </div>
                {/* DetailTable to show basic details of holding application */}
                <VehicleDetailsTable id={props.id} />
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
                        <VehicleSafDetialsCard />
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        {/* SelfAdvrtDocumentMailbox Contains documents uploaded with holding application */}
                        <VehicleDocumentMailbox/>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        {/* AdvrtWorkFlow contains timeline and action for holding application */}
                        <VehicleWorkFlow />
                    </TabPanel>

                </Box>
            </div>
        </>
    )
}

export default VehicleDetailsTabs