const LocationModel = require("../model/locationSchema")

const LocationController = {
    getLocation: (request, response) => {
        LocationModel.find({}, (error, data) => {
            if (error) {
                response.json({
                    message: `INTERNAL Server ERROR${error}`,
                    status: false,
                })
            } else {
                response.json({
                    message: `successfully get location`,
                    status: true,
                    data: data
                })
            }
        })
    },

    createLocation: (request, response) => {
        const body = request.body;
        console.log(body, "body");
        const { id, requestName,requestType,longitude,latitude } = request.body;

        if (!longitude||!latitude) {
            response.json({
                message: "Required Fields are Missing ",
                status: false,
            });
            return;
        }
        const objToSend = {
            id: id,
            longitude: longitude,
            latitude: latitude,
            request_name: requestName,
            request_type: requestType,
            };

        LocationModel.create(objToSend, (error, data) => {
            if (error) {
                response.json({
                    message: `INTERNAL ERROR${error}`,
                    status: false,
                });
            } else {
                response.json({
                    message: `successfully create location`,
                    status: true,
                })
            }
        })
    },

    deleteProduct: (request, response) => {
        const { id } = request.params;
        // console.log(id)
        LocationModel.findByIdAndDelete(id, (error, data) => {
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

        LocationModel.findByIdAndUpdate(body.id, objToSend, (error, data) => {
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

module.exports = LocationController