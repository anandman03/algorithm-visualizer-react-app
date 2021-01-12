import {SWAP} from '../helper/constants.js';
import {swap} from '../helper/swap.js';
import { merge } from './mergeSort.js';

export const twistSort = async(array, length) => {
    let moves = [];
    await divider(moves, array, 0, length-1);
    return moves;
};

const divider = async(moves, array, start, end) => {
    if(end - start > 10) {
        let mid = Math.floor((end+start)/2);
        await divider(moves, array, start, mid);
        await divider(moves, array, mid+1, end);
        await merge(array, moves, start, mid, end);
    }
    else {
        await insertionSort(moves, array, start, end);
    }
};

export const insertionSort = async(moves, array, start, end) => {
    for(let i = start ; i < end ; ++i) {
        let j = i;
        while(j >= start && array[j] > array[j+1]) {
            await swap(array, j, j+1);
            moves.push([j, j+1, SWAP]);
            --j;
        }
    }
};