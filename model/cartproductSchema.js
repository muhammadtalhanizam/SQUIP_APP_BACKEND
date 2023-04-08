const mongoose = require("mongoose")

const productSchema= mongoose.Schema({
    // id: String,
    name: String,
    product: String,
    price: String,
    source: String,
    bgColor: String,
    bio: String,
    quantity:Number,
    size: String,
        create_at:{
            type: Date,
            default: Date.now()
        }
    });
 const ProductModel = mongoose.model("Cartproduct",productSchema);
 module.exports = ProductModel;