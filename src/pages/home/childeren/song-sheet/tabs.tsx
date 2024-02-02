import React, { useEffect, useState } from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import "./index.css";
import { miusProps } from "./";
import { useLocation } from "react-router-dom";
import { getSubscribers } from "@/api";
import Tooltip from "@mui/material/Tooltip";
import { MusicList } from "@/components/music-list";
interface DataListProps {
  avatarUrl: string;
  nickname: string;
  gender: number;
}
export const TabsCom = ({ data }: { data: miusProps[] }) => {
  const { state } = useLocation();
  const MiustList = () => {
    return <MusicList data={data} height={"370px"} />;
  };
  const UserList = () => {
    return (
      <div className="px-8">
        <div className="w-full flex  flex-wrap overflow-hidden h-[350px] overflow-y-auto">
          {datalist?.map((item, index) => {
            return (
              <div key={index} className="w-[33%]  flex justify-center">
                <div className=" py-5 flex items-center overflow-hidden">
                  <div className="flex-1 h-24">
                    <img
                      src={item?.avatarUrl}
                      className=" w-24 h-24 rounded-full w-full h-full"
                      alt=""
                    />
                  </div>
                  <div className="pl-4 text-base truncate w-24">
                    <Tooltip title={item.nickname}>
                      <span className=" cursor-pointer">{item.nickname}</span>
                    </Tooltip>
                  </div>
                  <div className="pl-1">
                    <i
                      className={`iconfont ${
                        item?.gender === 1
                          ? "wyyicon1 text-blue-500"
                          : "wyyicon text-red-400"
                      } text-2xl`}
                    ></i>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "歌曲列表",
      children: <MiustList />,
    },
    {
      key: "3",
      label: "收藏者",
      children: <UserList />,
    },
  ];
  const [datalist, setDatalist] = useState<DataListProps[]>([]);
  const getData = async () => {
    const { subscribers } = await getSubscribers({ id: state?.id });
    setDatalist(subscribers);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <Tabs
      tabBarStyle={{ borderBottom: "none", border: "none" }}
      defaultActiveKey="1"
      centered
      items={items}
    />
  );
};
