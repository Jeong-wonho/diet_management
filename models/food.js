const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FoodSchema = new Schema(
    {
      NUTR_CONT8: { type: Number, required: false },
      NUTR_CONT9: { type: Number, required: false },
      NUTR_CONT4: { type: Number, required: false },
      NUTR_CONT5: { type: Number, required: false },
      NUTR_CONT6: { type: Number, required: false },
      NUM: { type: Number, required: true},
      NUTR_CONT7: { type: Number, required: false },
      NUTR_CONT1: { type: Number, required: false },
      NUTR_CONT2: { type: Number, required: false },
      SUB_REF_NAME: { type: String, required: false },
      NUTR_CONT3: { type: Number, required: false },
      RESEARCH_YEAR: { type: Number, required: false },
      MAKER_NAME: { type: String, required: false },
      GROUP_NAME: { type: String, required: false },
      SERVING_SIZE: { type: Number, required: false },
      SAMPLING_REGION_NAME: { type: String, required: false },
      SAMPLING_MONTH_CD: { type: String, required: false },
      SAMPLING_MONTH_NAME: { type: String, required: false },
      DESC_KOR: { type: String, required: true },
      SAMPLING_REGION_CD: { type: String, required: false },
      FOOD_CD: { type: String, required: true, unique: true},
    }
);

module.exports = mongoose.model("Food", FoodSchema);
