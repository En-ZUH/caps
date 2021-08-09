'use strict';
require('dotenv').config();

const events = require('../events');

describe('Event Test Working', () => {
    let consoleSpy;
    let data = {
        storeName: process.env.store,
        orderId: 'ca900968-0607-4660-94a8-4c0e50c7d5c8',
        customer: 'JaK',
        adress: 'Japan',
    };
    beforeEach(() => {
        consoleSpy = jest.spyOn(console, 'log').mockImplementation();

    });

    afterEach(() => {
        consoleSpy.mockRestore();
    });

    test('pickUp time after 1 sec', async () => {
        events.emit('PickUp', data);
        await consoleSpy();
        expect(consoleSpy).toHaveBeenCalled();
    })

    test('inTransit', async () => {
        events.emit('InTransit', data);
        await consoleSpy();
        expect(consoleSpy).toHaveBeenCalled();
    });
    test('Delivered', async () => {
        events.emit('Delivered', data);
        await consoleSpy();
        expect(consoleSpy).toHaveBeenCalled();
    });


});