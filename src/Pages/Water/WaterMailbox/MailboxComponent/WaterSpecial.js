//////////////////////////////////////////////////////////////////////////////////////
//    Author - Dipu Singh
//    Version - 1.0
//    Date - 09 July 2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - WaterSpecial
//    DESCRIPTION - WaterSpecial Side Top Menu
//////////////////////////////////////////////////////////////////////////////////////
import { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import WaterDetailsTabs from './WaterDetailsTabs'
import WaterListItems from './WaterListItems';

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

export default function Special() {
  const [value, setValue] = useState(0);
  const [listId, setlistId] = useState('')
  const handleChange = (event, newValue) => {
    setValue(newValue);

  };

  const viewDetails = (id) => {
    setlistId(id)
    handleChange(id, 1)
  }



  return (
    <>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="List" {...a11yProps(0)} />
            <Tab label="Details" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <WaterListItems fun={viewDetails} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <WaterDetailsTabs id={listId} />
        </TabPanel>

      </Box>
    </>
  );
}
/**
 * Exported to :
 * 1. WaterMailBox.js
 * 
 */