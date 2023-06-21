import {useState} from 'react';
import Button from "./Button";
import Grid from "./Grid";
import Number from "./Number";
import "./App.css";

function App() {
  const [number, setNumbers] = useState([]);

  const btnRandom = () => {
    const randomNumbers = [];
    for (let i = 0; i < 25; i++) {
      const randomNumber = Math.floor(Math.random() * 75) + 1;
      randomNumbers.push(randomNumber);
    }

    setNumbers(randomNumbers);
  };



  return (
    <div>
      <div className="head">
        <div className="bingoHeader">Bingo Card Generator</div>
      </div>
      <div className="btnCon">
        <Button label="Randomize" click={btnRandom}/>
      </div>
      <div className="cardCon">
        <div className="card">
        <div className="bingo">
         <Grid label="B" className="grid" />
         <Grid label="I" className="grid" />
         <Grid label="N" className="grid" />
         <Grid label="G" className="grid" />
         <Grid label="O" className="grid" />  
        </div>
        <div className="numbers">
          {number.map((element, index,) => (
              <Number key={index} label={index == 12? "Free" : element} className="number"  />
          ))}
        </div>
        </div>

      </div>
    </div>
  );
}

export default App;
