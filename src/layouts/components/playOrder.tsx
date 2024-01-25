import { Button, Popover } from "antd";
import { useBearStore } from "@/store";
export const PlayOrder = () => {
  const [playMode, setPlayMode] = useBearStore((state) => [
    state.playMode,
    state.setPlayMode,
  ]);
  const datalist = [
    { value: 0, label: "顺序播放", icon: "iconfont wyyshunxubofang" },
    { value: 1, label: "列表循环", icon: "iconfont wyybofang-xunhuanbofang" },
    { value: 2, label: "单曲循环", icon: "iconfont wyydanquxunhuan" },
    { value: 3, label: "随机播放", icon: "iconfont wyyxunhuanbofang" },
  ];
  const playItem = () => {
    return (
      <div className="flex flex-col w-full">
        {datalist.map((item, index) => {
          return (
            <div
              key={index}
              className={`py-3 flex w-full ${
                playMode === item.value
                  ? "  bg-slate-500/50 text-white"
                  : "hover:bg-cyan-200/10"
              }   cursor-pointer items-center`}
              onClick={() => {
                console.log(index);
                setPlayMode(item.value); // 设置播放模式
              }}
            >
              <i className={`${item.icon}  pl-5`}> </i>
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
