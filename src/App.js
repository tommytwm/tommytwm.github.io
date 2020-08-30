import React from 'react';
import './App.css';
import Bio from './components/bio/Bio';
import Contacts from './components/contacts/Contacts';
import Experience from './components/experience/Experience';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import Title from './components/title/Title';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title/>
        <Bio/>
        <Skills/>
        <Experience />
        <Projects />
        <Contacts/>
      </header>
    </div>
  );
}

export default App;
