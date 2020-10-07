import React, { useState, useEffect } from 'react'
import './App.css';
import List from './List';

function App() {
  const [state, setState] = useState({ notes: [] });
  useEffect(() => {
    fetch(process.env.REACT_APP_USERS_URL)
      .then(response => response.json()
      )
      .then(rates => {
        setState({ notes: rates });
      });
  })
  return (
    <div className="App">
      <List notes={state.notes} />
    </div>
  );
}
export default App;