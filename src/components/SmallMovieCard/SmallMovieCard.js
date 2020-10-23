import React from 'react';
import PropTypes from 'prop-types';
import VideoPlayer from '../VideoPlayer/VideoPlayer';

export default class SmallMovieCard extends React.Component {

  constructor(props) {
    super(props);

    this.activeMovie = this.props.activeMovie;
    this.timeout = ``;

    this.state = {
      isPlaying: false,
      isPaused: true
    };
  }

  onHover() {
    this.timeout = setTimeout(() => {
      this.setState({
        isPlaying: true,
        isPaused: false
      });
    }, 1000);
  }

  outHover() {
    clearTimeout(this.timeout);
    this.setState({
      isPlaying: false,
      isPaused: true
    });
  }

  render() {
    const {id, src, picture, title} = this.props;
    return (
      <article className="small-movie-card catalog__movies-card"
        onMouseOver={() => this.onHover()}
        onMouseOut={() => this.outHover()}
        data-key={id}>
        <div className="small-movie-card__image">
          <VideoPlayer src={src}
            poster={picture}
            volume={0}
            isPlaying={this.state.isPlaying}
            isPaused={this.state.isPaused} />
        </div>
        <h3 className="small-movie-card__title">
          <a className="small-movie-card__link" href="movie-page.html">{title}</a>
        </h3>
      </article>
    );
  }
}

SmallMovieCard.propTypes = {
  id: PropTypes.string.isRequired,
  activeMovie: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  setActive: PropTypes.func.isRequired,
  setPassive: PropTypes.func.isRequired
};
