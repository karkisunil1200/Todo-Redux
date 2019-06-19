import {ADD_TODO} from '../actions/index';

const initialState = {
  todos: [{task: 'walk the dog'}, {task: 'learn redux'}]
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      const newTodo = {task: action.payload};
      return {
        ...state,
        todos: [...state.todos, newTodo]
      };
    default:
      return state;
  }
};
