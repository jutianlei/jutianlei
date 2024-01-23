import type { MenuProps } from "antd";
import { Button, Dropdown } from "antd";
import Tooltip from "@mui/material/Tooltip";
import "../index.css";
import { useBearStore } from "@/store";
import { useEffect } from "react";
export const MusicListView = () => {
  const [musicList, musicIndex, setMusicListPush, setMusicIndex] = useBearStore(
    (state) => [
      state.musicList,
      state.musicIndex,
      state.setMusicListPush,
      state.setMusicIndex,
    ]
  );
  const ListItem = () => {
    return (
      <div className="w-[20vw] h-[71.5vh] flex flex-col overflow-y-auto">
        <div className="py-3">共{musicList?.length}首歌曲</div>
        {musicList?.map((item, index) => {
          return (
            <div
              key={index}
              className={`w-full py-3 flex hover:bg-slate-300/20 cursor-pointer ${
                index === musicIndex ? " bg-red-300/20 text-cyan-600" : ""
              }`}
              onClick={() => {
                setMusicListPush(item);
                setMusicIndex(musicList?.length);
              }}
            >
              <div className="w-10 justify-center flex items-center">
                {index + 1}
              </div>
              <div className="w-14">
                <img
                  src={item.picUrl}
                  className="w-14 h-14 rounded-xl"
                  alt=""
                />
              </div>
              <div className=" w-32  pl-3 flex flex-col">
                <div className="pt-1 text-base truncate">
                  <Tooltip title={item.name}>
                    <span>{item.name}</span>
                  </Tooltip>
                </div>
                <div>{item.userName}</div>
              </div>
              <div className="flex-1 flex justify-end items-center pr-3">
                03:32
              </div>
            </div>
          );
        })}
      </div>
    );
  };
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <ListItem />,
    },
  ];
  return (
    <div className="flex-1 ">
      <Dropdown menu={{ items }} trigger={["click"]} placement="topRight" arrow>
        <i className="iconfont wyybofangshaixuan text-cyan-500 text-xl cursor-pointer"></i>
      </Dropdown>
    </div>
  );
};
