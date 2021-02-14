import React, { useState } from "react";
import uuid from "uuid/dist/v4";

export default function InputBox({ boxes, setBoxes }) {
  const [height, setHeight] = useState("");
  const [width, setWidth] = useState("");
  const [color, setColor] = useState("");

  const HeightHandler = (e) => {
    setHeight(e.target.value);
  };

  const WidthHandler = (e) => {
    setWidth(e.target.value);
  };
  const BgcolorHandler = (e) => {
    setColor(e.target.value);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const newBox = {
      height: height,
      width: width,
      color: color,
      id: uuid(),

    };
    setBoxes([...boxes, newBox]);
    setHeight("");
    setWidth("");
    setColor("");
  };
 
  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="formlist">
        <label>Height
        
        <input value={height} type="text" onChange={HeightHandler}></input>
        </label>
        <label>Width
        <input value={width} type="text" onChange={WidthHandler}></input>
        </label>
        <label>BgColor
        <input value={color} type="text" onChange={BgcolorHandler}></input>
        </label>
        <button onSubmit={handleSubmit}>Add New Box</button>
      </form>
    </div>
  );
}
