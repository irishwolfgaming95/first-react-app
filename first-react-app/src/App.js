import React from "react";
import {useState} from 'react';
import "./App.css";


const names = ['Derek', 'Robby', 'Jake'];
const welcomeAll = names.map((name) => <Welcome name={name} key={name}></Welcome>);


function App() {
  const [hobbies, setHobbies] = useState('gaming');
  setTimeout(() => {
    setHobbies('coding')
  }, 5000);

  return (
    <div className="App">
       {welcomeAll}
       
      <header className="App-header">
        <p>My favorite thing to do is {hobbies}</p>
        <p> Let the experimenting begin. </p>
      </header>
    </div>
  );
}
function Welcome({name}) {
  return (<h1>Hello, {name}</h1>)
};

export default App ;
