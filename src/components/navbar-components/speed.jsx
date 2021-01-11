import React from 'react';

// Speed list component
const Speed = (props) => {
    return (
        <span className="options">
            <select 
                name="Algorithm" id="menu" className="speed-menu"
                onChange = {(e) => props.onChange(e.target.value, "speed")}>
                {props.speeds.map(element => (
                    <option 
                        key = {element}
                        value = {element}>
                        {element}x
                    </option>
                ))}
            </select>
        </span>
    );
}
 
export default Speed;