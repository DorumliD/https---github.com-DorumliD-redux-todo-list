import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, addTodo } from "../action/todoActions";

function TodoList(){
    const [input, setInput]=useState('');
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch(); 

    const handleAddTodo =()=>{
        if(input){
            dispatch(addTodo(input));
            setInput('');
        }
    };

    const handleDeleteTodo =(index)=>{
        dispatch(deleteTodo(index));
    };

    return(
        <div>
            <h1>Todo List</h1>
            <input type="text" value={input} onChange={e=>setInput(e.target.value)} placeholder="Ish kiriting"/>
            <button onClick={handleAddTodo}>Qo'shish</button>
            <ul>
                {todos.map((todo, index)=>(
                    <li key={index}>
                        {todo}
                        <button onClick={()=>handleDeleteTodo(index)}>O'chirish</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList;