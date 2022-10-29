require("../config/db.config")
const phones = require("../data/phones.json");
const Phone = require("../models/phone.model");

Phone.deleteMany({})
  .then(() => {
    console.log("erased")
      Phone.create(phones)
        .then((phone) => {
          console.log(phone)
        });
    })
  .catch((error) => console.log(error));
