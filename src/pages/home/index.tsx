import React, { useEffect, useRef } from "react";
import { Recommend, HitSingle, Barner } from "./components";
import "./index.css";
export const Home: React.FC = () => {
  return (
    <div className=" h-[650px]  px-10 overflow-y-auto">
      <Barner />
      <div className="h-10 text-2xl pt-1 font-semibold">热门推荐</div>
      <div className="overflow-hidden w-100 ">
        <Recommend />
      </div>
      <div className=" w-full">
        <HitSingle />
      </div>
    </div>
  );
};
