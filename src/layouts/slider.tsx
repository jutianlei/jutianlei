import React, { useState } from "react";
import { routes } from "@/router";
import { useNavigate, useLocation } from "react-router-dom";
export const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedItem, setSelectedItem] = useState(location.pathname); // 保存当前选中的项
  const handleItemClick = (item: any) => {
    setSelectedItem(item.path);
    navigate(item.path);
  };

  return (
    <div className="w-full bg-slate-50/30 backdrop-blur-xl h-full text-slate-600 rounded-tl-lg">
      <div className="h-[9%] flex items-center">
        <div
          className="h-4 w-4  text-xl ml-3 mt-1 cursor-pointer  flex justify-center items-center"
          onClick={() => {
            window.history.back();
          }}
        >
          <i className="iconfont wyyfanhui"></i>
        </div>
        <div className="h-4 w-4 rounded-full mt-1 bg-red-500 ml-7"></div>
        <div className="h-4 w-4 rounded-full mt-1 bg-yellow-500 ml-4"></div>
        <div className="h-4 w-4 rounded-full mt-1 bg-green-500 ml-4"></div>
      </div>
      <div className="w-full flex flex-wrap justify-center">
        {routes.map((item, index) => {
          if (!item.hideMenu)
            return (
              <div
                key={index}
                className={`h-14 flex items-center w-[100%] text-lg`}
              >
                <div
                  className={`w-2 h-8 bg-blue-500 ${
                    selectedItem === item.path ? "opacity-100" : "opacity-0"
                  }`}
                ></div>
                <div
                  className={`cursor-pointer pl-7 ${
                    selectedItem === item.path ? "text-blue-500" : ""
                  }`}
                  onClick={() => handleItemClick(item)}
                >
                  <i className={item.icon}></i>
                  <span className="pl-3">{item.name}</span>
                </div>
              </div>
            );
        })}
      </div>
    </div>
  );
};
