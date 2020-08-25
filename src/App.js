import React from 'react';
import './App.css';
import Bio from './components/bio/Bio';
import Contacts from './components/contacts/Contacts';
import Resumes from './components/resumes/Resumes';
import Title from './components/title/Title';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title />
        <Bio />
        <Contacts />
        <Resumes />
      </header>
    </div>
  );
}

export default App;
