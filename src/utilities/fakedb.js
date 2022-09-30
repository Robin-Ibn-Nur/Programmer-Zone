const getStoredTime = () => {
    let time = {};

    //get the shopping cart from local storage
    const storedTime = localStorage.getItem('break-time');
    if (storedTime) {
        time = JSON.parse(storedTime);
    }
    return time;
}

export { getStoredTime }