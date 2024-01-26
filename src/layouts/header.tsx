import React, { useState } from "react";
import { UserInformation } from "./components";
import { Popover } from "antd";
export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const UserInformationFc = () => {
    return <UserInformation />;
  };
  return (
    <header className="h-20 px-8">
      <div className="flex h-full w-full items-center justify-center">
        <div className="w-[30%] flex">
          <div className="h-8 w-8  border-gray-300 flex items-center justify-end rounded-l-lg bg-slate-100/80">
            <div className="pl-5">
              <i className="iconfont wyysousuo"></i>
            </div>
          </div>
          <input
            type="text"
            placeholder="请输入歌曲名"
            className="px-4 h-8 w-[80%] border-none border-gray-300   bg-slate-100/90 focus:outline-none focus:ring-2 rounded-r-lg"
          />
        </div>

        <div className="flex-1 flex justify-end">
          <Popover
            placement="bottom"
            title={"用户信息"}
            content={UserInformationFc()}
            trigger={["click"]}
          >
            <div className="w-[30%] flex justify-end items-center">
              <img
                src={
                  "https://img1.baidu.com/it/u=2494495472,3629111731&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
                }
                alt=""
                className="w-8 h-8 rounded-full cursor-pointer"
                onClick={toggleDropdown}
              />
              <span className="pl-3 text-slate-500/65  cursor-pointer">
                请先登录
              </span>
            </div>
          </Popover>
        </div>
      </div>
    </header>
  );
};
