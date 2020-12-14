const pause = async(speed) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, 450/speed);
    });
}

export default pause;