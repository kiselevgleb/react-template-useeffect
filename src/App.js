import React, { useState, useEffect } from 'react'
// import logo from './logo.svg';
import './App.css';
import List from './List';
// import Details from './Details';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { notes: [] };
    // this.stateId = { info: "" };

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
  // view = id => {
  //   console.log(props);

  //   useEffect(() => {
  //     fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${id}.json`)
  //       .then(response => response.json()
  //       )
  //       .then(rates => {
  //         this.setStateId({ info: rates });
  //       });
  //   })
  // }
  render() {
    return (
      <div className="App">
        {/* <div className="wrap">
          <h3>Notes</h3>
          <button className="refresh" onClick={() => this.loadActualNotes()}>Refresh</button>
        </div> */}
        <List notes={this.state.notes} />
        {/* {this.info!=undefined && <Details info={this.info}/>} */}
        
      </div>
    );
  }
}
export default App;
