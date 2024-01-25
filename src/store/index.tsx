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

  /**
   * @description 音乐地址
   */
  picUrl: string;

  /**
   * @description set音乐地址
   */
  setPicUrl: (value: string) => void;

  /**
   * @description 播放模式
   */
  playMode: PlayModeEnum;

  /**
   * @description set播放模式
   */
  setPlayMode: (value: PlayModeEnum) => void;
}
export const useBearStore = create<StateProps>((set) => ({
  musicList: [],
  playMode: 1,
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
  musicIndex: 0,
  setMusicIndex: (value) => set((state: StateProps) => ({ musicIndex: value })),
  picUrl: "",
  setPicUrl: (value) => set((state: StateProps) => ({ picUrl: value })),
  setPlayMode: (value) => set((state: StateProps) => ({ playMode: value })),
}));
