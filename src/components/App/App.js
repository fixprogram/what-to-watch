import React from "react";
import PropTypes from 'prop-types';
import WelcomeSreen from "../WelcomeScreen/WelcomeScreen";

export default class App extends React.PureComponent {

  render() {
    return (

      <WelcomeSreen films={this.props.films} />

    );
  }
}

App.propTypes = {
  films: PropTypes.array.isRequired
};
