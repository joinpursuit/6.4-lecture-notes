import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import Clock from './components/Clock';
class App extends React.Component {
   state = {showClock: true};
    handleToggle = () => {
      this.setState((prevState) => ({
        showClock: !prevState.showClock
      }))
    }
  render() {
    return (
      <div className="App">
        <button onClick={this.handleToggle}>Toggle Clock</button>
        {this.state.showClock ? <Clock /> : null }
      </div>
    );

  }
}

export default App;
