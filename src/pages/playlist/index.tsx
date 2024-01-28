import { useEffect, useState } from "react";
import { getLikelist, getSongDetails } from "@/api";
import Dayjs from "dayjs";
import { TabsCom } from "./tabs";
import { useBearStore } from "@/store";

export interface miusProps {
  name?: string;
  userName?: string;
  time?: string;
  album?: string;
  id?: number;
  picUrl?: string;
}
export const Playlist = () => {
  const [coverImgUrl, setCoverImgUrl] = useState<string>("");
  const [playList, setPlayList] = useState<miusProps[]>([]);
  const [setMusicListPush, setMusicIndex, musicList, userInfo] = useBearStore(
    (state) => [
      state.setMusicListPush,
      state.setMusicIndex,
      state.musicList,
      state.userInfo,
    ]
  );
  const getData = async () => {
    const { ids } = await getLikelist({
      uid: userInfo?.id,
      cookie: userInfo?.cookie,
    });
    const data = await getSongDetails({ ids: ids.join(",") });
    const dataInfo = data?.songs[0];
    const { al } = dataInfo;
    const { picUrl } = al;
    setCoverImgUrl(picUrl);
    const { songs } = data;
    setPlayList(
      songs?.map((item: any) => {
        return {
          id: item.id,
          name: item?.name,
          userName: item.ar[0]?.name,
          album: item?.al?.name,
          picUrl: item?.al?.picUrl,
          time: "暂无时间",
        };
      })
    );
  };
  useEffect(() => {
    if (userInfo?.id !== 0) {
      getData();
    }
  }, [userInfo]);
  return (
    <div className="flex flex-wrap">
      <div className="w-full h-48 flex px-8">
        <div className=" w-48 h-48">
          <img className=" rounded-md" src={coverImgUrl} alt="" />
        </div>
        <div className="flex-1 flex overflow-hidden flex-col pl-5">
          <div className=" text-xl font-medium">我喜欢的歌曲</div>
          <div className="py-2 flex  text-sm">
            <div className=" w-6 h-6">
              <img
                src={userInfo?.avatarUrl}
                className="rounded-full"
                alt="暂无"
              />
            </div>
            <div className="pl-3 text-[rgb(44,138,201)]">
              {userInfo?.nickname}
            </div>
            <div className="pl-3 text-slate-400">
              {Dayjs().format("YYYY-MM-DD")}创建
            </div>
          </div>
          <div className="flex pt-1 pb-3">
            <div
              className=" h-8 bg-[rgb(236,65,65)] text-white px-3 rounded-3xl py-5 flex items-center cursor-pointer"
              onClick={() => {
                const index = musicList?.length;
                setMusicListPush(playList);
                setMusicIndex(index);
              }}
            >
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
          </div>
          <div className="flex py-1">
            <div className=" text-sm font-medium">
              歌曲 :{" "}
              <span className=" text-slate-500">{playList?.length || 0}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full pt-3">
        <TabsCom data={playList} />
      </div>
    </div>
  );
};
