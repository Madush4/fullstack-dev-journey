import { useState , useEffect } from 'react'
import './App.css'

function FavColor() {
 
  const [color , setColor] = useState('Blue');
  return (
    <>
     <h2>My favourite color is {color}</h2>
     <button onClick={()=> setColor("Red")}>Red</button>
    </>
  )
}

function Timer(){
  const [count , setCount] = useState(0);

  useEffect (()=> {

      setTimeput (() =>{
        setCount((count) => count +1 );
      } , 1000);
  });

  return <h1> I've rendered {count} times</h1>
}

export default Timer
