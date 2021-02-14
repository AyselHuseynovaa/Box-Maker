import React from "react";

export default function BoxList({ boxes }) {
  return (
    <div style={{margin:"1.5rem"}}>
      {boxes.map((box) => (
        <div
          style={{
            width: box.width,
            height: box.height,
            backgroundColor: box.color,
          }}
        ></div>
      ))}
    </div>
  );
}
