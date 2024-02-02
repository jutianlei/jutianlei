import { useLocation } from "react-router-dom";
import { getCloudsearch } from "@/api";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import {
  Comprehensive,
  Single,
  VideoList,
  SongSheet,
  SingerList,
  AlbumList,
} from "./children";
export interface LocationProps {
  // hash: string;
  // key: string;
  // pathname: string;
  state: string;
  // search: string;
}
export const SearchFor = () => {
  const { state } = useLocation();
  console.log(useLocation());
  const [value, setValue] = useState("综合");
  const [selected, setSelected] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setSelected(titleList.indexOf(newValue));
    setValue(newValue);
  };
  const titleList = ["综合", "单曲", "视频", "歌单", "歌手", "专辑"];
  const assemblyList = [
    <Comprehensive state={state as string} />,
    <Single />,
    <VideoList />,
    <SongSheet />,
    <SingerList />,
    <AlbumList />,
  ];
  return (
    <div className="px-8">
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        {titleList.map((item, index) => {
          return <Tab key={index} value={item} label={item} />;
        })}
      </Tabs>
      <div className="pt-3">{assemblyList[selected]}</div>
    </div>
  );
};
