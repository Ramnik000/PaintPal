import React, { useState } from "react";
import Menu from "./components/Menu";
import Canvas from "./components/Canvas";

function App() {
  const [color, setColor] = useState("black");
  const [width, setWidth] = useState(5);
  const [opacity, setOpacity] = useState(0.5);

  return (
    <div className="App">
      <nav className="sidenav">
        <h1>My Paint Brush</h1>
        <Menu setColor={setColor} setWidth={setWidth} setOpacity={setOpacity} />
      </nav>
      <div className="draw-area">
        <Canvas color={color} width={width} opacity={opacity} />
      </div>
    </div>
  );
}

export default App;
