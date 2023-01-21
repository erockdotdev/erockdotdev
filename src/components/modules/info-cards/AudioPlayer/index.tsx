import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import AudioControls from "./AudioControls";

import styles from "./styles.module.scss";

const AudioPlayer = ({ data: { tracks } }: any) => {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [trackIndex, setTrackIndex] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const { title, artist, color, image, audioSrc } = tracks[trackIndex];

  const audioRef = useRef<HTMLAudioElement | undefined>(
    typeof Audio !== "undefined" ? new Audio() : undefined
  );
  useEffect(() => {
    audioRef.current = new Audio(audioSrc);
  }, [audioSrc]);
  useEffect(() => {
    return () => {
      audioRef.current?.pause();
      clearInterval(intervalRef.current);
    };
  }, []);
  useEffect(() => {
    audioRef.current?.pause();
    audioRef.current = new Audio(audioSrc);
    setTrackProgress(audioRef.current?.currentTime);

    if (isReady.current) {
      audioRef.current.play();
      setIsPlaying(true);
      startTimer();
    } else {
      isReady.current = true;
    }
  }, [trackIndex]);

  const intervalRef = useRef();

  const startTimer = () => {
    clearInterval(intervalRef.current);
    let intervalCurrent = intervalRef.current as any;
    intervalCurrent = setInterval(() => {
      if (audioRef.current?.ended) {
        toNextTrack();
      } else {
        setTrackProgress(audioRef.current?.currentTime as number);
      }
    }, 1000);
  };

  const isReady = useRef(false);

  const duration = audioRef.current?.duration;

  useEffect(() => {
    console.log("isPlaying", isPlaying);
    console.log("audioRef.current", audioRef.current);
    if (isPlaying) {
      audioRef.current?.play();
      startTimer();
    } else {
      audioRef.current?.pause();
    }
  }, [isPlaying]);

  const toPrevTrack = () => {
    if (trackIndex - 1 < 0) {
      setTrackIndex(tracks.length - 1);
    } else {
      setTrackIndex(trackIndex - 1);
    }
  };

  const toNextTrack = () => {
    if (trackIndex < tracks.length - 1) {
      setTrackIndex(tracks.length + 1);
    } else {
      setTrackIndex(0);
    }
  };

  const onScrub = (value: any) => {
    clearInterval(intervalRef.current);
    if (audioRef.current?.currentTime) {
      audioRef.current.currentTime = value;
      setTrackProgress(audioRef.current.currentTime);
    }
  };

  const onScrubEnd = () => {
    if (!isPlaying) {
      setIsPlaying(true);
    }
    startTimer();
  };

  return (
    <div className={styles["audio-player"]}>
      <div className={styles["track-info"]}>
        <Image
          className="artwork"
          src={image}
          alt={`track art work for ${title} by ${artist}`}
          width={100}
          height={100}
        />
        <h2 className="title">{title}</h2>
        <h3 className="artist">{artist}</h3>
        <AudioControls
          isPlaying={isPlaying}
          onPrevClick={toPrevTrack}
          onNextClick={toNextTrack}
          onPlayPauseClick={setIsPlaying}
        />
        <input
          type="range"
          value={trackProgress}
          step="1"
          min="0"
          max={duration ? duration : `${duration}`}
          className="progress"
          onChange={e => onScrub(e.target.value)}
          onMouseUp={onScrubEnd}
          onMouseUp={onScrubEnd}
        />
      </div>
    </div>
  );
};

export default AudioPlayer;
