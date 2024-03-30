import React, { useEffect, useRef, useState } from "react";

const Canvas = ({ color, width, opacity}) => {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [isErase, setIsErase] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.globalAlpha = opacity;
    ctxRef.current = ctx;
  }, [color, width, opacity]);

  const startDrawing = (e) => {
    ctxRef.current.beginPath();
    ctxRef.current.moveTo(
      e.nativeEvent.offsetX,
      e.nativeEvent.offsetY);
    setIsDrawing(true);
  };

  const endDrawing = () => {
    ctxRef.current.closePath();
    setIsDrawing(false);
  };

  const draw = (e) => {
    if (!isDrawing) return;

    const ctx = ctxRef.current;

    if (isErase) {
      ctx.globalCompositeOperation = "destination-out"; // it sets erase mode
    } else {
      ctx.globalCompositeOperation = "source-over"; // it reset to default mode
    }


    ctxRef.current.lineTo(
      e.nativeEvent.offsetX,
      e.nativeEvent.offsetY
    );
    ctxRef.current.stroke();
  };

  const handleErase = () => {
    setIsErase(!isErase);
    if (!isErase) {
      ctxRef.current.globalCompositeOperation = "source-over";
    }
  };

  return (
    <>
    <canvas
      ref={canvasRef}
      onMouseDown={startDrawing}
      onMouseUp={endDrawing}
      onMouseMove={draw}
      width={800}
      height={600}
      style={{ border: "1px solid black" }}
    />
    <button onClick={handleErase} className={isErase ? "brush-button" : "eraser-button"}>
    {isErase ? "Brush" : "Eraser"}
    </button>
    </>
  );
};

export default Canvas;
