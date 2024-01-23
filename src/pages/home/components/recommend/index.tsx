import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Tooltip from "@mui/material/Tooltip";
import { useSetState } from "ahooks";
import { personalized } from "@/api";
import { useNavigate } from "react-router-dom";
interface dataProps {
  id: number;
  type: number;
  name: string;
  trackNumberUpdateTime: Date;
  trackCount: number;
  playCount: number;
  picUrl: string;
  highQuality: boolean;
  copywriter: string;
  canDislike: boolean;
  alg: string;
}
export const Recommend: React.FC = () => {
  const [state, dispatch] = useSetState({
    datalist: [] as dataProps[][],
  });
  const { datalist } = state;
  const convertTo2DArray = (arr: dataProps[], chunkSize: number) => {
    const result = [];
    const length = arr.length;
    for (let i = 0; i < length; i += chunkSize) {
      result.push(arr.slice(i, i + chunkSize));
    }

    return result;
  };
  const getData = async () => {
    const res = (await personalized({ limit: 20 })) as dataProps[];
    let datalist = convertTo2DArray(res, 5);
    dispatch({ datalist });
  };
  useEffect(() => {
    getData();
  }, []);
  const navigate = useNavigate();
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className=" h-[290px] w-full"
    >
      {datalist?.map((item, index) => {
        return (
          <SwiperSlide key={index} className="py-3 flex  justify-between">
            {item.map((i, jindex) => {
              return (
                <div
                  key={jindex}
                  className={`flex w-[20%] px-3`}
                  onClick={() => {
                    console.log(i.id);
                    navigate("/song-sheet", { state: { id: i.id } });
                  }}
                >
                  <div className="w-full  h-full relative">
                    <img
                      className="w-full h-48 rounded-md shadow-md"
                      src={i.picUrl}
                      alt=""
                    />
                    <div className="w-full rounded-md h-48 hover:opacity-100 opacity-0 bg-black/60  cursor-pointer absolute top-0 flex justify-center items-center">
                      <i className="iconfont wyybofang1 text-5xl text-white"></i>
                    </div>
                    <div className=" pt-3 pb-2 text-base font-semibold truncate">
                      <Tooltip title={i.name}>
                        <span className=" cursor-pointer">{i.name}</span>
                      </Tooltip>
                    </div>
                  </div>
                </div>
              );
            })}
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
