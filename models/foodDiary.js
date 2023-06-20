const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const FoodDiarySchema = new Schema({
    user: {type: ObjectId, ref: 'User', required: true},
    food: {type : ObjectId, ref: 'Food', required: true},
    createdAt: {type: Date, default: Date.now},
    mealsAt: {type: String, required: true},
    modifiedAt: {type: Date, required: false}
})

module.exports = mongoose.model("FoodDiary", FoodDiarySchema);