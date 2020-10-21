import React from 'react';
import renderer from 'react-test-renderer';
import SmallMovieCard from './SmallMovieCard';

it(`When user artist song is not sent`, () => {
  const tree = renderer.create(
      <SmallMovieCard
        id={`id1`}
        picture={`path`}
        title={`Movie`}
        onHover={jest.fn()}
        outHover={jest.fn()} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
}
);
