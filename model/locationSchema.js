const mongoose = require("mongoose")

const locationSchema = mongoose.Schema({
    id: String,
    request_type:String,
    request_name:String,
    longitude: String,
    latitude: String,
});
const LocationModel = mongoose.model("request",locationSchema);
module.exports = LocationModel;