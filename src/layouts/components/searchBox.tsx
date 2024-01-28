import { Popover } from "antd";

export const SearchBox = () => {
  const result = () => {
    return <div className=" h-80 w-72"></div>;
  };
  return (
    <div className="w-[30%] flex">
      <Popover
        placement="bottom"
        title="搜索结果"
        content={result}
        trigger={["click"]}
      >
        <div className="flex">
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
      </Popover>
    </div>
  );
};
