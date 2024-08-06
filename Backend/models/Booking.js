const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let bookingSchema = new Schema({
 name: {
 type: String,
 required:true
 },
 ename: {
 type: String
 },
 dates: {
    type: String
    },
 seatno: {
 type: Number
 },
 price:{
    type:Number
 }
})
module.exports = mongoose.model('Booking', bookingSchema)