import React, { useEffect, useState } from "react";
import { newsong } from "@/api";
import Dayjs from "dayjs";
import { useBearStore } from "@/store";
export interface SingleProps {
  id?: number;
  picUrl?: string;
  name?: string;
  userName?: string;
  time?: string;
  album?: string;
}
export const HitSingle: React.FC = () => {
  const [setMusicListPush, musicList, setMusicIndex] = useBearStore((state) => [
    state.setMusicListPush,
    state.musicList,
    state.setMusicIndex,
  ]);
  const [singleList, setSingleList] = useState<SingleProps[]>([]);
  const getData = async () => {
    const res = await newsong({ limit: 9 });
    setSingleList(
      res.map((item: any) => {
        return {
          id: item.id,
          name: item.name,
          picUrl: item.picUrl,
          userName: item.song.artists[0].name,
          time: Dayjs(item.song.mMusic.playTime).format("mm:ss"),
        };
      })
    );
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className=" flex justify-between">
      <div className="w-[66%]">
        <div className="h-10 text-2xl font-semibold">最新单曲</div>
        <div className=" flex flex-wrap">
          {singleList.map((item, index) => {
            return (
              <div
                key={index}
                className="w-[32%] flex mt-3 mb-3 cursor-pointer  hover:bg-white/20  pr-1 mr-2 rounded-lg"
                onClick={() => {
                  setMusicListPush(item);
                  setMusicIndex(musicList?.length);
                }}
              >
                <div className="w-20">
                  <img
                    src={item.picUrl}
                    alt=""
                    className=" w-16 h-16 rounded-md  shadow-md"
                  />
                </div>
                <div className="flex-1">
                  <div className="w-full pt-2 font-semibold">{item.name}</div>
                  <div className="w-full pt-2 text-sm">{item.userName}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex-1">
        <div className="h-10 text-2xl pt-1 font-semibold">飙升榜</div>
        <div className="h-[280px] overflow-y-auto">
          {singleList?.map((item, index) => {
            return (
              <div
                key={index}
                className="pt-1 flex flex-wrap justify-between text-sm text-slate-700 hover:bg-white/20 px-1"
              >
                <div className="py-2 flex-1 flex items-center">{item.name}</div>
                <div className="py-2 flex-1 flex items-center justify-end  text-sm text-slate-500">
                  {item.userName}
                </div>
                <div className="py-2 w-20 flex items-center justify-end text-sm text-slate-500">
                  {item.time}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
