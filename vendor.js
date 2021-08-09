'use strict';

require('dotenv').config();
const events = require('./events');

const fake = require('faker');
const storeName = process.env.STORE_NAME || ' ';



class Order {
    constructor(storeName) {
        this.storeName = storeName;
        this.orderId = fake.datatype.uuid();
        this.customerName = fake.name.findName();
        this.address = fake.address.city();
    };
}

setTimeout(() => {
    let fakeOrder = new Order(storeName);
    events.emit('Pickup', fakeOrder);
}, 5000);


events.on('delivered', payload => {
    console.log(`Thanks for delivering  ${payload.orderId}`);
});

module.exports = Order;