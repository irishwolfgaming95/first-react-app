import React from "react";
import "./App.css";


const names = ['Derek', 'Robby', 'Jake'];
const welcomeAll = names.map((name) => <Welcome name={name} key={name}></Welcome>
)


function App() {
  return (
    <div className="App">
       {welcomeAll}
      <header className="App-header">
        <p> Let the experimenting begin. </p>
      </header>
    </div>
  );
}
function Welcome(props) {
  return (<h1>Hello, {props.name}</h1>

  )
};
export default App ;
