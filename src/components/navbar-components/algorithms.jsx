import React from 'react';

// Algorithm list component
const Algorithms = (props) => {
    return (
        <span className="options">
            <select 
                name="Algorithm" id="menu" className="algo-menu"
                onChange = {(e) => props.onChange(e.target.value, "algo")}>
                {props.algorithms.map(element => (
                    <option 
                        key = {element.value}
                        value = {element.value}>
                        {element.type}
                    </option>
                ))}
            </select>
        </span>
    );
}
 
export default Algorithms;