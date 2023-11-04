import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import SectionHighlight from './Section/SectionHighlight';
import SectionContent from './Section/SectionContent';
import Button from './Button/Button';
import { ButtonVariant } from '@components/Button/Button'
import Highlight from './Highlight';
import PhaseTwo from './phasetwo';
import PhaseThree from './phasethree';
import PhaseFour from './phase4';



interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
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

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function PhaseTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange}  aria-label="wrapped label tabs example"
  sx={{ color: 'black' }} variant="scrollable"
  scrollButtons
  allowScrollButtonsMobile   >
          <Tab label="Phase 1" wrapped {...a11yProps(0)} sx={{ color: 'black' }} />
          <Tab label="Phase 2"  wrapped {...a11yProps(1)} sx={{ color: 'black' }} />
          <Tab label="Phase 3" wrapped {...a11yProps(3)}  sx={{ color: 'black' }}/>
          <Tab label="Phase 4" wrapped {...a11yProps(4)}  sx={{ color: 'black' }}/>


        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0} >

      <Highlight/>
    

      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>

    <PhaseTwo/>









      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>

 <PhaseThree/>
     




      </CustomTabPanel>


      <CustomTabPanel value={value} index={3}>



    <PhaseFour/>


      </CustomTabPanel>

     







    </Box>
  );
}
