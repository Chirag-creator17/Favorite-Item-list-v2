export default {
    getTodos1 : ()=>{
        return fetch('/user/todos1')
                .then(response=>{
                    if(response.status !== 401){
                        return response.json().then(data => data);
                    }
                    else
                        return {message : {msgBody : "UnAuthorized",msgError : true}};
                });
    },
    postTodo1 : todo1=>{
        return fetch('/user/todo1',{
            method : "post",
            body : JSON.stringify(todo1),
            headers:{
                'Content-Type' : 'application/json'
            }
        }).then(response=>{
            if(response.status !== 401){
                return response.json().then(data => data);
            }
            else
                return {message : {msgBody : "UnAuthorized"},msgError : true};
        });
    }
}