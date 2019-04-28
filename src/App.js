import React, { Component } from "react";
import "./App.css";
import Card from "./Card.js";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emojis: [
        { emoji: "😁", flipped: false, id: 1 },
        { emoji: "😁", flipped: false, id: 2 },
        { emoji: "😁", flipped: false, id: 3 },
        { emoji: "😁", flipped: false, id: 4 },
        { emoji: "😁", flipped: false, id: 5 },
        { emoji: "😁", flipped: false, id: 6 },
        { emoji: "😁", flipped: false, id: 7 },
        { emoji: "😁", flipped: false, id: 8 },
        { emoji: "😁", flipped: false, id: 9 }
      ]
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle(id) {
    console.log("clicked");
    const emojisCopy = this.state.emojis.slice();
    emojisCopy[id - 1].flipped = !emojisCopy[id - 1].flipped;
    this.setState({
      emojis: emojisCopy
    });
  }
  render() {
    const cards = this.state.emojis.map(i => {
      if (i.flipped) {
        return (
          <Card
            toggle={this.toggle}
            emoji={i.emoji}
            flipped={i.flipped}
            id={i.id}
            key={i.id}
          />
        );
      } else {
        return (
          <Card
            emoji={""}
            toggle={this.toggle}
            flipped={i.flipped}
            id={i.id}
            key={i.id}
          />
        );
      }
    });
    return (
      <div className="App">
        This is AIT homework 08.
        <div className="grid=cotainer"> {cards}</div>
      </div>
    );
  }
}

export default App;
