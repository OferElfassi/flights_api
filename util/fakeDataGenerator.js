const faker = require('faker');
const Flight = require('../models/flight-model')
const mongoose = require('mongoose')

exports.fakeFlights = async (count)=>{
    if(mongoose.connection.collections.flights) {
      await mongoose.connection.collections.flights.drop();
    }
    for (let i = 0; i<count;i++){
        const flight = new Flight({
          destination: faker.address.city(),
          date: faker.date.future(),
        });
        await flight.save();
    }
}
