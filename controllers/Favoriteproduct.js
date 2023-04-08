const FavProductModel = require("../model/favproductSchema")

const FavProductController = {
    getProduct: (request, response) => {
        FavProductModel.find({}, (error, data) => {
            if (error) {
                response.json({
                    message: `INTERNAL Server ERROR${error}`,
                    status: false,
                })
            } else {
                response.json({
                    message: `successfully get`,
                    status: true,
                    data: data
                })
            }
        })
    },

    createProduct: (request, response) => {
        const body = request.body;
        console.log(body, "body");
        const { id, name, product, price, source, bgColor,size,bio } = request.body;

        if (!name || !size) {
            response.json({
                message: "Required Fields are Missing ",
                status: false,
            });
            return;
        }
        const objToSend = {
            id: id,
            name: name,
            product: product,
            price: price,
            source: source,
            bgColor: bgColor,
            bio: bio,
            size: size,
        };

        FavProductModel.create(objToSend, (error, data) => {
            if (error) {
                response.json({
                    message: `INTERNAL ERROR${error}`,
                    status: false,
                });
            } else {
                response.json({
                    message: `Added to Favorite`,
                    status: true,
                })
            }
        })
    },

    deleteProduct: (request, response) => {
        const { id } = request.params;
        // console.log(id)
        FavProductModel.findByIdAndDelete(id, (error, data) => {
            if (error) {
                response.json({
                    message: `INTERNAL Server ERROR${error}`,
                    status: false,
                })
            } else {
                response.json({
                    message: `successfully remove from favorite`,
                    status: true,
                })
            }
        })
    },

    updateProduct: (request, response) => {
        const body = request.body;
        console.log(body, "body");
        if (!body.todo) {
            response.json({
                message: "Required Fields are Missing ",
                status: false,
            });
            return;
        }
        const objToSend = {
            todo: body.todo,
        };

        FavProductModel.findByIdAndUpdate(body.id, objToSend, (error, data) => {
            if (error) {
                response.json({
                    message: `INTERNAL ERROR${error}`,
                    status: false,
                });
            } else {
                response.json({
                    message: `successfully update`,
                    status: true,
                })
            }
        })
    },
}

module.exports = FavProductController;