import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, addTodo, changeTodo } from "../action/todoActions";

function TodoList() {
    const [input, setInput] = useState('');
    const [editIndex, setEditIndex] = useState(null);
    const [editText, setEditText] = useState('');
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    const handleAddTodo = () => {
        if (input) {
            dispatch(addTodo(input));
            setInput('');
        }
    };

    const handleDeleteTodo = (index) => {
        dispatch(deleteTodo(index));
    };

    const handleEditTodo = (index) => {
        setEditIndex(index);
        setEditText(todos[index]); // Set the current todo text to edit
    };

    const handleSaveTodo = () => {
        dispatch(changeTodo(editIndex, editText));
        setEditIndex(null); // Clear edit mode
        setEditText('');     // Clear edit text
    };

    return (
        <div>
            <h1>Todo List</h1>
            <input 
                type="text" 
                value={input} 
                onChange={e => setInput(e.target.value)} 
                placeholder="Ish kiriting" 
            />
            <button onClick={input === '' ? () => alert('please!') : handleAddTodo}>
                Qo'shish
            </button>

            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        {editIndex === index ? (
                            <div>
                                <input 
                                    type="text" 
                                    value={editText} 
                                    onChange={e => setEditText(e.target.value)} 
                                />
                                <button onClick={handleSaveTodo}>Saqlash</button>
                            </div>
                        ) : (
                            <div>
                                {todo}
                                <button onClick={() => handleDeleteTodo(index)}>O'chirish</button>
                                <button onClick={() => handleEditTodo(index)}>O'zgartirish</button>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
