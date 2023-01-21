import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import AudioControlsUI from "./AudioControlsUI";
import AudioControls from "./AudioControlsUI/audioControls";

import styles from "./styles.module.scss";

const AudioPlayer = ({ data: { tracks } }: any) => {
  const [trackIndex, setTrackIndex] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const { title, artist, color, image, audioSrc } = tracks[trackIndex];

  const audioRef = useRef<HTMLAudioElement>(new Audio(audioSrc));
  const audioControls = new AudioControls(audioRef, tracks);

  const isReady = useRef(false);

  useEffect(() => {
    audioRef.current?.pause();
    audioRef.current = new Audio(audioSrc);
    setTrackProgress(audioRef.current?.currentTime);

    // if (isReady.current) {
    //   audioRef.current.play();
    //   setIsPlaying(true);
    //   startTimer();
    // } else {
    isReady.current = true;
    // }
  }, [trackIndex]);

  const intervalRef = useRef();

  const duration = audioRef.current?.duration;

  const handleTogglePausePlay = () => {
    if (!isPlaying) {
      audioRef.current?.play();
      startTimer();
      setIsPlaying(true);
    } else {
      audioRef.current?.pause();
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current?.play();
      startTimer();
    } else {
      audioRef.current?.pause();
    }
  }, [isPlaying, trackIndex, startTimer]);

  const toPrevTrack = () => {
    if (trackIndex - 1 < 0) {
      setTrackIndex(tracks.length - 1);
    } else {
      setTrackIndex(trackIndex - 1);
    }
  };

  const toNextTrack = useCallback(() => {
    if (trackIndex < tracks.length - 1) {
      setTrackIndex(trackIndex + 1);
    } else {
      setTrackIndex(0);
    }
  }, [trackIndex, tracks.length]);

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
  const startTimer = useCallback(() => {
    clearInterval(intervalRef.current);
    let intervalCurrent = intervalRef.current as any;
    intervalCurrent = setInterval(() => {
      if (audioRef.current?.ended) {
        toNextTrack();
      } else {
        setTrackProgress(audioRef.current?.currentTime as number);
      }
    }, 1000);
  }, [toNextTrack]);

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
        <button onClick={audioControls.play}>Class Play</button>
        <button onClick={audioControls.pause}>Class Pause</button>
        <button onClick={audioControls.nextTrack}>Class next</button>
        <button onClick={audioControls.previousTrack}>Class prev</button>
        <AudioControlsUI
          isPlaying={isPlaying}
          onPrevClick={toPrevTrack}
          onNextClick={toNextTrack}
          togglePausePlay={handleTogglePausePlay}
        />
        <input
          type="range"
          value={trackProgress}
          step="1"
          min="0"
          max={duration ? duration : `${duration}`}
          className="progress"
          onChange={e => audioControls.scrub(e.target.value)}
          onMouseUp={onScrubEnd}
          onKeyUp={onScrubEnd}
        />
      </div>
    </div>
  );
};

export default AudioPlayer;
