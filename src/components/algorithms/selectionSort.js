import {SWAP} from '../helper/constants.js';
import {swap} from '../helper/swap.js';

// selection sort returns container with 2 indexes and boolean
// describing to swap or not
export const selectionSort = async(array, length) => {
    let moves = [];
    for(let i = 0 ; i < length-1 ; ++i) {
        let minIndex = i;
        for(let j = i+1 ; j < length ; ++j) {
            if(array[j] < array[minIndex]) {
                minIndex = j;
            }
            moves.push([j, minIndex, !SWAP]);
        }
        await swap(array, i, minIndex);
        moves.push([i, minIndex, SWAP]);
    }
    return moves;
};