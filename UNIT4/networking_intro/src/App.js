import React from 'react';
import logo from './logo.svg';
// import './App.csss';
import DogApp from './components/DogApp';
import DogSelector from './components/DogSelector';
import DogsByBreed from './components/DogsByBreed';
class App extends React.Component {
  state = { breed: "" }

  handleBreed = breed => {
    this.setState({ breed })
  }
  render() {
    const { breed } = this.state; 
    console.log(this.state);
    return (
      <div className="App">
      <DogSelector breed={breed} handleBreed={this.handleBreed }/>
      {/* <DogApp/> */}
      <DogsByBreed breed={breed} />
    </div>
  );
}
}

export default App;
