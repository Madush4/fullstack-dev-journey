
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import React from 'react';

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to cisit google",
};

function MyApp(){
    return (
        <div>
            <h1>Custom React App</h1>
        </div>
    )
}

const AnotherElement = (
    <a href="http://google.com" target='_blank'>visit google</a>
)

const areactElement = React.createElement(
    'a',
    {href: 'http://google.com', target: "_blank"},
    'click to visit google'
)
createRoot(document.getElementById('root')).render(
 
    <App/>
  
)
