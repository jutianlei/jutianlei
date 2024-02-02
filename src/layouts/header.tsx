import React, { useEffect, useState } from "react";
import { UserInformation } from "./components";
import { Popover } from "antd";
import { useBearStore } from "@/store";
import { Login } from "./components/login";
import { SearchBox } from "./components";
export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userInfo, setUserInfo] = useBearStore((state) => [
    state.userInfo,
    state.setUserInfo,
  ]);
  const UserInformationFc = () => {
    return <UserInformation />;
  };
  useEffect(() => {
    const accountInfo = localStorage.getItem("accountInfo");
    if (accountInfo && accountInfo?.length > 5) {
      const { token, cookie, avatarUrl, nickname, id } =
        JSON.parse(accountInfo);
      console.log(id);
      setUserInfo({ token, cookie, avatarUrl, nickname, id });
    }
  }, []);
  const infoConent = () => {
    if (userInfo?.token) {
      return (
        <div className="w-[30%] flex justify-end items-center">
          <img
            src={
              userInfo?.avatarUrl
                ? userInfo.avatarUrl
                : "https://img1.baidu.com/it/u=2494495472,3629111731&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
            }
            alt=""
            className="w-8 h-8 rounded-full cursor-pointer"
          />
          <span className="pl-3 text-slate-500/65  cursor-pointer">
            {userInfo?.nickname ? userInfo.nickname : "请先登录"}
          </span>
        </div>
      );
    } else {
      return <Login />;
    }
  };
  return (
    <header className="h-20 px-8 ">
      <div className="flex h-full w-full items-center justify-center">
        <SearchBox />
        <div className="flex-1 flex justify-end">
          {userInfo?.token ? (
            <Popover
              placement="bottom"
              title={"用户信息"}
              content={UserInformationFc()}
              trigger={["click"]}
            >
              {infoConent()}
            </Popover>
          ) : (
            infoConent()
          )}
        </div>
      </div>
    </header>
  );
};
