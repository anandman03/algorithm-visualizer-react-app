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
        algorithm: 1
    };
    
    componentDidMount() {
        this.generateList();
        document.querySelector('.size-menu').addEventListener('change', this.updateValue);
        document.querySelector('.speed-menu').addEventListener('change', this.updateValue);
        document.querySelector('.algo-menu').addEventListener('change', this.updateValue);
    }

    render() { 
        return (
            <React.Fragment>
                <Navbar
                    start = {this.start}
                    newList = {this.generateList}
                    updateValue = {this.updateValue}
                />
                <Frame 
                    list = {this.state.list}
                />
                <Footer />
            </React.Fragment>
        );
    }

    generateList = () => {
		let list = generator(this.state.size);
        this.setState({ list: list });
	};

    updateValue = () => {
        let algo = document.querySelector('.algo-menu').value;
        let speed = document.querySelector('.speed-menu').value;
        let size = document.querySelector('.size-menu').value;
        this.setState({
            size: Number(size),
            speed: Number(speed),
            algorithm: Number(algo)
        });
        console.log(this.state);
        this.generateList();
        console.log(this.state);
    };

    start = async() => {
        let algorithm = this.state.algorithm;

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
                await this.modify(array, j, 1);
                await this.modify(array, j+1, 1);
                if(compare(array[j].key, array[j+1].key, '>')) {
                    await swap(array, j, j+1);
                    await this.transition(array);
                }
                await this.modify(array, j, 0);
                await this.modify(array, j+1, 0);
            }
            await this.modify(array, this.state.size-i-1, 2);
        }
        await this.modify(array, 0, 2);
    };

    insertionSort = async() => {
        let array = [...this.state.list], length = this.state.size;
        for(let i = 0 ; i < length-1 ; ++i) {
            let j = i;
            while(j >= 0 && compare(array[j].key, array[j+1].key, '>')) {
                await this.modify(array, j, 1);
                await this.modify(array, j+1, 1);
                await swap(array, j, j+1);
                await this.modify(array, j, 0);
                await this.modify(array, j+1, 0);
                --j;
            }
        }
        for(let i = 0 ; i < length ; ++i) {
            await this.modify(array, i, 2);
        }
    };

    modify = async (array, index, value) => {
        array[index].value = value;
        await this.transition(array);
    };

    transition = async(newList) => {
        this.setState({list: newList});
        await pause();
    };
}
 
export default Visualizer;