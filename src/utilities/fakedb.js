// use local storage to manage cart data
const addToDb = numbers => {
    let breakTime = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('break-time');
    if (storedCart) {
        breakTime = JSON.parse(storedCart);
    }

    // add quantity
    const quantity = breakTime[numbers];
    if (quantity) {
        const newQuantity = quantity + 1;
        breakTime[numbers] = newQuantity;
    }
    else {
        breakTime[numbers] = 1;
    }
    localStorage.setItem('break-time', JSON.stringify(breakTime));
}

const getStoredTime = () => {
    let time = {};

    //get the shopping cart from local storage
    const storedTime = localStorage.getItem('break-time');
    if (storedTime) {
        time = JSON.parse(storedTime);
    }
    return time;
}

export {
    addToDb,
    getStoredTime
}