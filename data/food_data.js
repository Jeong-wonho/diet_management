//품의약품 안전처 API URL
const axios = require("axios");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const Food = require("../models/food.js");
dotenv.config({ path: "../.env" });

const USER = process.env.DB_USER;
const PWD = process.env.DB_PASS;
const HOST = "localhost:27017";
const DB = process.env.DB_NAME;
const apiKey = process.env.DB_KEY;

let total = 0;
let isTotal = true;
let idx = 9000;
let startIdx = 0;
let endIdx = 0;

const mongodbURL = `mongodb://${USER}:${PWD}@${HOST}/${DB}`;

// const apiUrl = `https://openapi.foodsafetykorea.go.kr/api/${apiKey}/I2790/json/20/1000/`;

async function insertData() {
  startIdx = idx+1;
  endIdx = idx + 1000;

  const apiUrl = `https://openapi.foodsafetykorea.go.kr/api/${apiKey}/I2790/json/${startIdx}/${endIdx}/`;
  console.log("url정보", apiUrl);
  const response = await axios.get(apiUrl);
  const data = response.data.I2790.row;
  total = response.data.I2790.total_count;
  console.log("total 확인", total);
  console.log("데이터", data);

  // if (data && Array.isArray(data)) {
  //   mongoose
  //     .connect(mongodbURL, { useNewUrlParser: true })
  //     .then(() => console.log("connection succesful"))
  //     .catch((err) => console.error(err));
  //   console.log("데이터확인:", data);
  //   Food.insertMany(data, { ordered: false })
  //     .then(() => {
  //       console.log("Success Insert Data");
  //       mongoose.connection.close();
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }
}
insertData();
// while (isTotal) {
//   startIdx = idx + 1;
//   endIdx = idx + 1000;

//   insertData(startIdx, endIdx);

//   if (total < endIdx) {
//     endIdx = total;
//     isTotal = false;
//   }

//   idx = endIdx;
//   console.log(`${idx} 까지 완료!`)
// }
// axios
//   .get(apiUrl)
//   .then((response) => {
//     data = response.data.I2790.row;
//     console.log(data);
//     console.log("data 호출 성공");
//   })
//   .catch((error) => {
//     console.error("API 에러 발생:", error);
//   });

// const main = async () => {
//   const new_Food = new Food(data);
//   await new_Food.save();
//   console.log("데이터 저장 성공");
// };

// main();
