import React from 'react';
import { ListGroup } from "react-bootstrap";
const TodoItem1 = props =>{
    return (
        <li>{props.todo.name}</li>
    )
}

export default TodoItem1;