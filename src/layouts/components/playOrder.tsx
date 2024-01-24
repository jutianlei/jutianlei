import { Button, Popover } from "antd";
export const PlayOrder = () => {
  const datalist = [
    { value: 1, label: "顺序播放", icon: "iconfont wyyshunxubofang" },
    { value: 2, label: "列表循环", icon: "iconfont wyybofang-xunhuanbofang" },
    { value: 3, label: "单曲循环", icon: "iconfont wyydanquxunhuan" },
    { value: 4, label: "随机播放", icon: "iconfont wyyxunhuanbofang" },
  ];
  const playItem = () => {
    return (
      <div className="flex flex-col w-full">
        {datalist.map((item, index) => {
          return (
            <div
              key={index}
              className="py-3 flex w-full  hover:bg-cyan-400/10 cursor-pointer justify-center  items-center"
            >
              <i className={`${item.icon} text-slate-500`}> </i>
              <span className="pl-3">{item.label}</span>
            </div>
          );
        })}
      </div>
    );
  };
  return (
    <div className="flex-1">
      <Popover title="播放顺序" content={playItem()} trigger={["click"]}>
        <i className="iconfont wyysuijibofang text-cyan-500 text-xl cursor-pointer"></i>
      </Popover>
    </div>
  );
};
