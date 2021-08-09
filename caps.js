'use strict';
const events = require('./events');
events.on('pickup', pickup);
events.on('in-transit', delivered);
events.on('delivered', gratitude);


function pickup(payload) {

    let data = {
        event: 'pickup',
        time: new Date().toLocaleString(),
        payload: payload,
    }
    console.log(`Driver : picked up ${data}`);
}

function delivered(payload) {
    let data = {
        event: 'inTransit',
        time: new Date().toLocaleString(),
        payload: payload,
    }
    console.log(`Driver : inTransit ${data}`);
}

function gratitude(payload) {
    let data = {
        event: 'Delivered',
        time: new Date().toLocaleString(),
        payload: payload,
    }
    console.log('Driver', data);
}

module.exports = { pickup, delivered, gratitude }