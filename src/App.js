import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log('constructor');
  }

  componentDidMount() {
    console.log('component rendered');
  }

  componentDidUpdate() {
    console.log('component updated');
  }

  componentWillUnmount() {
    console.log('component unmounted');
  }

  state = {
    count: 0,
  };

  add = () => {
    console.log('add');
    this.setState((current) => ({ count: current.count + 1 }));
  };
  minus = () => {
    console.log('minus');
    this.setState((currnt) => ({ count: currnt.count - 1 }));
  };

  render() {
    console.log('I am rendering');
    return (
      <div>
        <h1>The number is {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
