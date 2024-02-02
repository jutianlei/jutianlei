import { SingleProps } from "@/pages/home/components/hit-single";
import { useBearStore } from "@/store";
interface MusicListProps {
  data: SingleProps[];
  height: string;
}

export const MusicList: React.FC<MusicListProps> = ({ data, height }) => {
  const [setMusicListPush] = useBearStore((state) => [state.setMusicListPush]);
  return (
    <div
      className={`w-full flex flex-col mt-2 ${
        "h-[" + height + "]"
      } overflow-y-auto  text-center`}
    >
      {data?.map((item, index) => {
        return (
          <div
            key={index}
            className={`w-full flex text-base cursor-pointer group  hover:bg-blue-600/10 py-3  ${
              index % 2 === 0 ? "bg-slate-50/10" : "bg-slate-50/20"
            }`}
          >
            <div className="flex items-center justify-center w-32 text-slate-500">
              {index + 1}
            </div>
            <div className="flex-1 flex flex-col text-left">
              <div className="flex">
                <img
                  className="w-14 h-14 rounded-lg shadow-md"
                  src={item.picUrl}
                  alt=""
                />
                <div className="flex flex-col pl-4">
                  <div className="text-base pt-1">{item.name}</div>
                  <div className="text-sm pt-1 text-slate-500">
                    {item.userName}
                  </div>
                </div>
              </div>
            </div>
            <div
              className="group-hover:opacity-100 w-14  bg-blue-500/20 flex items-center justify-center opacity-0 rounded-full shadow-md"
              onClick={() => {
                setMusicListPush(item);
              }}
            >
              <i className="iconfont wyybofang3 text-4xl text-white"></i>
            </div>
            <div className=" flex-1 flex items-center justify-center text-slate-500 text-sm">
              {item.album}
            </div>
            <div className=" w-60 flex items-center justify-center text-slate-500">
              {item.time}
            </div>
          </div>
        );
      })}
    </div>
  );
};
