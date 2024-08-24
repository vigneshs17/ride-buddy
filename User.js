var mongoose = require('mongoose'),
    Schema = mongoose.Schema

const UserSchema = new Schema({
    name: { type: String, required: true },
    phone: { type: String },
    locality: { type: Number },
    vehicleType: { type: String },
    email: { type: String, required: true, index: { unique: true } },
    password: { type: String },
})

module.exports = mongoose.model('User', UserSchema);