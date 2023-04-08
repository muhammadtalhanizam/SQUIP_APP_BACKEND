const ProductModel = require("../model/productSchema")

const ProductController = {
    getProduct: (request, response) => {
        ProductModel.find({}, (error, data) => {
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

        ProductModel.create(objToSend, (error, data) => {
            if (error) {
                response.json({
                    message: `INTERNAL ERROR${error}`,
                    status: false,
                });
            } else {
                response.json({
                    message: `successfully create`,
                    status: true,
                })
            }
        })
    },

    deleteProduct: (request, response) => {
        const { id } = request.params;
        // console.log(id)
        ProductModel.findByIdAndDelete(id, (error, data) => {
            if (error) {
                response.json({
                    message: `INTERNAL Server ERROR${error}`,
                    status: false,
                })
            } else {
                response.json({
                    message: `successfully delete`,
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

        ProductModel.findByIdAndUpdate(body.id, objToSend, (error, data) => {
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

module.exports = ProductController