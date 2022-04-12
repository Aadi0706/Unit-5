
import react from 'react';
import {useState} from 'react'
import './Counter.css'

export const Counter=()=>{

    const [counter,setCounter]=useState(4);

    const handleChange= (item, value)=>{
        if(item==="increase"){
            setCounter(counter+value)
        }
        else if(item==="decrease"){
            setCounter(counter-value);
        }
        else if(item==="double"){
            setCounter(counter*value);
        }
    }

return (
    <div id="box">
        <h2 id="counter"className={`${counter%2===0 ? "Even": "Odd"}`}>counter:{counter}</h2>

        <button id="increment" onClick={()=>handleChange("increase",1)}>Increment</button>
        <button id="decrement" onClick={ ()=>handleChange("decrease",1)}>Decrement</button>
        <button id="double" onClick={ ()=>handleChange("double",2)}>Double</button>
        <div> number is {counter %2===0 ? "Even" : "Odd" }</div>
    </div>
);
}