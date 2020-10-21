import React from 'react';
import PropTypes from 'prop-types';
import SmallMovieCard from '../SmallMovieCard/SmallMovieCard';

export default class Catalog extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeMovie: ``
    };
  }

  render() {
    const {films} = this.props;

    const onHover = (evt) => {
      evt.currentTarget.style.transform = `scale(1.2)`;
      evt.currentTarget.style.zIndex = `3`;
      this.setState({activeMovie: evt.currentTarget.dataset.key});
    };
    const outHover = (evt) => {
      evt.currentTarget.style.transform = null;
      evt.currentTarget.style.zIndex = null;
    };

    return (
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <ul className="catalog__genres-list">
            <li className="catalog__genres-item catalog__genres-item--active">
              <a href="#" className="catalog__genres-link">All genres</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Comedies</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Crime</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Documentary</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Dramas</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Horror</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Kids & Family</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Romance</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Sci-Fi</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Thrillers</a>
            </li>
          </ul>

          <div className="catalog__movies-list">
            {films.map((it) => {
              return <SmallMovieCard key={it.id}
                id={it.id}
                picture={it.moviePicture}
                title={it.movieTitle}
                onHover={(evt) => onHover(evt)}
                outHover={(evt) => outHover(evt)}
              />;
            })}
          </div>

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>

        </section>

        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>
          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>

      </div>
    );
  }
}

Catalog.propTypes = {
  films: PropTypes.array.isRequired
};
