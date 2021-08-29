import React, {useState,useContext,useEffect} from 'react';
import TodoItem1 from './TodoItem1';
import TodoService1 from '../Services/TodoService1';
import Message from './Message';
import { AuthContext } from '../Context/AuthContext';
import { ListGroup } from "react-bootstrap";

const Todos = props =>{
    const [todo,setTodo] = useState({name : ""});
    const [todos,setTodos] = useState([]);
    const [message,setMessage] = useState(null);
    const authContext = useContext(AuthContext);
    
    useEffect(()=>{
        TodoService1.getTodos1().then(data =>{
            setTodos(data.todos);
        });
    },[]);

    const onSubmit = e =>{
        e.preventDefault();
        TodoService1.postTodo1(todo).then(data =>{
            const { message } = data;
            resetForm();
            if(!message.msgError){
                TodoService1.getTodos1().then(getData =>{
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
            <br/>
            <h1 className="head">Vegetable List</h1>
             <ListGroup variant="flush" className="list">
                {
                    todos.map(todo =>{
                        return <TodoItem1 key={todo._id} todo={todo}/>
                    })
                }
                </ListGroup>
            <br/>
            <br/>
            <form onSubmit={onSubmit}>
            <div class="form-group">
                <label htmlFor="todo"><h1>Favorite Vegetable</h1></label>
                <input type="text" 
                       name="todo" 
                       value={todo.name} 
                       onChange={onChange}
                       className="form-control"
                       placeholder="Please Enter Favorite Vegetable"/>
            </div>
                <button className="btn btn-lg btn-primary " 
                        type="submit">Submit</button>
            </form>
        </div>
    );

}

export default Todos;