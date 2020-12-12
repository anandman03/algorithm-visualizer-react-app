const compare = (value1, value2, sign) => {
    if(sign === '>') {
        return (Number(value1) > Number(value2));
    }
    else {
        return (Number(value1) < Number(value2));
    }
};

export default compare;