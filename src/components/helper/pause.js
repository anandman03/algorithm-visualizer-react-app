const pause = async() => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, 100);
    });
}

export default pause;