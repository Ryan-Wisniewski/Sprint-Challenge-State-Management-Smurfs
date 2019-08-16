import React, { Component } from "react";
import "./App.css";
import SmurffList from "./components/SmurfList";
import Form from './components/Forms'
class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>SMURFS! 2.0 W/ Redux</h1>
          <Form />
          <SmurffList />
      </div>
    );
  }
}

export default App;
