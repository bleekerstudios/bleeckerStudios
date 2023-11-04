import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import SectionHighlight from './Section/SectionHighlight';
import SectionContent from './Section/SectionContent';
import Button from './Button/Button';
import { ButtonVariant } from '@components/Button/Button'


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

export default function BasicTabs() {
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
          <Tab label="Deploy Tools & Streamline Workflows" wrapped {...a11yProps(0)} sx={{ color: 'black' }} />
          <Tab label="Expand Your Digital Footprint"  wrapped {...a11yProps(1)} sx={{ color: 'black' }} />
          <Tab label="Software Development" wrapped {...a11yProps(3)}  sx={{ color: 'black' }}/>
          <Tab label="Business Development" wrapped {...a11yProps(4)}  sx={{ color: 'black' }}/>
          <Tab label="Professional Services & Tech Support" wrapped {...a11yProps(5)}  sx={{ color: 'black' }}/>


        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0} >

      <SectionHighlight 
                icon= 'lucide:settings'
                title="Deploy Tools & Streamline Your Workflows"
                content="Reduce employee overhead, manual processes, and workplace redundancies with low-cost automated solutions. Or, deploy tools to help your employees work faster, smarter, and happier."
                image="/images/redprogress.svg"
                imageAlt="Lorem ipsum dolor sit"
                isReversed={true}
            />





      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>



      <SectionContent 
                title = "Expand Your Digital Footprint"
                icon= 'lucide:clapperboard'

                alignment = "center"
                hasBlockPadding = {true}
            >
                <p>Expand your presence with our innovative marketing and advertising strategies. We specialize in content strategy, social media automation, film, search engine optimization, and much more. </p>

                <div className="button-container  md:flex flex-wrap gap-4 ml-auto justify-center">

                <Button variant={ButtonVariant.primary} text="Get Started" link="/getStarted" />

                


                

               {/*  <a href="https://bleecker-studios-docs.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <button className="bg-primary-500 flex font-medium w-full md:w-auto justify-center gap-3 items-center px-8  text-white py-2 rounded-full hover:bg-primary-300  duration-30">Details</button>
    </a>  */}
                </div>
            </SectionContent>








      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>

 
      <SectionHighlight 
                title="Software Development"
                icon="lucide:code-2"
                content="Contruct a new iOS, Android, or Web based tools to boost operational efficency and save time. Have an idea for an app? We can build that too."
                image="/images/finaldarkdonut.svg"
                imageAlt="Lorem ipsum dolor sit"
            />





      </CustomTabPanel>


      <CustomTabPanel value={value} index={3}>



      <SectionContent 
                title = "Business Development"
                icon="lucide:bar-chart-big"

                alignment = "center"
                hasBlockPadding = {true}
            >
                <p>We&apos;re here to guide your growth. Our expertise has driven success across various domains, including procurement, conducting comprehensive tech stack audits, interactive workshops, detailed product roadmapping sessions, and designing robust software architecture. Understanding that each business has unique needs, we&apos;re eager to delve into yours and identify how our solutions can propel your expansion.</p>
                
                <div className="button-container  md:flex flex-wrap gap-4 ml-auto justify-center">

                <Button variant={ButtonVariant.primary} text="Schedule a Meeting" link="/getStarted" />


                {/* <a href="https://bleecker-studios-docs.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <button className="bg-primary-500 flex font-medium w-full md:w-auto justify-center gap-3 items-center px-8  text-white py-2 rounded-full hover:bg-primary-300  duration-30">Overview</button>
</a> */}
                </div>

            </SectionContent>


      </CustomTabPanel>

      <CustomTabPanel value={value} index={4}>

      <SectionHighlight 
                title="Professional Services & Technical Support"
                icon="lucide:help-circle"

                content="We're here for the tactical work. We build custom APIs to seamlessly integrate various applications across your technology ecosystem, or offer responsive ad-hoc hardware and software support."
                image="/images/purplewave2.svg"
                imageAlt="Lorem ipsum dolor sit"
                isReversed={true}
            />
</CustomTabPanel>



<CustomTabPanel value={value} index={5}>


      </CustomTabPanel>



    </Box>
  );
}
