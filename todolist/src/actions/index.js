export const ADD_TODO = 'ADD_TODO';
export const addNewTodo = newTodo => {
  return {
    type: 'ADD_TODO',
    payload: newTodo
  };
};

export const DELETE_ITEM = 'DELETE_ITEM';
export const deleteTodo = id => {
  return {
    type: 'DELETE_ITEM',
    payload: id
  };
};

export const TOGGLE_TODO = 'TOGGLE_TODO';
export const toggleTodo = id => {
  return {
    type: 'TOGGLE_TODO',
    payload: id
  };
};
