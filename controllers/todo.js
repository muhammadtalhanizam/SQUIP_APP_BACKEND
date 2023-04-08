const TodoModel = require("../model/todoSchema")

const TodoController = {
    getTodo : (request,response)=>{
        TodoModel.find({},(error,data)=>{
            if(error){
                response.json({
                    message : `INTERNAL Server ERROR${error}`,
                    status : false,
                })
            }else{
                response.json({
                    message : `successfully get`,
                    status : true,
                    data : data
                })
            }
        })
    },

    createTodo : (request,response)=>{
        const body = request.body;
        console.log(body,"body");
    
        if(!body.todo){
            response.json({
                message: "Required Fields are Missing ",
                status: false,
            });
            return;
        }
        const objToSend = {
            todo: body.todo,
        };
    
        TodoModel.create(objToSend,(error,data)=>{
            if(error){
                response.json({
                    message : `INTERNAL ERROR${error}`,
                    status : false,
                });
            }else{
                response.json({
                    message : `successfully create`,
                    status : true,
                })
            }
        })
    },

    deleteTodo : (request,response)=>{
        const {id} = request.params;
        // console.log(id)
        TodoModel.findByIdAndDelete(id,(error,data)=>{
            if(error){
                response.json({
                    message : `INTERNAL Server ERROR${error}`,
                    status : false,
                })
            }else{
                response.json({
                    message : `successfully delete`,
                    status : true,
                })
            }
        })
    },

    updateTodo : (request,response)=>{
        const body = request.body;
        console.log(body,"body");
        if(!body.todo){
            response.json({
                message: "Required Fields are Missing ",
                status: false,
            });
            return;
        }
        const objToSend = {
            todo: body.todo,
        };
    
        TodoModel.findByIdAndUpdate(body.id,objToSend,(error,data)=>{
            if(error){
                response.json({
                    message : `INTERNAL ERROR${error}`,
                    status : false,
                });
            }else{
                response.json({
                    message : `successfully update`,
                    status : true,
                })
            }
        })
    },
}

module.exports = TodoController