import styles from "./styles.module.scss";

interface IAudioControls {
  isPlaying: boolean;
  onPlayPauseClick: any;
  onPrevClick: any;
  onNextClick: any;
}

const AudioControls = ({
  isPlaying,
  onPlayPauseClick,
  onPrevClick,
  onNextClick,
}: IAudioControls) => {
  const renderPlayPauseButtons = (isPlaying: boolean) => {
    if (isPlaying) {
      return (
        <button
          type="button"
          className="pause"
          aria-label="Pause"
          onClick={() => onPlayPauseClick(false)}
        >
          Play
        </button>
      );
    } else {
      return (
        <button
          type="button"
          className="play"
          aria-label="Play"
          onClick={() => onPlayPauseClick(true)}
        >
          Play
        </button>
      );
    }
  };

  return (
    <div className={styles["audio-controls"]}>
      <button
        type="button"
        className="prev"
        aria-label="Previous"
        onClick={onPrevClick}
      >
        Previous
      </button>
      {renderPlayPauseButtons(isPlaying)}
      <button
        type="button"
        className="next"
        aria-label="Next"
        onClick={onPrevClick}
      >
        Next
      </button>
    </div>
  );
};

export default AudioControls;
