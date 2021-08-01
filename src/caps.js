'use strict';
const Events = require('../events');
const driver = require('./driver');
const driver = require('./vendor');


setInterval(() => {
    events.emit('pickup', { event: 'pickup', time: `${new Date().toString()}`, payload: vendor.order() });

}, 5000)

events.on('pickup', driver.pickup);
events.on('in-transit', driver.deliverd);
events.on('deliverd', vendor.gratitude);