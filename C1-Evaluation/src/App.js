import logo from './logo.svg';
import './App.css';
import {useState} from "react"; 


function App() {


  const [score,setScore]=useState(76);
  const [wicket,setWicket]=useState(2);
  const [ball,setBall]=useState((50/6).toFixed(1));

  const handleone= () =>{
    if(score>100){
      return;
    }
    setScore(score+1);
  }

  const handlefour= () =>{
    if(score>100){
      return;
    }
    setScore(score+4);
  }

  const handlesix= () =>{
    if(score>100){
      return;
    }
    setScore(score+6)
  }

  const handlewicket= () =>{
 if(wicket>=12 || score>100){
   return;
 }

    setWicket(wicket+1);
  }
  
  const handleball= () =>{
    if(score>100){
      return;
    }
    setBall(ball+1);
  }

  
  // if(score>100){
  
  //   return <h1 className="status"> India Won</h1>
  // }
   
  
  return (
    <div className="App">
      <h3>India:</h3>

      <div className="banner">

        <div>

          Score:{" "}
          <h1 className="scoreCount">
            {
              // show "score" here
              score
            }
          </h1>

        </div>

        <div>

          Wicket:{" "}
          <h1 className="wicketCount">
            {
              // show wicket here
              wicket
            }
          </h1>

        </div>

        <div>

          Over:{" "}
          <h1 className="overCount">
            {
              // Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
              // if 1 more ball is thrown then over is now 5.0
              // you have to write logic to form this string from current ball number.
              ball
            }
          </h1>

        </div>

      </div>

      <div className="addScore">
        Add Score
        {/* these buttons should add the respective amount in the score */}
        <button className="addScore1" onClick={handleone}>Add 1</button>
        <button className="addScore4" onClick={handlefour}>Add 4</button>
        <button className="addScore6" onClick={handlesix}>Add 6</button>
      </div>

      <div className="addWicket">
        Add Wicket
        {/* Increase the count of wicket */}
        <button onClick={handlewicket}>Add 1 wicket</button>
      </div>

      <div className="addBall">
        Add ball
        {/* Increase the total number of balls thrown here. */}
        <button onClick={handleball}>Add 1 ball</button>
      </div>

       <h1 className="status"> {score>100 ? "India Won" : "" }</h1>
      {/* If score reaches greater than 100, show text "India Won" without quotes in h1 tag with class name 'status' */}
    </div>
  );
}

export default App;