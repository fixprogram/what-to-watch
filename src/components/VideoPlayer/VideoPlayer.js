import React from 'react';
import PropTypes from 'prop-types';

export default class VideoPlayer extends React.PureComponent {

  constructor(props) {
    super(props);

    this.videoRef = React.createRef();
  }

  componentWillUnmount() {
    const video = this.videoRef.current;
    video.ontimeupdate = null;
    video.onfullscreenchange = null;
    video.src = ``;
  }

  componentDidUpdate() {
    const video = this.videoRef.current;
    const {src, volume} = this.props;

    if (this.props.isPlaying && video.currentTime > 0) {
      video.play();
    } else if (this.props.isPlaying && !this.props.isPaused) {
      video.src = src;
      video.volume = volume;
      video.onloadedmetadata = () => video.play();
    } else if (!this.props.isPlaying && this.props.isPaused) {
      video.pause();
    } else {
      video.src = ``;
    }
  }

  render() {

    const {poster} = this.props;

    return (

      <video className="player__video"
        preload="metadata"
        poster={poster}
        ref={this.videoRef}
      >
      </video>
    );
  }
}

VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  volume: PropTypes.number.isRequired,
  poster: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  isPaused: PropTypes.bool.isRequired
};
