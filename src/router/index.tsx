import { RoutesProps } from "@/constant/types";
import { Home } from "@/pages/home";
import { Playlist } from "@/pages/playlist";
import { SongSheet } from "@/pages/home/childeren";
import { SearchFor } from "@/pages/search-for";
export const routes: RoutesProps[] = [
  {
    path: "/",
    name: "为你推荐",
    element: <Home />,
    icon: "iconfont wyyyinle",
  },
  {
    path: "/song-sheet",
    name: "歌单详情",
    element: <SongSheet />,
    hideMenu: true,
  },
  {
    path: "/search-for-list",
    name: "搜索页面",
    element: <SearchFor />,
    hideMenu: true,
  },
  {
    path: "/home",
    name: "猜你喜欢",
    icon: "iconfont wyyguangbo",
    element: <Playlist />,
  },
  {
    path: "/collect",
    name: "我的收藏",
    icon: "iconfont wyyshoucangfill",
    element: <Playlist />,
  },
];
