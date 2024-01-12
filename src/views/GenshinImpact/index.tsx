/**
 * 原神角色列表
 */
import { Typography, Tabs, Box, Tab } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useAppDispatch } from '@utils/hooks';
import { GET_CHARACTER_BY_GAME } from '@store/gameTab/gameTabType';
import CustomTabPanel from "@components/CustomTabPanel";

const GenshinImpact = () => {
  const dispatch = useAppDispatch();
  const [characterList, setCharacterList] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(0);

  const handleChangeTab = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedCharacter(newValue);
  };

  useEffect(() => {
    dispatch({ type: GET_CHARACTER_BY_GAME, payload: {
      callback: (data: any) => {
        const result = data.data.map((characterItem: string) => {
          return { label: characterItem };
        });
        setCharacterList(result);
      }
    }});
  }, []);

  return (
    <Typography component="div">
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={selectedCharacter} onChange={handleChangeTab} orientation='vertical' aria-label='角色菜单'>
          {characterList.map((gameItem : { label: string }) => (
            <Tab label={gameItem.label} key={gameItem.label} />
          ))}
        </Tabs>
      </Box>

      <CustomTabPanel value={selectedCharacter} index={0}>
        <label>hello 崩坏·星穹铁道</label>
      </CustomTabPanel>
      <CustomTabPanel value={selectedCharacter} index={1}>
        <label>hello 原神</label>
      </CustomTabPanel>
      <CustomTabPanel value={selectedCharacter} index={2}>
        <label>hello 崩坏·星穹铁道</label>
      </CustomTabPanel>
      <CustomTabPanel value={selectedCharacter} index={3}>
        <label>hello 崩坏3</label>
      </CustomTabPanel>
      <CustomTabPanel value={selectedCharacter} index={4}>
        <label>hello 绝区零</label>
      </CustomTabPanel>
      <CustomTabPanel value={selectedCharacter} index={5}>
        <label>hello 崩坏·星穹铁道</label>
      </CustomTabPanel>
      <CustomTabPanel value={selectedCharacter} index={6}>
        <label>hello 原神</label>
      </CustomTabPanel>
      <CustomTabPanel value={selectedCharacter} index={7}>
        <label>hello 崩坏·星穹铁道</label>
      </CustomTabPanel>
      <CustomTabPanel value={selectedCharacter} index={8}>
        <label>hello 崩坏3</label>
      </CustomTabPanel>
      <CustomTabPanel value={selectedCharacter} index={9}>
        <label>hello 绝区零</label>
      </CustomTabPanel>
    </Typography>
  );
}

export default GenshinImpact;