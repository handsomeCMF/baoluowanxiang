import * as React from 'react';
import './App.less';
// import leiShen from '@assets/image/2.jpg';
// import XiaoCaoShen from '@assets/image/1.jpg';
import { Tabs, Box, Tab } from '@mui/material';
import { useAppDispatch, useAppSelector } from '@utils/hooks';
import { RootState } from '@store/store';
import { changeTab } from '@store/gameTab/tabSlice';
import { GET_GAME_TAB } from '@store/gameTab/gameTabType';
import CustomTabPanel from '@components/CustomTabPanel';
import GenshinImpact from './views/GenshinImpact';

const App = () => {
  // const [selectedTab, setSelectedTab] = React.useState(0);
  const tab = useAppSelector((state: RootState) => state.tabReducer.selectedTab);
  const dispatch = useAppDispatch();
  const [gameList, setGameList] = React.useState([]);

  const handleChangeTab = (event: React.SyntheticEvent, newValue: number) => {
    dispatch(changeTab(newValue));
  };

  React.useEffect(() => {
    dispatch({ type: GET_GAME_TAB, payload: {
      callback: (data: any) => {
        const result = data.data.map((item: string) => {
          return {
            label: item,
          };
        });
        setGameList(result);
      }
    } });
  }, []);
  
  return (
    <div>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={tab} onChange={handleChangeTab} aria-label='米哈游菜单'>
          {gameList.map((gameItem : { label: string }) => (
            <Tab label={gameItem.label} key={gameItem.label} />
          ))}
        </Tabs>
      </Box>

      <CustomTabPanel value={tab} index={0}>
        <GenshinImpact />
      </CustomTabPanel>
      <CustomTabPanel value={tab} index={1}>
        <label>hello 崩坏·星穹铁道</label>
      </CustomTabPanel>
      <CustomTabPanel value={tab} index={2}>
        <label>hello 崩坏3</label>
      </CustomTabPanel>
      <CustomTabPanel value={tab} index={3}>
        <label>hello 绝区零</label>
      </CustomTabPanel>
    </div>
  )
}

export default App;