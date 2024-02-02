import { Input, Popover } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { getSearchSuggest } from "@/api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export const SearchBox = () => {
  const navigate = useNavigate();
  const [delayed, setDelayed] = useState<any>(null);
  const [songList, setSongList] = useState<string[]>([]);
  const [albumsList, setAlbumsList] = useState<string[]>([]);
  const [value, setValue] = useState<string>("");
  const [open, setOpen] = useState(false);
  const songListFC = (
    list: string[],
    name: string,
    indexMt: number,
    indexBo: number
  ) => {
    if (list?.length) {
      return (
        <div
          className={`w-full flex ${
            indexBo === 0 ? "" : "border-b-2 border-solid border-[#f8f8f8]"
          }  ${indexMt % 2 === 0 ? "mt-2" : ""} `}
        >
          <div className=" w-16">{name}</div>
          <div className="flex-1">
            {list?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="w-full pb-2 cursor-pointer hover:text-cyan-500"
                  onClick={() => {
                    setValue(item);
                    navigate("/search-for-list", { state: item });
                    setOpen(false);
                  }}
                >
                  {item}
                </div>
              );
            })}
          </div>
        </div>
      );
    }
  };
  const result = () => {
    return (
      <div className=" h-80 w-72 overflow-y-auto">
        {songListFC(songList, "单曲", 1, 1)}
        {songListFC(albumsList, "专辑", 4, 0)}
      </div>
    );
  };
  const getSearchResult = async (e: string | null) => {
    if (e) {
      const { result, code } = await getSearchSuggest({ keywords: e });
      if (code === 200) {
        setOpen(true);
        setSongList(result.songs?.map((item: any) => item.name));
        setAlbumsList(result.albums?.map((item: any) => item.name));
      }
    }
  };
  const onSearch = (e: any) => {
    const { target } = e;
    if (delayed) {
      clearTimeout(delayed);
    }
    setValue(target.value || "");
    let timeout = setTimeout(() => {
      getSearchResult(target.value || null);
    }, 500);
    setDelayed(timeout);
  };

  return (
    <div className="w-[30%] flex">
      <Popover
        placement="bottom"
        title="搜索结果"
        content={result}
        trigger={["click"]}
        open={open}
      >
        <div className="flex">
          <Input
            placeholder="搜索音乐"
            prefix={<SearchOutlined />}
            onChange={onSearch}
            value={value}
          />
        </div>
      </Popover>
    </div>
  );
};
