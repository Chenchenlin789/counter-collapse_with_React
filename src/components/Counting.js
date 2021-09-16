import React from "react";

class Counting extends React.Component {
  state = {
    counter: 0,
  };
  decrement = () => {
    this.setState({ counter: this.state.counter - 1 });
  };
  increment = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  reset = () => {
    this.setState({ counter: 0 });
  };

  render() {
    return (
      <div>
        <button onClick={this.decrement}> - </button>
        <p> {this.state.counter}</p>
        <button onClick={this.increment}> + </button>
        <button onClick={this.reset}> RESET </button>
      </div>
    );
  }
}

export default Counting;
