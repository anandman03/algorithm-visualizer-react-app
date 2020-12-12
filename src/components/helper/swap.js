const swap = async (array, index1, index2) => {
    let cache = array[index1].key;
    array[index1].key = array[index2].key;
    array[index2].key = cache;
};

export default swap;