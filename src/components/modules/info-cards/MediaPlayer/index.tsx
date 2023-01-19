import React, { useRef, useState } from "react";
import styles from "./styles.module.scss";

export default function MediaPlayer(props: any) {
  const {
    id,
    data: { playlist },
  } = props;

  const audioRef = useRef();

  const [selectedTrack, setSelectedTrack] = useState(playlist.tracks[0]);
  // let audio = document.getElementById("audio");

  const handleTrackClick = (track: any) => {
    setSelectedTrack(track);
    const audioCurrent = audioRef?.current as any;
    audioCurrent.load();
  };

  const renderPlaylist = (playlist: any) => {
    return (
      <div>
        <h3>{playlist.title}</h3>
        <ul style={{ listStyle: "none", color: "green" }}>
          {playlist.tracks.map((track: any, index: number) => {
            return (
              <li
                key={`track-${index}`}
                onClick={() => {
                  handleTrackClick(track);
                }}
              >
                <span>
                  {track.artist} – {track.title}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };
  console.log("selectedTrack", selectedTrack);
  return (
    <section id={id}>
      <audio ref={audioRef} controls>
        <source src={selectedTrack.src} type="audio/mpeg" />
      </audio>
      <div>{renderPlaylist(playlist)}</div>
    </section>
  );
}
