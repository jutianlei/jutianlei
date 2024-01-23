import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { bannerList } from "../../../../api";
import { Pagination } from "swiper/modules";
interface DataProps {
  imageUrl: string;
  id: number;
}
export const Barner = () => {
  const [datalist, setDatalist] = useState<DataProps[]>([]);
  const getData = async () => {
    const res = await bannerList();
    setDatalist(
      res.banners.map((item: DataProps) => {
        return { id: item?.id, imageUrl: item?.imageUrl };
      })
    );
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        "@0.00": {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        "@0.75": {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        "@1": {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      }}
      modules={[Pagination]}
      className="w-full flex h-[190px]"
    >
      {datalist?.map((item: DataProps, index: number) => {
        return (
          <SwiperSlide key={index} className=" h-[150px]">
            <img
              className="w-full h-full rounded-lg shadow-md"
              src={item.imageUrl}
              alt=""
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
