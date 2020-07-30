import React from "react";
import {useState} from "react";
import "./App.css";
import photo from "/home/irishwolfgaming95/Documents/first-react-app/first-react-app/src/download.jpeg";


const names = ['Derek', 'Robby', 'Jake'];
const welcomeAll = names.map((name) => <Welcome name={name} key={name}></Welcome>);


function App() {
  const [hobbies, setHobbies] = useState('gaming');
  const picture = <img src={photo} alt=""></img>;
  setTimeout(() => {
    setHobbies('coding')
  }, 5000);

  return (
    <div className="App">
       {welcomeAll}
       
      <header className="App-header">
        {picture}
        <p>My favorite thing to do is {hobbies}</p>
        <p> Let the experimenting begin. </p>
      </header>
        <p>I hope your day is going well!</p>
    </div>
  );
}
function Welcome({name}) {
  return (<h1>Hello, {name}</h1>);
};

export default App ;
