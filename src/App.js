import React from 'react';
import './App.css';
import Box from './components/box/Box';
import Bio from './components/bio/Bio';
import Contacts from './components/contacts/Contacts';
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
        <Box
          link="https://ubc.ca"
          workplace="The University of British Columbia"
          title="Undergraduate Teaching Assistant"
          details="CPSC 310"
        />
        <Contacts/>
        <Resumes/>
      </header>
    </div>
  );
}

export default App;
