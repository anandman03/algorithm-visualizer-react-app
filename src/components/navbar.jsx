import React from 'react';

class Navbar extends React.Component {
    state = {
        Algorithms: [
			{ value: 1, type: 'Bubble Sort' },
			{ value: 2, type: 'Selection Sort' },
			{ value: 3, type: 'Insertion Sort' },
			{ value: 4, type: 'Merge Sort' },
			{ value: 5, type: 'Quick Sort' },
			{ value: 6, type: 'Heap Sort' },
			{ value: 7, type: 'Depth First Search' },
			{ value: 8, type: 'Breadth First Search' },
			{ value: 9, type: 'Linear Search' },
			{ value: 10, type: 'Binary Search' },
		],
		lengths: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
		speeds: [0.50, 0.75, 1.00, 2.00, 4.00]
    };

    render() {
        return (
            <div className="navbar" id="navbar">
                <button id="random" onClick = {() => this.props.newList()}>Random</button>
                
                <span className="options">
                    <select name="Algorithm" id="menu" className="algo-menu">
                        {this.state.Algorithms.map(element => (
                            <option 
                                key = {element.value}
                                value = {element.value}>
                                {element.type}
                            </option>
                        ))}
                    </select>
                </span>

                <span className="options">
                    <select name="size" id="menu" className="size-menu">
                        {this.state.lengths.map(element => (
                            <option 
                                key = {10*element}
                                value = {element}>
                                {element}
                            </option>
                        ))}
                    </select>
                </span>

                <span className="options">
                    <select name="Algorithm" id="menu" className="speed-menu">
                        {this.state.speeds.map(element => (
                            <option 
                                key = {element}
                                value = {element}>
                                {element}x
                            </option>
                        ))}
                    </select>
                </span>

                <button id="random" onClick = {() => this.props.start()}>Start</button>
                <a className="icon" 
                    href = "javascript:" 
                    onClick = {() => this.props.response()}>
                        <i class="fa fa-bars"></i>
                </a>
            </div>
        );
    }
}
 
export default Navbar;