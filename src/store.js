import {createStore} from 'redux';

const initialState = {
  todos: []
};

function todoReducer(state = initialState, action){
    switch(action.type){
        case 'ADD_TODO':
            return {
                ...state,
                todos: [...state.todos, action.payload]
            };
        case 'DELETE_TODO':
            return {
                ...state,
                todos: state.todos.filter((todo, index) => index!== action.payload)
            };
            case 'CHANGE_TODO':
                const { index, newText } = action.payload;
                return {
                    ...state,
                    todos: state.todos.map((todo, i) => i === index ? newText : todo)
                };
        default:
            return state;
    }
}


const store = createStore(todoReducer);

export default store;