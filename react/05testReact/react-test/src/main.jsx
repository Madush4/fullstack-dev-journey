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

function Car(props){
  return (
    <h2>This is my {props.brand}</h2>
  )
}

{/* This is the destructuring props */}

function Person({name,age}){  
  return (
    <>
      <h2>Name : {name}</h2>
      <h2>Age : {age}</h2>
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <>
  <Person name="Madusha" age={22} />
  </>,
);
