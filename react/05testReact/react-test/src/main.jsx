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

function Car2(props){
    const {brand = "BMW",model} = props
    {/* I am using a defualt value here */}
  return (
      <h2>I love my {brand} {model}</h2>
  )
}

{/* ...rest is used when there are unknown no of objects to store*/}

function Employee({name, age , ...rest}){

  return (
    <h2>Mr {name} is {age} years old and he has a {rest.color} {rest.model}  </h2>
  )
}

function FormValidation(){

    const [name, setName] = useState("");
    function handleChange(e){
        setName(e.target.value);
    }

    return (

      <>
        <form action="">
          <input type="text" value={name} onChange={handleChange} />
        </form>
        <p>You typed: {name}</p>
      </>


    );

}

function ColorButtons(){
  const [color, setColor] = useState("red");

    function changeColor(newColor){
      setColor(newColor);
      document.body.style.backgroundColor = newColor
    }
  return (
    <>
      <button type="button" onClick={() => changeColor("Green")}>
        Green
      </button>
      <button type="button" onClick={() => changeColor("Red")}>
        Red
      </button>
      <button type="button" onClick={() => changeColor("Blue")}>
        Blue
      </button>
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <>
   <ColorButtons />
  </>,
);
