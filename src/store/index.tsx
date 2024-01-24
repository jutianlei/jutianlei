import { create } from "zustand";
import { SingleProps } from "@/pages/home/components/hit-single";
interface StateProps {
  /**
   * @description 音乐列表以及当前播放
   */
  musicList: SingleProps[];

  /**
   * @description 音乐列表当前下标值
   */
  musicIndex: number;

  /**
   * @description 音乐列表以及当前播放set方法
   */
  setMusicListPush: (value: SingleProps | SingleProps[]) => void;

  /**
   * @description set音乐列表当前下标值
   */
  setMusicIndex: (value: number) => void;

  picUrl: string;
  /**
   * @description set音乐地址
   */
  setPicUrl: (value: string) => void;
}
export const useBearStore = create<StateProps>((set) => ({
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

  /**
   * 音乐的下标
   */
  musicIndex: 0,
  setMusicIndex: (value) => set((state: StateProps) => ({ musicIndex: value })),

  /**
   * 音乐url
   */
  picUrl: "",
  setPicUrl: (value) => set((state: StateProps) => ({ picUrl: value })),
}));
