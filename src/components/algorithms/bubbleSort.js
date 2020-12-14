import React from 'react';

const BubbleSort = (props) => {
    return (
        <div> {bubbleSort()} </div>
    );
    function bubbleSort() {
        console.log(props);
    };
}

export default BubbleSort;