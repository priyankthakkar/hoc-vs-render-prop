import React, { Component } from 'react';

// Aim of this component is, handle the mouse move event and display the coordinates
// if we look at the handleMouseMove function, it has the behaviour
// which decideds what are the current coordinates and update them
// now if I need to share this behaviour, the strategy of react framework earliers was Mixins
// With the advent of ES6, react has moved towards ES6 class based approach and
// ES6 classes doesn't support mixins
// So one of the possible solution is, a Higher Order Component
// Higher Order Functions: takes functions as inputs, or returns functions as results
// Simillary, Higer Order Component, takes a Component as an input and returns Component
// For implementation refer, ./AppWithHOC.js
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0
    };
  }

  handleMouseMove = e => {
    this.setState({
      x: e.clientX,
      y: e.clientY
    });
  }

  render() {
    const {x, y} = this.state;
    return (
      <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>
        <div>
          <h1>The mouse position is: ({x}, {y})</h1>
        </div>
      </div>
    );
  }
}

export default App;
