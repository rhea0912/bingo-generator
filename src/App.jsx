import {useState} from 'react';
import Button from "./Button";
import Grid from "./Grid";
import Number from "./Number";
import "./App.css";

function getRanges(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// B 1-15  0 5 10 15 20
// i 16-30 1 6 11 16 21
// n 31-45 2 7 12 17 22
// g 46-60 3 8 13 18 23
// o 61-75 4 9 14 19 24

const matrix = [
  [0, 5, 10, 15, 20], //B -> index 0
  [1, 6, 11, 16, 21], //I -> index 1
  [2, 7, 12, 17, 22], //N -> index 2
  [3, 8, 13, 18, 23], //G -> index 3
  [4, 9, 14, 19, 24], //O -> index 4
];

function randomizeNumber(index){
  let result;

  if(index == 0) result = getRanges(1, 15);
  else if(index == 1) result = getRanges(16, 30);
  else if(index == 2) result = getRanges(31, 45);
  else if(index == 3) result = getRanges(46, 60);
  else if(index == 4) result = getRanges(61, 75);

  return result;
}

function App() {
  const [number, setNumbers] = useState([]);

  const btnRandom = () => {
    const randomNumbers = [];
    const savedNumbers = [];
    
    for (let i = 0; i < 25; i++) {
      let index;
      
      matrix.forEach((arr, arrIndex) => { 
        if(arr.includes(i)){
          index = arrIndex;
        }
      });

      let randomNumber = randomizeNumber(index);
      let included = false;

      while(!included)
      {
        if(!savedNumbers.includes(randomNumber))
        {
          randomNumber = randomizeNumber(index);
        }

      }
      
    

      savedNumbers.push(randomNumber);
      
      console.log(savedNumbers);
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