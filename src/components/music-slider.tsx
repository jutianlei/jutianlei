import React, { useEffect, useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Slider from "@mui/material/Slider";

interface TypeProps {
  classNames?: string;
  audioRef: React.RefObject<HTMLAudioElement>;
}

export const MusicSlider: React.FC<TypeProps> = ({ classNames, audioRef }) => {
  const theme = useTheme();
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audioElement = audioRef.current;
    if (audioElement) {
      const handleLoadedMetadata = () => {
        setDuration(audioElement.duration);
      };

      audioElement.addEventListener("loadedmetadata", handleLoadedMetadata);

      const handleTimeUpdate = () => {
        setPosition(audioElement.currentTime);
      };

      audioElement.addEventListener("timeupdate", handleTimeUpdate);

      return () => {
        audioElement.removeEventListener(
          "loadedmetadata",
          handleLoadedMetadata
        );
        audioElement.removeEventListener("timeupdate", handleTimeUpdate);
      };
    }
  }, [audioRef]);

  const handleChange = (_: any, value: any) => {
    setPosition(value);
    if (audioRef.current) {
      audioRef.current.currentTime = value;
    }
  };

  return (
    <div className={classNames}>
      <Slider
        aria-label="time-indicator"
        size="small"
        value={position}
        min={0}
        step={1}
        max={duration}
        onChange={handleChange}
        sx={{
          color:
            theme.palette.mode === "dark" ? "#fff" : "rgba(135, 206, 235,1)",
          height: 2,
          "& .MuiSlider-thumb": {
            width: 8,
            height: 8,
            transition: "0.3s cubic-bezier(.47,1.64,.41,.8)",
            "&::before": {
              boxShadow: "none",
            },
            "&:hover": {
              boxShadow: `none`,
            },
            "&.Mui-active": {
              width: 20,
              height: 20,
            },
          },
          "& .MuiSlider-rail": {
            opacity: 0.28,
            backgroundColor: "grey",
          },
        }}
      />
    </div>
  );
};
