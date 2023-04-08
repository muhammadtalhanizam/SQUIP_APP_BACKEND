const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    password: String,
    mobile_number: String,
    dob:String,
    category:String
})

const userModel = mongoose.model("user",userSchema);

module.exports = userModel;