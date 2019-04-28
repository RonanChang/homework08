import React, { Component } from "react";
import "./Card.css";
class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flipped: this.props.flipped,
      id: this.props.id
    };
  }
  render() {
    return (
      <div className="Card" onClick={() => this.props.toggle(this.state.id)}>
        {this.props.emoji}
      </div>
    );
  }
}

export default Card;
