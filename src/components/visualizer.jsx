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
    };

    generateList = (value = 0) => {
        if((this.state.list.length !== this.state.size && !this.state.running) || Number(value) === 1) {
            let list = generator(this.state.size);
            this.setState({ list: list });
        }
	};

    start = async() => {
        this.lock(true);
        let algorithm = this.state.algorithm;
        if(algorithm === 1) await this.bubbleSort();
        if(algorithm === 2) await this.selectionSort();
        if(algorithm === 3) await this.insertionSort();
        if(algorithm === 4) await this.mergeSort();
        if(algorithm === 5) await this.quickSort();
        if(algorithm === 6) await this.heapSort();
        this.done(this.state.list);
        this.lock(false);
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

    selectionSort = async() => {
        let array = [...this.state.list], length = this.state.size;
        for(let i = 0 ; i < length ; ++i) {
            let minIndex = i;
            for(let j = i+1 ; j < length ; ++j) {
                await this.modify(array, [minIndex, j], 1);
                if(compare(array[j].key, array[minIndex].key, '<')) {
                    await this.modify(array, [minIndex], 0);
                    minIndex = j;
                    await this.modify(array, [minIndex], 1);
                }
                await this.modify(array, [j], 0);
            }
            await this.modify(array, [i], 1);
            await swap(array, minIndex, i);
            await this.modify(array, [i, minIndex], 0);
        }
    };

    insertionSort = async() => {
        let array = [...this.state.list], length = this.state.size;
        for(let i = 0 ; i < length-1 ; ++i) {
            for(let j = i ; j >= 0 && compare(array[j].key, array[j+1].key, '>') ; --j) {
                await this.modify(array, [j, j+1], 1);
                await swap(array, j, j+1);
                await this.modify(array, [j, j+1], 0);
            }
        }
    };

    mergeSort = async() => {
        await this.mergeDivider(0, this.state.size-1);
    };
    mergeDivider = async(start, end) => {
        if(start < end) {
            let Mid = Math.floor((end+start)/2);
            await this.mergeDivider(start, Mid);
            await this.mergeDivider(Mid+1, end);
            await this.merge(start, Mid, end);
        }
    };
    merge = async(start, mid, end) => {
        let list = [...this.state.list], array = [];
        let i = start, j = mid+1;
        while(i <= mid && j <= end) {
            if(compare(list[i].key, list[j].key, '>')) array.push(list[j++].key);
            else array.push(list[i++].key);
        }
        while(i <= mid) {
            array.push(Number(list[i++].key));
        }
        while(j <= end) {
            array.push(Number(list[j++].key));
        }
        for(let k = start ; k <= end ; ++k) {
            await this.modify(list, [k], 1);
        }
        for(let x = 0, y = start ; y <= end && x < array.length ; ++x, ++y) {
            list[y].key = Number(array[x]);
            this.setState({ list: list });
        }
        for(let k = start ; k <= end ; ++k) {
            await this.modify(list, [k], 0);
        }
    };

    quickSort = async() => {
        await this.quickDivider(0, this.state.size-1);
    };
    quickDivider = async(start, end) => {
        if(start < end) {
            let pivot = await this.partition(start, end);
            await this.quickDivider(start, pivot-1);
            await this.quickDivider(pivot+1, end);
        }
    };
    partition = async(start, end) => {
        let array = [...this.state.list];
        let prevIndex = start - 1;
        await this.modify(array, [end], 1);
        for(let i = start ; i < end ; ++i) {
            await this.modify(array, [i], 1);
            if(compare(array[i].key, array[end].key, '<')) {
                prevIndex += 1;
                await this.modify(array, [prevIndex], 1);
                await swap(array, i, prevIndex);
                await this.modify(array, [prevIndex], 0);
            }
            await this.modify(array, [i], 0);
        }
        await swap(array, prevIndex+1, end);
        await this.modify(array, [end], 0);
        return prevIndex+1;
    };

    heapSort = async() => {
        let array = [...this.state.list];
        for(let i = array.length-1 ; i >= 0 ; --i) {
            await this.heapify(array, array.length, i);
        }
        for(let i = this.state.size-1 ; i > 0 ; --i) {
            await this.modify(array, [i, 0], 1);
            await swap(array, i, 0);
            await this.modify(array, [i, 0], 0);
            await this.heapify(array, i, 0);
        }
    };
    heapify = async(array, currSize, index) => {
        let currLargest = index;
        let Lchild = 2*index+1, Rchild = 2*index+2;
        if(Lchild < currSize && compare(array[currLargest].key, array[Lchild].key, '<')) {
            currLargest = Lchild;
        }
        if(Rchild < currSize && compare(array[currLargest].key, array[Rchild].key, '<')) {
            currLargest = Rchild;
        }
        if(currLargest !== index) {
            await this.modify(array, [currLargest, index], 1);
            await swap(array, currLargest, index);
            await this.modify(array, [currLargest, index], 0);
            await this.heapify(array, currSize, currLargest);
        }
    };

    lock = (status) => {
        this.setState({ running: Boolean(status) });
    };

    done = async(array) => {
        for(let i = 0 ; i < array.length ; ++i) {
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