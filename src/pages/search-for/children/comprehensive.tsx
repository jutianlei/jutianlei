/**
 * 这个是综合
 * */
import { LocationProps } from "../search-for";
import { getCloudsearch } from "@/api";
import { useEffect } from "react";
export const Comprehensive = ({ state }: LocationProps) => {
  const getData = async () => {
    const res = await getCloudsearch({ keywords: state });
    console.log(res);
  };
  useEffect(() => {
    getData();
  }, []);
  return <div>这个返回的是综合</div>;
};
