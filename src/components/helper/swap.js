export const swap = async (array, index1, index2) => {
    let cache = array[index1];
    array[index1] = array[index2];
    array[index2] = cache;
};