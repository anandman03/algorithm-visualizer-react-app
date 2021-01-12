import {CHANGE_VALUE} from '../helper/constants.js';

// merge sort returns container with index, value, boolean
// and list of range
export const mergeSort = async(array, length) => {
    let moves = [];
    await divide(array, moves, 0, length-1);
    return moves;
};

const divide = async(array, moves, start, end) => {
    if(start < end) {
        let mid = Math.floor((end + start)/2);
        await divide(array, moves, start, mid);
        await divide(array, moves, mid+1, end);
        await merge(array, moves, start, mid, end);
    }
};

export const merge = async(array, moves, start, mid, end) => {
    let sortedArray = [];
    let i = start, j = mid+1;
    while(i <= mid && j <= end) {
        if(array[i] <= array[j]) sortedArray.push(array[i++]);
        else sortedArray.push(array[j++]);
    }
    while(i <= mid) {
        sortedArray.push(array[i++]);
    }
    while(j <= end) {
        sortedArray.push(array[j++]);
    }

    let indexes = [];
    for(let i = start ; i <= end ; ++i) {
        indexes.push(i);
    }
    for(let i = start ; i <= end ; ++i) {
        array[i] = sortedArray[i-start];
        moves.push([i, array[i], CHANGE_VALUE, indexes]);
    }
};