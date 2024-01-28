import { create } from "zustand";
import { SingleProps } from "@/pages/home/components/hit-single";
export enum PlayModeEnum {
  /**
   * @description 顺序播放
   */
  ORDER,
  /**
   * @description 单曲循环
   */
  SINGLE_LOOP,
  /**
   * @description 随机播放
   */
  RANDOM,
  /**
   * @description 列表循环
   */
  LIST_LOOP,
}
interface StateProps {
  /**
   * @description 音乐列表以及当前播放
   */
  musicList: SingleProps[];
  setMusicListPush: (value: SingleProps | SingleProps[]) => void;

  /**
   * @description 音乐列表当前下标值
   */
  musicIndex: number;
  setMusicIndex: (value: number) => void;

  /**
   * @description 音乐地址
   */
  picUrl: string;
  setPicUrl: (value: string) => void;

  /**
   * @description 播放模式
   */
  playMode: PlayModeEnum;
  setPlayMode: (value: PlayModeEnum) => void;

  userInfo: {
    avatarUrl: string;
    nickname: string;
    token: string;
    cookie: string;
    id: number;
  };
  setUserInfo: (value: StateProps["userInfo"]) => void;
}
export const useBearStore = create<StateProps>((set) => ({
  userInfo: {
    avatarUrl: "",
    nickname: "",
    token: "",
    cookie: "",
    id: 0,
  },
  setUserInfo: (value) => set((state) => ({ userInfo: value })),
  musicList: [],
  setMusicListPush: (value) =>
    set((state: StateProps) => {
      let index;
      if (!Array.isArray(value)) {
        index = state.musicList.findIndex((item) => item.id === value?.id);
      } else {
        index = -1;
      }

      if (index !== -1) {
        return { musicIndex: index };
      } else {
        const newValue = Array.isArray(value) ? [...value] : [value];
        const newMusicList = [...state.musicList, ...newValue];
        return { musicIndex: newMusicList.length - 1, musicList: newMusicList };
      }
    }),

  playMode: 1,
  setPlayMode: (value) => set((state) => ({ playMode: value })),

  musicIndex: 0,
  setMusicIndex: (value) => set((state) => ({ musicIndex: value })),

  picUrl: "",
  setPicUrl: (value) => set((state) => ({ picUrl: value })),
}));
