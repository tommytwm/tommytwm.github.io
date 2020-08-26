import React from 'react';
import './App.css';
import Bio from './components/bio/Bio';
import Contacts from './components/contacts/Contacts';
import Deck from './components/experience/deck/Deck';
import Resumes from './components/resumes/Resumes';
import Skills from './components/skills/Skills';
import Title from './components/title/Title';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title/>
        <Bio/>
        <Skills/>
        <Deck
          isTech={true}
          jobTitle="Undergraduate Teaching Assistant"
          date="January, 2020 - April, 2020"
          employer="University of British Columbia"
          team="CPSC 310"
        />
        <Contacts/>
        <Resumes/>
      </header>
    </div>
  );
}

export default App;
