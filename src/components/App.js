// Dependencies
import React from "react";
import GreetingsModal from "./primitives/GreetingsModal.js";

// Stylesheet
import "../styles.css";

export default class App extends React.Component {
  constructor(prouts) {
    super(prouts);

    this.state = {
      show: false
    };
  }

  onModalClose = () => {
    this.setState({ show: false });
  };

  onButtonClick = () => {
    this.setState({ show: true });
  };

  render() {
    const { show = false } = this.state;
    return (
      <div className="App">
        <button onClick={this.onButtonClick}>Prout Me</button>
        <GreetingsModal show={show} onClose={this.onModalClose} />
      </div>
    );
  }
}
