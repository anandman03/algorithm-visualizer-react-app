import {SWAP} from '../helper/constants.js';
import {swap} from '../helper/swap.js';

export const bubbleSort = async(array, length) => {
    let moves = [];
    for(let i = 0 ; i < length-1 ; ++i) {
        for(let j = 0 ; j < length-i-1 ; ++j) {
            if(array[j] > array[j+1]) {
                await swap(array, j, j+1);
                moves.push([j, j+1, SWAP]);
            }
            else {
                moves.push([j, j+1, !SWAP]);
            }
        }
    }
    return moves;
};