export const addTodo = (addTodo)=>{
    return {
        type: 'ADD_TODO',
        payload: addTodo
    };
};

export const deleteTodo = (index)=>{
    return {
        type: 'DELETE_TODO',
        payload: index
    };
};


export const handleChangeTodo = (index)=>{
    return {
        type: 'CHANGE_TODO',
        payload: index
    };
}