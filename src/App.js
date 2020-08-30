import React, { Component } from 'react';
import Butterfly1 from './Butterfly1.jpg';
import Butterfly2 from './Butterfly2.jpg';
import Butterfly3 from './Butterfly3.jpg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        isLoaded : false,
        qod: ""
    };
  }

  componentDidMount() {
    fetch("https://quotes.rest/qod")
    .then( response => response.json())
    .then(
      (result) => {
        console.log(result);
        this.setState({
          isLoaded : true,
          qod : "\"" + result.contents.quotes[0].quote + "\" -"
            + result.contents.quotes[0].author
        });
      }
    )
  }

  render () {
    const { isLoaded, qod } = this.state;

    return (
      <div className="App">
        <header>
          <h1>Butterflies</h1>
          <h3>{isLoaded ? qod : "[quote of the day]"}</h3>
        </header>
        <div className="flex-container">
          <div className="col">
            <img src={Butterfly1} alt="Danaus Plexippus"/>
            <h2>Danaus Plexippus</h2>
          </div>
          <div className="col">
            <img src={Butterfly2} alt="Morpho Pelides"/>
            <h2>Morpho Pelides</h2>
          </div>
          <div className="col">
            <img src={Butterfly3} alt="Delias Eucharia"/>
            <h2>Delias Eucharia</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
