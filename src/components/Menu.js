import React from 'react';

const Menu=({setColor, setWidth, setOpacity})=>{

    return(
        <div className="menu">
            <label htmlFor='brush'>Brush:</label>
            <input type='color' onChange={(e) => setColor(e.target.value)}></input>

            <label htmlFor='width'>Width:</label>
            <input type='range' min='3' max='20' onChange={(e) => setWidth(e.target.value)}></input>

            <label htmlFor='opacity'>Opacity:</label>
            <input type='range' min='1' max='100' onChange={(e) => setOpacity(e.target.value)}></input>
        </div>
    );

}
export default Menu;