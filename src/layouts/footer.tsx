import React, { useState, useRef, useEffect, ChangeEvent } from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Slider from "@mui/material/Slider";
import { MusicSlider } from "@/components";
import { musicList } from "./constant";
import "./index.css";
import { useBearStore } from "@/store";
import { MusicListView } from "./components/musicListView";
import { getSongUrl, checkMusic } from "@/api";
export const Footer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isUserInteraction, setIsUserInteraction] = useState(false);
  const [volume, setVolume] = useState(100); // 音量状态变量
  const [musicList, musicIndex, setMusicIndex, picUrl, setPicUrl] =
    useBearStore((state) => [
      state.musicList,
      state.musicIndex,
      state.setMusicIndex,
      state.picUrl,
      state.setPicUrl,
    ]);
  const togglePlay = () => {
    setIsUserInteraction(true);
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };
  useEffect(() => {
    const audioElement = audioRef.current;
    if (audioElement) {
      const handleTimeUpdate = () => {
        setCurrentTime(audioElement.currentTime);
      };

      const handleLoadedMetadata = () => {
        setDuration(audioElement.duration);
      };

      audioElement.addEventListener("timeupdate", handleTimeUpdate);
      audioElement.addEventListener("loadedmetadata", handleLoadedMetadata);

      return () => {
        audioElement.removeEventListener("timeupdate", handleTimeUpdate);
        audioElement.removeEventListener(
          "loadedmetadata",
          handleLoadedMetadata
        );
      };
    }
  }, []);
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };
  const rightArrow = () => {
    if (musicIndex - 1 >= 0) {
      setMusicIndex(musicIndex - 1);
    } else {
      setMusicIndex(musicList.length - 1);
    }
    audioRef.current?.pause();
    audioRef.current?.play();
  };

  const letArrow = () => {
    if (musicIndex + 1 < musicList.length) {
      setMusicIndex(musicIndex + 1);
    } else {
      setMusicIndex(0);
    }
    audioRef.current?.pause();
    audioRef.current?.play();
  };
  useEffect(() => {
    if (isUserInteraction) {
      audioRef.current?.play();
    }
  }, [musicIndex, isUserInteraction]);
  const preventHorizontalKeyboardNavigation = (event: React.KeyboardEvent) => {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
    }
  };
  const handleVolumeChange = (newVolume: number | number[]) => {
    if (typeof newVolume === "number") {
      const volumeValue = newVolume / 100;
      setVolume(newVolume);
      if (audioRef.current) {
        audioRef.current.volume = volumeValue;
      }
    }
  };
  const renderTooltip = (props: any) => (
    <Tooltip id="volume-tooltip" {...props} className="custom-tooltip">
      <div className=" h-36 py-3">
        <Slider
          sx={{
            '& input[type="range"]': {
              WebkitAppearance: "slider-vertical",
            },
          }}
          orientation="vertical"
          defaultValue={volume}
          onChange={(e, a) => {
            handleVolumeChange(a);
          }}
          aria-label="Temperature"
          valueLabelDisplay="auto"
          onKeyDown={preventHorizontalKeyboardNavigation}
        />
      </div>
    </Tooltip>
  );
  const getMusic = async () => {
    console.log(musicIndex);
    const DATA = await checkMusic({ id: musicList[musicIndex]?.id });
    if (DATA?.success) {
      const res = await getSongUrl({ id: musicList[musicIndex]?.id });
      setPicUrl(res.data[0].url);
      setIsPlaying(true);

      const handleLoadedData = () => {
        //监听是否加载完成
        audioRef.current?.pause();
        audioRef.current?.play();
      };

      audioRef?.current?.addEventListener("loadeddata", handleLoadedData);
    }
  };
  useEffect(() => {
    if (musicList?.length) {
      getMusic();
    }
  }, [musicList, musicIndex]);
  return (
    <footer className="   backdrop-blur-xl h-full shadow-md rounded-b-lg relative">
      <MusicSlider
        classNames="absolute w-full top-[-15px] mx-1"
        audioRef={audioRef}
      />
      <div className="flex h-full w-full bg-white/55">
        <div className=" w-96 h-full flex items-center pl-6">
          <img
            className="w-16 h-16   rounded  shadow-lg"
            src={
              musicList[musicIndex]?.picUrl ||
              "https://bpic.588ku.com/element_origin_min_pic/00/97/64/9156f326114ebcd.jpg"
            }
            alt=""
          />
          <div className="flex flex-col pl-5">
            <div className="text-base font-semibold pb-1">
              {musicList[musicIndex]?.name || "请播放歌曲吧"}
            </div>
            <div className=" text-sm text-slate-600">
              {musicList[musicIndex]?.userName || "暂无歌手"}
            </div>
          </div>
        </div>
        <div className="flex-1 flex">
          <audio ref={audioRef} src={picUrl} />
          <div className="flex-1 flex justify-center items-center">
            <div
              className="flex items-center ml-14  rounded-full shadow-lg cursor-pointer"
              onClick={letArrow}
            >
              <i className="iconfont wyyhoutui text-3xl  text-cyan-500"></i>
            </div>
            <div
              className="flex items-center ml-10 rounded-full justify-center cursor-pointer  shadow-lg"
              onClick={togglePlay}
            >
              {isPlaying ? (
                <i className="iconfont wyytingzhi text-6xl text-cyan-500"></i>
              ) : (
                <i className="iconfont wyybofang text-6xl text-cyan-500 "></i>
              )}
            </div>
            <div
              className="flex items-center  rounded-full ml-8 shadow-lg cursor-pointer"
              onClick={rightArrow}
            >
              <i className="iconfont wyykuaijin text-3xl text-cyan-500"></i>
            </div>
          </div>
          <div className=" w-20  mr-10 text-slate-500 flex justify-center items-center">
            {formatTime(currentTime)}/{formatTime(duration)}
          </div>
          <div className="w-[15%] flex items-center">
            <div className="flex-1">
              <OverlayTrigger
                placement="top"
                overlay={renderTooltip}
                delay={{ show: 250, hide: 1500 }}
              >
                <i className="iconfont wyyyinlianggao text-cyan-500 text-xl cursor-pointer"></i>
              </OverlayTrigger>
            </div>
            <div className="flex-1">
              <i className="iconfont wyysuijibofang text-cyan-500 text-xl"></i>
            </div>
            <MusicListView />
          </div>
        </div>
      </div>
    </footer>
  );
};
