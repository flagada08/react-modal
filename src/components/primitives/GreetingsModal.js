// Dependencies

import React from "react";

// Containers

import Modal from "../containers/Modal.js";

// Stylesheet

import "../../styles.css";

export default class GreetingsModal extends React.PureComponent {
  render() {
    const { show = false, onClose } = this.props;
    return (
      <Modal show={show} onClose={onClose}>
        <span>Prout! I'm the modal!</span>
      </Modal>
    );
  }
}
