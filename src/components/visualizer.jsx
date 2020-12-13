import React from 'react';

// components
import Navbar from './navbar';
import Frame from './frame';
import Footer from './footer';

// helpers
import pause from './helper/pause';
import generator from './helper/generator';
import swap from './helper/swap';
import compare from './helper/compare';

class Visualizer extends React.Component {
    state = {
        list: [],
        size: 10,
        speed: 1,
        algorithm: 1,
        running: false,
    };

    componentDidMount() {
        this.generateList();
    }

    componentDidUpdate() {
        this.onChange();
        this.generateList();
    }

    render() { 
        return (
            <React.Fragment>
                <Navbar
                    start = {this.start}
                    response = {this.response}
                    newList = {this.generateList}
                    onChange = {this.onChange.bind(this)}
                />
                <Frame 
                    list = {this.state.list}
                />
                <Footer />
            </React.Fragment>
        );
    }

    onChange = (value, option) => {
        if(option === "algo" && !this.state.running) {
            this.setState({ algorithm: Number(value) });
        }
        else if(option === "speed") {
            this.setState({ speed: Number(value) });
        }
        else if(option === "size" && !this.state.running) {
            this.setState({ size: Number(value) });
            this.generateList();
        }
        console.log(this.state);
    };

    generateList = (value = 0) => {
        if((this.state.list.length !== this.state.size && !this.state.running) || Number(value) === 1) {
            let list = generator(this.state.size);
            this.setState({ list: list });
        }
	};

    start = async() => {
        let algorithm = this.state.algorithm;
        this.setState({ running: true });

        if(algorithm === 1) {
            await this.bubbleSort();
        }
        if(algorithm === 3) {
            await this.insertionSort();
        }
    };

    bubbleSort = async() => {
        let array = [...this.state.list], length = this.state.size;
        for(let i = 0 ; i < length-1 ; ++i) {
            for(let j = 0 ; j < length-i-1 ; ++j) {
                await this.modify(array, [j, j+1], 1);
                if(compare(array[j].key, array[j+1].key, '>')) {
                    await swap(array, j, j+1);
                    await this.transition(array);
                }
                await this.modify(array, [j, j+1], 0);
            }
            await this.modify(array, [this.state.size-i-1], 2);
        }
        await this.modify(array, [0], 2);
    };

    insertionSort = async() => {
        let array = [...this.state.list], length = this.state.size;
        for(let i = 0 ; i < length-1 ; ++i) {
            let j = i;
            while(j >= 0 && compare(array[j].key, array[j+1].key, '>')) {
                await this.modify(array, [j, j+1], 1);
                await swap(array, j, j+1);
                await this.modify(array, [j, j+1], 0);
                --j;
            }
        }
        for(let i = 0 ; i < length ; ++i) {
            await this.modify(array, [i], 2);
        }
    };

    modify = async (array, index, value) => {
        for(let i = 0 ; i < index.length ; ++i) {
            array[index[i]].value = value;
        }
        await this.transition(array);
    };

    transition = async(newList) => {
        this.setState({list: newList});
        await pause(this.state.speed);
    };
    
    response = () => {
        let Navbar = document.querySelector(".navbar");
        if(Navbar.className === "navbar") Navbar.className += " responsive";
        else Navbar.className = "navbar";
    };
}
 
export default Visualizer;