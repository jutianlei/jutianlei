interface TypeProps {
  name?: string;
  num?: number;
  icon?: string;
}
interface AuthorityProps {
  name?: string;
  styles?: string;
}
export const UserInformation = () => {
  const imgUrl =
    "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F5407e875-b8e7-4d66-95d3-eeec12a6d392%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1707475593&t=bdc79b6672aaeeb6f1bbc9bbe73c2318";
  const authorityList: AuthorityProps[] = [
    {
      styles: "  border-r-[2px]",
      name: "我的主页",
    },
    {
      styles: "  border-r-[2px]",
      name: "消息中心",
    },
    {
      styles: "  border-r-[2px]",
      name: "音乐圈",
    },
    { styles: "border-none", name: "退出登录" },
  ];
  const typeList: TypeProps[] = [
    {
      name: "我喜欢",
      num: 377,
      icon: "iconfont wyyaixin--kuai text-3xl text-red-400",
    },
    {
      name: "我的歌单",
      num: 10,
      icon: "iconfont wyygedan text-3xl text-cyan-500/90 ",
    },
  ];
  const fclist: TypeProps[] = [
    {
      name: "本地",
      num: 377,
      icon: "iconfont wyyyunxiazai",
    },
    {
      name: "已购音乐",
      num: 10,
      icon: "iconfont wyygouwu1",
    },
    {
      name: "云盘",
      num: 377,
      icon: "iconfont wyya-yunpan1",
    },
    {
      name: "视频",
      num: 10,
      icon: "iconfont wyyshipin1 ",
    },
    {
      name: "关注歌手",
      num: 10,
      icon: "iconfont wyyyonghu",
    },
    {
      name: "频道",
      num: 10,
      icon: "iconfont wyyzuijinlaifang",
    },
  ];
  return (
    <div className=" w-80 px-3 ">
      <div className="w-full pt-3 flex">
        <img src={imgUrl} alt="" className=" rounded-full w-12 h-12" />
        <div className="flex flex-wrap pl-3">
          <div className=" w-full text-[16px] font-semibold cursor-pointer">
            稳小情
          </div>
          <div className="flex">
            <div className=" cursor-pointer">6 粉丝</div>
            <div className="pl-2 cursor-pointer">10 关注</div>
            <div className="pl-3 cursor-pointer">
              <i className="iconfont wyyhaoyou"></i>
              <span className="pl-1">好友</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex py-3 justify-between">
        {typeList?.map((item, index) => {
          return (
            <div
              key={index}
              className=" w-[48%] h-14 rounded-xl  bg-slate-400/20 flex items-center justify-center pr-3"
            >
              <i className={`${item?.icon}`}></i>
              <div className="flex flex-col pl-4">
                <div className=" text-sm text-slate-600">{item?.name}</div>
                <div className=" text-xs pt-1 text-slate-400">{item?.num}</div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="pb-2 flex flex-wrap">
        {fclist?.map((item, index) => {
          return (
            <div
              key={index}
              className="w-[25%] flex justify-center items-center flex-wrap mt-2 mb-2"
            >
              <div className="w-12 h-12  bg-slate-200 rounded-full cursor-pointer flex justify-center items-center">
                <i className={`${item.icon} text-[22px] text-slate-600`}></i>
              </div>
              <div className=" pt-1 text-sm w-full text-center  cursor-pointer">
                {item.name}
              </div>
              <div className=" text-xs text-slate-400 cursor-pointer">
                {item.num}
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex">
        {authorityList?.map((item, index) => {
          return (
            <div
              key={index}
              className={`${item.styles} border-slate-100 flex flex-1 justify-center items-center pt-1 mb-3 text-slate-600 text-sm`}
            >
              <span className="hover:text-cyan-500 cursor-pointer">
                {item?.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
