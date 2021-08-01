'use strict';

require('dotenv').config();

const storeName = process.env.STORE_NAME || 'deliverd';
const events = require('../events');
const fake = require('faker');


let payload = {
    storeName: process.env.STORE_NAME || storeName,
    orderId: fake.datatype.uuid(),
    customerName: fake.name.findName(),
    address: fake.address.city(),

};
newCustomerOrder = () => {

    console.log('new order to deliver');
    events.emit('pickup', {
        event: 'pickup',
        time: new Date().toDateString(),
        payload: payload
    })
}
gratitude = (payload) => {
    payload.event = 'Delivered';
    payload.time = new Date().toDateString();
    console.log(`Thanks for delivering ${payload.payload.orderId}`);
    console.log('Event', payload);
}

module.exports = {
    newCustomerOrder: newCustomerOrder,
    thanks: thanks
}