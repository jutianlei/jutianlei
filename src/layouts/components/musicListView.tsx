import type { MenuProps } from "antd";
import { Dropdown, Popover } from "antd";
import Tooltip from "@mui/material/Tooltip";
// import "../index.css";
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
      <div className="w-[20vw] h-[700px] flex flex-col overflow-y-auto">
        <div className="py-3"></div>
        {musicList?.map((item, index) => {
          return (
            <div
              key={index}
              className={`w-full py-3 flex hover:bg-slate-300/20 cursor-pointer ${
                index === musicIndex ? " bg-red-300/20 text-cyan-600" : ""
              }`}
              onClick={() => {
                setMusicListPush(item);
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
  return (
    <div className="flex-1 ">
      <Popover
        title={`共${musicList?.length}首歌曲`}
        trigger={["click"]}
        placement="topRight"
        arrow
        content={ListItem()}
      >
        <i className="iconfont wyybofangshaixuan text-cyan-500 text-xl cursor-pointer"></i>
      </Popover>
    </div>
  );
};
