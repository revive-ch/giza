import React from 'react';
import Riddle from './Riddle';
import './App.css';

function App() {
  // Single riddle properties
  const question = "My very name is known nationwide, especially by all my fellow buckeyes. On this campus my name is spread, although most only recognize my head. Today I decided to take a seat, in the building where students, staff, and diners meet.";
  const answer = 'Brutus';
  const audioSrc = `${process.env.PUBLIC_URL}/audio/Union.m4a`;

  return (
    <div className="App">
      <Riddle question={question} correctAnswer={answer} audioSrc={audioSrc} />
    </div>
  );
}

export default App;
