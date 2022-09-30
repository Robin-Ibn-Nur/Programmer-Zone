// use local storage to manage cart data
const addToDb = numbers => {
    let shoppingCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }

    // add quantity
    const quantity = shoppingCart[numbers];
    if (quantity) {
        const newQuantity = quantity + 1;
        shoppingCart[numbers] = newQuantity;
    }
    else {
        shoppingCart[numbers] = 1;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}

const getStoredTime = () => {
    let time = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        time = JSON.parse(storedCart);
    }
    return time;
}

export {
    addToDb,
    getStoredTime
}