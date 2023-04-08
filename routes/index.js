var express = require('express');
const CartProductController = require('../controllers/cartproducts');
const UserController = require('../controllers/credentials');
const FavProductController = require('../controllers/Favoriteproduct');
const LocationController = require('../controllers/location');
const ProductController = require('../controllers/product');
const TodoController = require('../controllers/todo');
var router = express.Router()

router.get("/api/test",(req,res)=>{
    res.send("SquiP")
});

router.get("/api/plantproduct", (request, response) => {
    response.json({
        message: "successfully get",
        status: true,
        products: [
            {
                id: 1,
                name: "Peperomia",
                product: "Air Purifier",
                price: "$400",
                // source: Peperomia,
                bgColor:"#9CE5CB",
                bio:"No green thumb required to keep our artificial watermelon peperomia plant looking lively and lush anywhere you place it.",
                size:"5''"
            },
            {
                id: 2,
                name: "Watermelon",
                product: "Air Purifier",
                price: "$300",
                // source: Watermelon,
                bgColor:"#FFE899",
                bio:"No green thumb required to keep our artificial watermelon peperomia plant looking lively and lush anywhere you place it.",
                size:"5''"
            },
            {
                id: 3,
                name: "Croton Petra",
                product: "Air Purifier",
                price: "$200",
                // source: Croton,
                bgColor:"#56D1A7",
                bio:"No green thumb required to keep our artificial watermelon peperomia plant looking lively and lush anywhere you place it.",
                size:"5''"
            },
            {
                id: 4,
                name: "Bird's Nest Fern",
                product: "Air Purifier",
                price: "$160",
                // source: BirdsNest,
                bgColor:"#B2E28D",
                bio:"No green thumb required to keep our artificial watermelon peperomia plant looking lively and lush anywhere you place it.",
                size:"5''"
            },
            {
                id: 5,
                name: "Cactus",
                product: "Air Purifier",
                price: "$260",
                // source: Croton,
                bgColor:"#DEEC8A",
                bio:"No green thumb required to keep our artificial watermelon peperomia plant looking lively and lush anywhere you place it.",
    
            },
            {
                id: 6,
                name: "Aloe Vera",
                product: "Air Purifier",
                price: "$210",
                // source: Alovera,
                bgColor:"#F5EDA8",
                bio:"No green thumb required to keep our artificial watermelon peperomia plant looking lively and lush anywhere you place it.",
                size:"5''"
            }
        ]
    })
})



//user credentials apis
//user signup
router.post("/api/signup", UserController.userSignUp)

//user login
router.post("/api/login", UserController.userLogin)

//single user get        //63d2914f4f578f168a217af1
router.get("/api/user", UserController.singleUserGet);

//user create
router.post("/api/user", UserController.userCreate);

//user update
router.put("/api/user", UserController.userUpdate);

//user delete
router.delete("/api/user", UserController.userDelete);

// ------------------------------------------ location

//Create API
router.post("/api/request",LocationController.createLocation)

// Get API
router.get("/api/request",LocationController.getLocation)
// ------------------------------------------

// //Create API
// router.post("/api/todo",TodoController.createTodo)

// // Get API
// router.get("/api/todo",TodoController.getTodo)

// //Delete Api
// router.delete("/api/todo/:id", TodoController.deleteTodo)

// //Edit Update API
// router.put("/api/todo",TodoController.updateTodo)



// ------------------------------------------

// //Create API
// router.post("/api/cartproduct",CartProductController.createProduct)

// // Get API
// router.get("/api/cartproduct",CartProductController.getProduct)

// //Delete Api
// router.delete("/api/cartproduct/:id", CartProductController.deleteProduct)

// //Create API
// router.post("/api/product",ProductController.createProduct)

// // Get API
// router.get("/api/product",ProductController.getProduct)

// // Get API
// router.post("/api/favoriteproduct",FavProductController.createProduct)

// // Get API
// router.get("/api/favoriteproduct",FavProductController.getProduct)
// //Delete Api
// router.delete("/api/favoriteproduct/:id", FavProductController.deleteProduct)

// //Delete Api
// router.delete("/api/product/:id", ProductController.deleteProduct)

//Edit Update API
router.put("/api/product",ProductController.updateProduct)

module.exports = router; 