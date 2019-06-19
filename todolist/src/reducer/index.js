import {ADD_TODO, DELETE_ITEM} from '../actions/index';

const initialState = {
  todos: [{id: 1, task: 'walk the dog'}, {task: 'learn redux'}]
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      const newTodo = {id: state.todos[state.todos.length - 1].id + 1, task: action.payload};
      return {
        ...state,
        todos: [...state.todos, newTodo]
      };
    case 'DELETE_ITEM':
      return {
        ...state,
        todos: state.todos.filter(todo => {
          return todo.id !== action.payload;
        })
      };
    default:
      return state;
  }
};
