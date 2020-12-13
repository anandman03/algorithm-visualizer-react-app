const pause = async(speed) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, 500/speed);
    });
}

export default pause;