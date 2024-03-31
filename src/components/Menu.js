import React, { useState } from 'react';

const Menu = ({ setColor, setWidth, setOpacity, setText }) => {

 
  const handleChangeText = (e) => {
    const text = e.target.value;
    setText(text);
  };

  return (
    <div className="menu">
      <h3>Brush Settings</h3>
      <div className="form-group">
        <label htmlFor="brush">Brush Color:</label>
        <input type="color" className="form-control" onChange={(e) => setColor(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="width">Brush Width:</label>
        <input type="range" className="form-control-range" min="3" max="20" onChange={(e) => setWidth(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="opacity">Brush Opacity:</label>
        <input type="range" className="form-control-range" min="1" max="100" onChange={(e) => setOpacity(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="text">Add your text:</label>
        <input type="text" className="form-control-range" placeholder="Enter text to add" onChange={handleChangeText} />
        <br />
      </div>
    </div>
  );
};

export default Menu;