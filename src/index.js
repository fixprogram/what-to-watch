import films from "./mocks/films";
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";

const init = () => {
  ReactDOM.render(
      <App films={films} />,
      document.querySelector(`#root`)
  );
};

init();
