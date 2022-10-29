const Phone = require("../models/phone.model")

module.exports.allPhones = (req, res, next) => {
    Phone.find()
        .then((data) => res.json(data))
        .catch((error) => console.error(error))
}

module.exports.phoneDetail = (req, res, next) => {
    Phone.findOne({id: req.params.id})
        .then((phone) => {
            console.log(phone)
            res.json(phone)})
}

