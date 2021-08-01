'use strict';
require('dotenv').config();

const vendor = require('../src/vendor');
const fake = require('faker');
const driver = require('../src/driver');


describe('Event Connectivity', () => {

    let order = {
        storeName: process.env.store || 'delivery store',
        orderId: fake.datatype.uuid(),
        customerName: fake.name.findName(),
        address: `${fake.address.city()},${fake.address.stateAbbr()}`
    }


    let payload = {
        event: 'pickup',
        time: new Date().toDateString(),
        payload: order
    }



    jest.useFakeTimers();
    let consoleSpy;

    beforeAll(() => {
        consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    })


    afterAll(() => {
        consoleSpy.mokRestore;
    })



    it('new Customer Order', () => {
        vendor.newCustomerOrder()
        expect(consoleSpy).toHaveBeenCalled();
    })


    it('pickUp time after 1 sec', () => {
        driver.pickup(payload);
        expect(consoleSpy).toHaveBeenCalled();
    })
})