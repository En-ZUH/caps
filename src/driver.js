'use strict';

const events = require('./events');

events.on('Pickup', pickup);

function pickup(payload) {

    setTimeout(() => {
        console.log(`Driver : picked up ${payload.orderId}`);
        events.emit('inTransit', payload);
    }, 1000);

    setTimeout(() => {
        console.log(`Driver : Delivered ${payload.orderId}`);
        events.emit('delivered', payload);
    }, 3000);


}
module.exports = pickup;
