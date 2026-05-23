import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { useState } from 'react'
import './index.css'
import App from './App.jsx'

let list = ["Apple","Banana","Orange","Peachers"]

function FruitList(){
  return (
    <ul>
      {list.map((fruit,index) => (
        <li key={fruit}>{fruit}| Index: |{index}</li>
      ))}
    </ul>
  );
}

function Greeting({name,age}){
    return(
      <h1>Hello {name} You are {age} years old.</h1>
    );
}

function Counter(){

  const [count, setCount] = useState(0);
  return(

    <button onClick={() => {setCount(count+1)}}>Count : {count} </button>

  );

}

createRoot(document.getElementById("root")).render(
  <>
   <Counter />
  </>,
);
