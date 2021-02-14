import React,{useState}from 'react';
import './App.css';
import InputBox from "./components/InputBox"
import  BoxList from "./components/BoxList"
import style from "./style/style.css"

const App =()=> {
 
  const[boxes,setBoxes]=useState([])
  return (
    <div className="App">
   <InputBox setBoxes={setBoxes} boxes={boxes} />
   <BoxList boxes={boxes}/>
    </div>
  );
}

export default App;
