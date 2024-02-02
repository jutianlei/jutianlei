/**
 * 这个是综合
 * */
import { LocationProps } from "../search-for";
import { getCloudsearch } from "@/api";
import { useEffect, useState } from "react";
import { SingleProps } from "@/pages/home/components/hit-single";
import { MusicList } from "@/components/music-list";
export const Comprehensive = ({ state }: LocationProps) => {
  const [data, setData] = useState<SingleProps[]>([]);
  const getData = async () => {
    const { songs } = await getCloudsearch({ keywords: state });
    setData(
      songs.map((item: any) => {
        return {
          id: item.id,
          picUrl: item.al.picUrl,
          name: item.name,
          userName: item.ar[0].name,
          album: item?.al?.name,
          time: "暂无时间",
        };
      })
    );
  };
  useEffect(() => {
    getData();
  }, [state]);
  return <MusicList data={data} height={"580px"} />;
};
