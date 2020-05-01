import React from 'react';
import './App.css';
import Title from './components/title/Title';
import Contacts from './components/contacts/Contacts';
import Resumes from './components/resumes/Resumes';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title />
        <Contacts />
        <Resumes />
      </header>
    </div>
  );
}

export default App;
