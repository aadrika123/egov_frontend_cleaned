//////////////////////////////////////////////////////////////////////////////////////
//    Author - Dipu Singh
//    Version - 1.0
//    Date - 09 July 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - WaterWorkFlow
//    DESCRIPTION - WaterWorkFlow Component
//////////////////////////////////////////////////////////////////////////////////////
import TabSwitch from 'Components/Common/TabSwitch'
import {useState} from 'react'
import WaterWorkFlowAction from './WaterWorkFlowAction'
import WaterWorkflowList from './WaterWorkflowList'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import WaterDetailsWorkflow from './WaterDetailsWorkflow.js';

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

function WorkFlow() {
  const [value, setValue] = useState(0);
  const [listId, setlistId] = useState('')  

  const viewDetails = (id) => {   //viewDetails to go to Details tab and show data of selected holding application
    setlistId(id)   //updating state with application primary key
    handleChange(id, 1)
  }

  const handleChange = (event, newValue) => {   //handChange to switch between tabs
    setValue(newValue);

  };
  
  return (
    // <TabSwitch tabSwitch={tabSwitchList} />
    // <div className="md:p-10">
    //   <WorkflowList />
    // </div>
    <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="List" {...a11yProps(0)} />
            <Tab label="Details" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <WaterWorkflowList fun={viewDetails}/>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <WaterDetailsWorkflow id={listId} />
        </TabPanel>
      </Box>
  )
}

export default WorkFlow
/**
 * Exported to :
 * 1. WaterDetailsTabs.js Component
 * 
 */