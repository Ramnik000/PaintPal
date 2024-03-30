import React from 'react';

const Menu = ({ setColor, setWidth, setOpacity}) => {
  return (
    <div className="menu">
      <h5>Brush Settings</h5>
      <div className="form-group">
        <label htmlFor='brush'>Brush Color:</label>
        <input type='color' className="form-control" onChange={(e) => setColor(e.target.value)}></input>
      </div>
      <div className="form-group">
        <label htmlFor='width'>Brush Width:</label>
        <input type='range' className="form-control-range" min='3' max='20' onChange={(e) => setWidth(e.target.value)}></input>
      </div>
      <div className="form-group">
        <label htmlFor='opacity'>Brush Opacity:</label>
        <input type='range' className="form-control-range" min='1' max='100' onChange={(e) => setOpacity(e.target.value)}></input>
      </div>
      
    </div>
  );
}

export default Menu;
