import React from 'react';
import { useState } from 'react';
import MoleContainer from './components/MoleContainer';
import './App.css';

function App() {
  let [score, setScore] = useState(0)

  function addToScore(addedPoint){
  setScore(score + addedPoint);
 }

 function makeMoles () {
  const moles = []
  for (let i = 0; i < 9; i++) {
    moles.push(<MoleContainer key={i} addToScore = {addToScore} />)
  }
  return moles;
 }
 
  return (
    <div className="App">
      <h1>React-A-Mole!</h1>
      <h2>Score:{score}</h2>
     <div className="mole-mounds">
     {
     makeMoles(9)
     }
     </div>
    </div>
  );
}

export default App;
