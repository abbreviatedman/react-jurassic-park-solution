import React from "react";
import "./App.css";
import DinoGrid from "./components/DinoGrid";
import ParkStatus from "./components/ParkStatus";
import Buttons from "./components/Buttons";
import dinos from "./data/dinos";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      possibleDinos: dinos,
      dinoIndex: 0,
      dinosInPark: [],
    };
  }

  changeDino = () => {
    const { possibleDinos } = this.state;

    this.setState({
      dinoIndex: Math.floor(Math.random() * possibleDinos.length),
    });
  };

  addDino = () => {
    const { dinosInPark, possibleDinos, dinoIndex } = this.state;
    const currentDino = possibleDinos[dinoIndex];
    this.setState({
      dinosInPark: dinosInPark.concat(currentDino),
    });
  };

  handleReset = () => this.setState({ dinosInPark: [] });

  render() {
    const { possibleDinos, dinoIndex, dinosInPark } = this.state;
    const currentBreed = possibleDinos[dinoIndex];
    if (dinosInPark.length >= 30) {
      setTimeout(this.handleReset, 3000);

      return <h1>THE DINOSAURS HAVE OVERRUN EVERYTHING!</h1>;
    }

    return (
      <div className="App">
        <div className="headings">
          <h1>React Jurassic Park</h1>
          <h3>"Jurreactic Park"?</h3>
          <h3>No. Just... no.</h3>
        </div>
        <main>
          <Buttons
            changeDino={this.changeDino}
            addDino={this.addDino}
            handleReset={this.handleReset}
          />
          <ParkStatus
            currentBreed={currentBreed.name}
            numberOfDinos={dinosInPark.length}
          />
          <DinoGrid dinos={dinosInPark} />
        </main>
      </div>
    );
  }
}

export default App;
