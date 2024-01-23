import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { trackAll } from "@/api";
import Dayjs from "dayjs";
import Tooltip from "@mui/material/Tooltip";
import { TabsCom } from "./tabs";
interface DatailsProps {
  coverImgUrl: string;
  name: string;
  description: string;
  tags: string[];
  createTime: Date;
  trackCount: number;
  playCount: number;
  creator: { nickname: string; avatarUrl: string };
}
export interface miusProps {
  name?: string;
  userName?: string;
  time?: string;
  album?: string;
  id?: number;
  picUrl?: string;
}
export const SongSheet = () => {
  const { state } = useLocation();
  const [data, setData] = useState<DatailsProps>({
    coverImgUrl: "",
    name: "",
    description: "",
    tags: [],
    createTime: new Date(),
    trackCount: 0,
    playCount: 0,
    creator: { nickname: "", avatarUrl: "" },
  });
  const [playList, setPlayList] = useState<miusProps[]>([]);
  const getData = async () => {
    const { playlist } = await trackAll({ id: state?.id, limit: 20 });
    console.log(playlist);
    setData({
      ...playlist,
      playCount:
        playlist?.playCount >= 10000
          ? (playlist?.playCount / 10000).toFixed(2) + "万"
          : playlist?.playCount,
    });
    setPlayList(
      playlist?.tracks?.map((item: any) => {
        return {
          id: item.id,
          name: item?.name,
          userName: item.ar[0]?.name,
          album: item?.al?.name,
          picUrl: item?.al?.picUrl,
          time: Dayjs(item?.videoInfo?.video?.playTime).format("mm:ss"),
        };
      })
    );
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="flex flex-wrap">
      <div className="w-full h-48 flex px-8">
        <div className=" w-48 h-48">
          <img className=" rounded-md" src={data?.coverImgUrl} alt="" />
        </div>
        <div className="flex-1 flex overflow-hidden flex-col pl-5">
          <div className=" text-xl font-medium">{data?.name}</div>
          <div className="py-2 flex  text-sm">
            <div className=" w-6 h-6">
              <img
                src={data?.creator?.avatarUrl}
                className="rounded-full"
                alt="暂无"
              />
            </div>
            <div className="pl-3 text-[rgb(44,138,201)]">
              {data?.creator?.nickname}
            </div>
            <div className="pl-3 text-slate-400">
              {Dayjs(data?.createTime).format("YYYY-MM-DD")}创建
            </div>
          </div>
          <div className="flex pt-1 pb-3">
            <div className=" h-8 bg-[rgb(236,65,65)] text-white px-3 rounded-3xl py-5 flex items-center">
              <div className=" w-8 flex justify-center">
                <i className="iconfont wyybofang2  text-sm"></i>
              </div>
              <div className="flex-1 text-base">播放全部</div>
              <div className="w-6 ml-3 flex justify-center border-l-[1px] border-[#ff6d6d]">
                <span className="pl-2">
                  <i className="iconfont wyytianjia text-sm"></i>
                </span>
              </div>
            </div>
            <div className="ml-3 h-8  border-solid border-[#c0c0c0] border   text-black/50 px-3 rounded-3xl py-5 flex items-center">
              <div className=" w-8 flex justify-center">
                <i className="iconfont wyyshoucangjia  text-base"></i>
              </div>
              <div className="flex-1 text-base pr-5">收藏</div>
            </div>
            <div className="ml-3 h-8  border-solid border-[#b3b3b3] border   text-black/50 px-3 rounded-3xl py-5 flex items-center">
              <div className=" w-8 flex justify-center">
                <i className="iconfont wyyfenxiang  text-base"></i>
              </div>
              <div className="flex-1 text-base pr-5">分享</div>
            </div>
            <div className="ml-3 h-8  border-solid border-[#a5a5a5] border   text-black/50 px-3 rounded-3xl py-5 flex items-center">
              <div className=" w-8 flex justify-center">
                <i className="iconfont wyyxiazai  text-base"></i>
              </div>
              <div className="flex-1 text-base pr-5">下载全部</div>
            </div>
          </div>
          <div className="w-full text-sm font-medium">
            标签 :{" "}
            <span className=" text-[rgb(44,138,201)]">
              {data?.tags.join(" / ")}
            </span>
          </div>
          <div className="flex py-1">
            <div className=" text-sm font-medium">
              歌曲 : <span className=" text-slate-500">{data?.trackCount}</span>
            </div>
            <div className="text-sm font-medium pl-3">
              播放: <span className="text-slate-500">{data?.playCount}</span>
            </div>
          </div>
          <div className="w-full truncate text-sm font-medium overflow-hidden">
            简介 :
            <Tooltip title={data?.description}>
              <span className=" cursor-pointer text-slate-500 text-sm">
                {data?.description}
              </span>
            </Tooltip>
          </div>
        </div>
      </div>
      <div className="w-full pt-3">
        <TabsCom data={playList} />
      </div>
    </div>
  );
};
