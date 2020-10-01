import React, { useState, useEffect } from 'react'
import './App.css';
import List from './List';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { notes: [] };
  }

  loadActualList = () => {
    fetch("https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json")
      .then(response => response.json()
      )
      .then(rates => {
        this.setState({ notes: rates });
      });
  }
  componentDidMount() {
    this.loadActualList();
  }
  render() {
    return (
      <div className="App">
        <List notes={this.state.notes} />
      </div>
    );
  }
}
export default App;
