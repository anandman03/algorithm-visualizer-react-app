import {SWAP} from '../helper/constants.js';
import {swap} from '../helper/swap.js';

// quick sort returns container with 2 indexes and boolean
// describing to swap or not
export const quickSort = async(array, length) => {
    let moves = [];
    await divider(moves, array, 0, length-1);
    return moves;
};

const divider = async(moves, array, start, end) => {
    if(start < end) {
        let pivot = await partition(moves, array, start, end);
        await divider(moves, array, start, pivot-1);
        await divider(moves, array, pivot+1, end);
    }
};

const partition = async(moves, array, start, end) => {
    let prevIndex = start - 1;
    for(let index = start ; index < end ; ++index) {
        if(index !== end) {
            moves.push([index, end, !SWAP]);
        }
        if(array[index] < array[end]) {
            ++prevIndex;
            await swap(array, index, prevIndex);
            moves.push([index, prevIndex, SWAP]);
        }
    }
    await swap(array, prevIndex+1, end);
    moves.push([end, prevIndex+1, SWAP]);
    return prevIndex+1;
};