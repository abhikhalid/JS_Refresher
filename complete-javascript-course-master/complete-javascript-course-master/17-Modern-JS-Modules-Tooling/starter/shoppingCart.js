// Exporting Module
console.log(`Exporting Module`);

console.log('Start Fetching users');

// await fetch(`https://jsonplaceholder.typicode.com/users`);

// the code in script.js has to wait
// console.log('Finish fetching users');

const shippingCost = 10;
export const cart = [];

// writing export before a function creates a named export from this module.


// export always need to happen in top level cart
// if (true) {
export const addToCart = function (product, quantity) {
    cart.push({
        product,
        quantity
    });
    console.log(`${quantity} ${product} added to cart`);
}
// }

const totalPrice = 237;
const totalQuantity = 23;

// this is little bit like exporting object from this module
//exporting multiple values
export { totalPrice, totalQuantity as tq };

// we use 'default export' when we want to export one thing per module. that's the reason they are called default. when we import it we can give any name we want.

export default function (product, quantity) {
    cart.push({
        product,
        quantity
    });
    console.log(`${quantity} ${product} added to cart`);
};