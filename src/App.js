import React from 'react';
import './App.css';
import Title from './components/title/Title';
import Contacts from './components/contacts/Contacts';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title />
        <Contacts />
      </header>
    </div>
  );
}

export default App;
