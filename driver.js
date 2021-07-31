'use strict';

const events = require('./events');

events.on('pickUp', pickUp);

pickUp = (payload) => {
    setInterval(() => {
        console.log(`the driver picked up ${payload.orderId}`);
        events.emit('in-transit', payload);
    }, 1000);
    setInterval(() => {
        console.log(`the driver delivered up ${payload.orderId}`);
        events.emit('delivered', payload);
    });
}


module.exports = pickUp;