
//import logo from ".assets/logo.png";
import logo from "./assets/logo.png"
import React from "react";
import './App.css';
import Fruits from './components/Fruits';
import FruitsCounter from "./components/FruitsCounter";
import Homepage from "./components/Home";
import Contact from "./components/Contact";
import AboutLittleLemon from "./components/AboutLittleLemon";
import { Routes, Route, Link } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
function App() {
 
  const [fruits] = React.useState([
    {fruitName: 'apple', id: 1},
    {fruitName: 'apple', id: 2},
    {fruitName: 'plum', id: 3},
]);
  
function thirdExample() {
    console.log('third example');
  };
  const fourthExample = () => console.log('fourth example');
  const bird1 = new Audio( 
    "https://upload.wikimedia.org/wikipedia/commons/9/9b/Hydroprogne_caspia_-_Caspian_Tern_XC432679.mp3" 
  ); 
 
  const bird2 = new Audio( 
    "https://upload.wikimedia.org/wikipedia/commons/b/b5/Hydroprogne_caspia_-_Caspian_Tern_XC432881.mp3" 
  ); 
  function toggle1() { 
    if (bird1.paused) { 
      bird1.play(); 
    } else { 
      bird1.pause(); 
    } 
  }; 
 
  function toggle2() { 
    if (bird2.paused) { 
      bird2.play(); 
    } else { 
      bird2.pause(); 
    } 
  }; 
  return (
    <div className="App">
     <button onClick={toggle1}>Caspian Tern 1</button> 
      <button onClick={toggle2}>Caspian Tern 2</button> 
  
      <img src = {logo} alt = "Logo"></img>
    </div>

  );
}

export default App;
