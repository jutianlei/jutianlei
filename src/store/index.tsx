import { create } from "zustand";
import { SingleProps } from "@/pages/home/components/hit-single";
interface StateProps {
  musicProgress: number;
  volumeIndex: number;
  musicList: SingleProps[];
  musicIndex: number;
  setVolumeIndex: (value: StateProps["volumeIndex"]) => void;
  setMusicListPush: (value: SingleProps) => void;
  setMusicIndex: (value: number) => void;

  picUrl: string;
  setPicUrl: (value: string) => void;
}
export const useBearStore = create<StateProps>((set) => ({
  /**
   * 音乐当前播放进度
   * */
  musicProgress: 0,

  /**
   * 音量
   */
  volumeIndex: 0,
  setVolumeIndex: (value) =>
    set((state: StateProps) => ({ volumeIndex: value })),

  /** 音乐列表以及当前播放 */
  musicList: [],
  setMusicListPush: (value) =>
    set((state: StateProps) => ({ musicList: [...state.musicList, value] })),

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
