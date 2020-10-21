import React from 'react';
import renderer from 'react-test-renderer';
import WelcomeScreen from './WelcomeScreen';

it(`Wecome screen correctly renders after relaunch`, () => {
  const films = [
    {
      id: `id1`,
      movieTitle: `Cat`,
      moviePicture: `path`
    },
    {
      id: `id2`,
      movieTitle: `Dragon`,
      moviePicture: `path`
    },
    {
      id: `id3`,
      movieTitle: `Gladiator`,
      moviePicture: `path`
    },
    {
      id: `id4`,
      movieTitle: `Avatar`,
      moviePicture: `path`
    },
    {
      id: `id5`,
      movieTitle: `Witcher`,
      moviePicture: `path`
    }
  ];

  const tree = renderer.create(
      <WelcomeScreen films={films} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
}
);
