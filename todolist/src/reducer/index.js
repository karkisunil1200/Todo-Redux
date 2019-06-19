import {ADD_TODO, DELETE_ITEM, TOGGLE_ITEM} from '../actions/index';

const initialState = {
  todos: [{id: 1, task: 'walk the dog', complete: false}]
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      const newTodo = {
        id: state.todos[state.todos.length - 1].id + 1,
        task: action.payload,
        isComplete: false
      };
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
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              complete: !todo.complete
            };
          }
        })
      };
    default:
      return state;
  }
};
