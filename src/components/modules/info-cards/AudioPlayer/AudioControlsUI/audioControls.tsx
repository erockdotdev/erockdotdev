import { MutableRefObject } from "react";

type Ref<T> = MutableRefObject<T>;

type AudioRef = Ref<HTMLAudioElement>;

type Track = any;

type Tracks = any; //Track[];

// alphabetize these and add to linter rules, and break to sub types if necessary
interface IAudioControls {
  scrub: (value: string) => void;
  scrubEnd: () => void;
  pause: () => void;
  play: () => void;
  nextTrack: () => void;
  previousTrack: () => void;
}

class AudioControls implements IAudioControls {
  private audioRef: AudioRef;
  private interval: any;
  private progress = 0;
  private tracks = [];
  private currentTrack = [];
  private trackIndex = 0;
  private playing = false;
  constructor(audioRef: AudioRef, tracks: Tracks) {
    this.audioRef = audioRef;
    this.tracks = tracks;
    this.pause = this.pause.bind(this);
    this.play = this.play.bind(this);
    this.nextTrack = this.nextTrack.bind(this);
    this.setCurrentTrack = this.setCurrentTrack.bind(this);
    this.previousTrack = this.previousTrack.bind(this);
  }
  private setCurrentTrack() {
    this.currentTrack = this.tracks[this.trackIndex];
    this.audioRef.current.pause();
    this.audioRef.current = new Audio((this.currentTrack as any).audioSrc);
  }
  private setTrackIndex(index: number) {
    this.trackIndex = index;
  }
  private startTimer() {
    clearInterval(this.interval);
    this.interval = setInterval(() => {
      if (this.audioRef.current.ended) {
        this.nextTrack();
      } else {
        this.progress = this.audioRef.current.currentTime;
      }
    }, 1000);
  }
  scrubEnd() {
    !this.playing && this.play();
  }
  scrub = (value: string) => {
    clearInterval(this.interval);
    if (this.audioRef.current.currentTime) {
      this.audioRef.current.currentTime = parseInt(value);
      this.progress = this.audioRef.current.currentTime;
    }
  };
  pause() {
    this.audioRef.current.pause();
  }
  play() {
    this.audioRef.current.play();
    this.startTimer();
  }
  nextTrack() {
    const hasNextTrack = this.trackIndex < this.tracks.length - 1;

    if (hasNextTrack) {
      this.setTrackIndex((this.trackIndex += 1));
    } else {
      this.setTrackIndex(0);
    }

    this.setCurrentTrack();
    this.play();
  }
  previousTrack() {
    const hasNoPreviousTrack = this.trackIndex - 1 < 0;
    if (hasNoPreviousTrack) {
      this.setTrackIndex(this.tracks.length - 1);
    } else {
      this.setTrackIndex((this.trackIndex -= 1));
    }
    this.setCurrentTrack();
    this.play();
  }
}

export default AudioControls;
