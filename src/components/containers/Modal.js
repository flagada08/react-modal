// Dependencies

import React from "react";

// Stylesheet

import "../../styles.css";

export default class Modal extends React.PureComponent {
  onOutsideClick = () => {
    const { onClose } = this.props;
    onClose && onClose();
  };
  stopPropagation = (e) => {
    e && e.stopPropagation();
  };
  render() {
    const { show = false, children } = this.props;
    if (!show) {
      return null;
    }
    return (
      <div className="outerModal flex centerFlex" onClick={this.onOutsideClick}>
        <div
          className="innerModal flex centerFlex flexColumn"
          onClick={this.stopPropagation}
        >
          {children}
        </div>
      </div>
    );
  }
}
