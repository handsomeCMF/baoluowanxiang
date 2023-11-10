import * as React from 'react';
import './App.less';
import leiShen from './assets/image/2.jpg';
import XiaoCaoShen from './assets/image/1.jpg';
import { Tabs, Box, Tab, Typography } from '@mui/material';
import 'core-js';

const mhyGameList : Array<{ label: string }> = [
  { label: '原神' },
  { label: '崩坏·星穹铁道' },
  { label: '崩坏3' }, 
  { label: '绝区零' }
];

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

const App: React.FC = () => {
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleChangeTab = (event: React.SyntheticEvent, newValue: number) => {
    console.log(event, newValue);
    setSelectedTab(newValue);
  };
  return (
    <div>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={selectedTab} onChange={handleChangeTab} aria-label='米哈游菜单'>
          {mhyGameList.map(gameItem => (
            <Tab label={gameItem.label} />
          ))}
        </Tabs>
      </Box>

      <CustomTabPanel value={selectedTab} index={0}>
        <h1>hello 原神</h1>
        <img src={leiShen} width={900} height={400}/>
        <img src={XiaoCaoShen} width={900} height={400}/>
      </CustomTabPanel>
      <CustomTabPanel value={selectedTab} index={1}>
        <h1>hello 崩坏·星穹铁道</h1>
      </CustomTabPanel>
      <CustomTabPanel value={selectedTab} index={2}>
        <h1>hello 崩坏3</h1>
      </CustomTabPanel>
      <CustomTabPanel value={selectedTab} index={3}>
        <h1>hello 绝区零</h1>
      </CustomTabPanel>
    </div>
  )
}

export default App;