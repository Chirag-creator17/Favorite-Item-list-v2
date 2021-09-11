import React, {useState,useContext,useEffect} from 'react';
import TodoItem from './TodoItem';
import TodoService from '../Services/TodoService';
import Message from './Message';
import { AuthContext } from '../Context/AuthContext';
import { ListGroup } from "react-bootstrap";

const Todos = props =>{
    const [todo,setTodo] = useState({name : ""});
    const [todos,setTodos] = useState([]);
    const [message,setMessage] = useState(null);
    const authContext = useContext(AuthContext);
    
    useEffect(()=>{
        TodoService.getTodos().then(data =>{
            setTodos(data.todos);
        });
    },[]);

    const onSubmit = e =>{
        e.preventDefault();
        TodoService.postTodo(todo).then(data =>{
            const { message } = data;
            resetForm();
            if(!message.msgError){
                TodoService.getTodos().then(getData =>{
                    setTodos(getData.todos);
                    setMessage(message);
                });
            }
            else if(message.msgBody === "UnAuthorized"){
                setMessage(message);
                authContext.setUser({username : "", role : ""});
                authContext.setIsAuthenticated(false);
            }
            else{
                setMessage(message);
            }
        });
    }

    const onChange = e =>{
        setTodo({name : e.target.value});
    }

    const resetForm = ()=>{
        setTodo({name : ""});
    }

    return(
        <div>
            <h1 className="head">Fruit List</h1>
            <ListGroup variant="flush" className="list">
                {
                    todos.map(todo =>{
                        return <TodoItem key={todo._id} todo={todo}/>
                    })
                }
            </ListGroup>
            <form onSubmit={onSubmit} className="headers">
            <div class="form-group">
                <label htmlFor="todo"><h2>Favorite Fruit</h2></label>
                <input type="text" 
                       name="todo" 
                       value={todo.name} 
                       onChange={onChange}
                       className="form-control"
                       placeholder="Please Enter Favorite Fruit"/>
            </div>
                <button className="btn btn-lg btn-primary" 
                        type="submit">Submit</button>
            </form>
        </div>
    );

}

export default Todos;
