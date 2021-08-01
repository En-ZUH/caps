'use strict';

const events = require('./events');

pickup = (payload) => {
    console.log(`Driver : picked up ${payload.payload.orderId}`);
    setTimeout(() => {
        events.emit('inTransit', payload);

    }, 1000)
}

deliverd = (payload) => {
    payload.events = 'inTransit';
    payload.time = new Date().toDateString();
    console.log('event', payload);
    setTimeout(() => {
        events.emit('deliverd', payload);

    }, 3000)
}
module.exports = {
    pickup, deliverd
}