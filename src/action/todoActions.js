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