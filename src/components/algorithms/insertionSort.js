import {SWAP} from '../helper/constants.js';
import {swap} from '../helper/swap.js';

export const insertionSort = async(array, length) => {
    let moves = [];
    for(let i = 0 ; i < length-1 ; ++i) {
        let j = i;
        while(j >= 0 && array[j] > array[j+1]) {
            await swap(array, j, j+1);
            moves.push([j, j+1, SWAP]);
            --j;
        }
    }
    return moves;
};