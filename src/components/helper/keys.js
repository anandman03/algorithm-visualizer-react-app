export const getKeysCopy = async(array, length) => {
    let list = [];
    for(let i = 0 ; i < length ; ++i) {
        list.push(Number(array[i].key));
    }
    return list;
};