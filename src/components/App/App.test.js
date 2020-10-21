import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

it(`App correctly renders after relaunch`, () => {
  const films = [
    {
      id: `id1`,
      movieTitle: `Dog`,
      moviePicture: `path`
    },
    {
      id: `id2`,
      movieTitle: `Demon`,
      moviePicture: `path`
    },
    {
      id: `id3`,
      movieTitle: `Betrayer`,
      moviePicture: `path`
    },
    {
      id: `id4`,
      movieTitle: `Core`,
      moviePicture: `path`
    },
    {
      id: `id5`,
      movieTitle: `Wizard`,
      moviePicture: `path`
    }
  ];

  const tree = renderer.create(
      <App
        films={films}
      />
  ).toJSON();
  expect(tree).toMatchSnapshot();
}
);
