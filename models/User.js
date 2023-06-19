const mongoose = require('mongoose');

const {Schema} = mongoose;
const UserSchema = new Schema({
    userId: {
        type: String,
        required: true,
        unique: true,
    },
    age: {
        type: Number,
        required: false,
    },
    userHeight: {
        type: Number,
        required: false
    },
    userWeight: {
        type: Number,
        required: false
    },
    goalWeight: {
        type: Number,
        required: false
    }
})