import React, { useEffect, useState } from "react";
import "./HexagonGrid.css";

const HexagonGrid = () => {
  const [hexagons, setHexagons] = useState([]);
  const [hexagons2, setHexagons2] = useState([]);
  const [containers, setContainers] = useState([]);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setHexagons(Array(20).fill(null));
    setHexagons2(Array(19).fill(null));
    setContainers(Array(6).fill(null));
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div>
      <div className="cursor" style={{ left: cursorPosition.x, top: cursorPosition.y }}></div>
      <div className="container3">
        {containers.map((_, i) => (
          <div className="container" key={i}>
            <div className="row">
              {hexagons.map((_, j) => (
                <div className="hexagon" key={j}></div>
              ))}
            </div>
          </div>
        ))}
        <div className="container2">
          <div className="row2">
            {hexagons2.map((_, k) => (
              <div className="hexagon2" key={k}></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HexagonGrid;
