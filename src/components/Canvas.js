import React, { useEffect, useRef, useState, useCallback } from "react";

const Canvas = ({ color, width, opacity, text }) => {
  const canvasRef = useRef(null);
  const drawingRef = useRef([]);
  const ctxRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [isErase, setIsErase] = useState(false);

  const draw = useCallback((e) => {
    if (!isDrawing) return;

    const ctx = ctxRef.current;

    if (isErase) {
      ctx.globalCompositeOperation = "destination-out"; // it sets erase mode
    } else {
      ctx.globalCompositeOperation = "source-over"; // it reset to default mode
    }

    const { offsetX, offsetY } = e.nativeEvent;
    ctxRef.current.lineTo(offsetX, offsetY);
    ctxRef.current.stroke();

    drawingRef.current.push({ x: offsetX, y: offsetY });
  }, [isDrawing, isErase]);

  const startDrawing = useCallback((e) => {
    ctxRef.current.beginPath();
    setIsDrawing(true);
    const { offsetX, offsetY } = e.nativeEvent;
    ctxRef.current.moveTo(offsetX, offsetY);
    drawingRef.current.push({ x: offsetX, y: offsetY });
  }, []);

  const endDrawing = useCallback(() => {
    setIsDrawing(false);
    ctxRef.current.closePath();
  }, []);

  const handleErase = useCallback(() => {
    setIsErase(true);
  }, []);

  const handleBrush = useCallback(() => {
    setIsErase(false);
  }, []);

  const drawText = useCallback(() => {
    const ctx = ctxRef.current;
    ctx.fillStyle = color;
    ctx.font = "20px Arial";
    ctx.fillText(text, 20, 20);
  }, [color, text]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctxRef.current = ctx;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.globalAlpha = opacity;
  }, [color, width, opacity]);

  useEffect(() => {
    drawingRef.current.forEach((point, index) => {
      if (index === 0) {
        ctxRef.current.beginPath();
        ctxRef.current.moveTo(point.x, point.y);
      } else {
        ctxRef.current.lineTo(point.x, point.y);
        ctxRef.current.stroke();
      }
    });
  }, []);

  useEffect(() => {
    drawText();
  }, [drawText]);

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
      <div>
        <button onClick={handleErase} className="eraser-button">
          Eraser
        </button>
        <button onClick={handleBrush} className="brush-button">
          Brush
        </button>
      </div>
    </>
  );
};

export default Canvas;
