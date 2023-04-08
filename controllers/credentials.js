const bcrypt = require('bcryptjs');
const userModel = require("../model/user");
const UserController = {
    userSignUp: (request, response) => {
        console.log(request.body)
        // response.send("SIGNUP API hit")

        const { firstName, lastName,category, email, password, mobileNumber, dob } = request.body;

        if (!firstName ||!category|| !lastName || !email || !password || !mobileNumber || !dob) {
            response.json({
                message: "Required field are missing",
                status: false
            });
            return;
        };
        const hashPassword = bcrypt.hashSync(password, 10);

        const objToSend = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            password: hashPassword,
            mobile_number: mobileNumber,
            dob: dob,
            category:category,
        }
        console.log(hashPassword, "hashPassword")
        console.log(password, "orgPassword")

        userModel.findOne({ email: email }, (error, user) => {
            if (error) {
                response.json({
                    message: "internal server error",
                    status: false,
                });
            } else {
                console.log(user, "user");
                if (user) {
                    response.json({
                        message: "Email already exist",
                        status: false
                    });
                } else {
                    userModel.create(objToSend, (error, user) => {
                        if (error) {
                            response.json({
                                message: "Internal Derver Error",
                                status: false
                            });
                        } else {
                            console.log("user", user)
                            response.json({
                                message: "user successfully signup",
                                status: true,
                                user,
                            })
                        }
                    })
                }
            }
        });
        return;


    },
    userLogin: (request, response) => {
        console.log(request.body, "request.body")
        const { email, password } = request.body;
        if ((!email, !password)) {
            response.json({
                message: `Required fields are missing`,
                status: false,
            });
            return;
        }

        userModel.findOne({ email: email }, (error, user) => {
            if (error) {
                response.json({
                    message: `Internal error:`,
                    status: false,
                });
                return;
            }
            else {
                if (!user) {
                    response.json({
                        message: "credential error",
                        status: false,
                    });
                    return;
                } else {
                    // console.log(user,"user!!!!");
                    const comparePassword = bcrypt.compareSync(password, user.password)
                    if (comparePassword) {
                        response.json({
                            message: "user successfully login",
                            status: true,
                            user,
                        });
                    } else {
                        response.json({
                            message: "credential error",//"password doesnot match",
                            status: false,
                        });
                    }
                }
            }
        })
    },
    singleUserGet: (request, response) => {
        // console.log(request.params,"params")
        // const {userID} = request.params;
        // console.log(
        //     "mongoes.Types.ObjectId(userID)",
        //     mongoes.Types.ObjectId(userID)
        // );


        const { id } = request.query;

        userModel.findById(id, (error, data) => {
            if (error) {
                response.json({
                    message: `Internal error:${error}`,
                    status: false,
                });
            } else {
                console.log("data", data)
                response.json({
                    message: `user successfully get`,
                    data: data,
                    status: true,
                });
            }
        })
    },
    userCreate: (request, response) => {
        // console.log(request.body)
        const { firstName, lastName, email, password,category } = request.body;

        if (!firstName || !lastName || !email || !password||!category) {
            response.json({
                message: `Required fields are missing`,
                status: false,
            });
            return;
        }

        const objToSend = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            password: password,
            category:category,
        }

        userModel.create(objToSend, (error, data) => {

            if (error) {
                response.json({
                    message: `Internal error:${error}`,
                    status: false,
                });
            } else {
                response.json({
                    message: `USER SUCCESSFULLY CREATE`,
                    data: data,
                    status: true,
                });
            }
        })



        // res.send("USER CRETAE")
    },
    userUpdate: (request, response) => {
        console.log(request.body)
        response.send("USER UPDATE")
    },
    userDelete: (request, response) => {
        console.log(request.body)
        response.send("USER DELETE")
    },

}

module.exports = UserController
