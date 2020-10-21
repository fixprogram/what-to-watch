import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SmallMovieCard from './SmallMovieCard';

Enzyme.configure({adapter: new Adapter()});

it(`When small movie card doesn't work`, () => {
  const onHover = (evt) => {
    return evt.currentTarget.outerHTML;
  };
  const app = shallow(
      <SmallMovieCard
        id={`id2`}
        picture={`path`}
        title={`Movie Title`}
        onHover={(evt) => onHover(evt)}
        outHover={jest.fn()} />
  );
  const movieCard = app.find(`.catalog__movies-card`);
  movieCard.simulate(`mouseEnter`);
  expect(onHover).toBeDefined();
}
);
