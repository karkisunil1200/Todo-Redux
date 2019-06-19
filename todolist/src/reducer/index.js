const initialState = {
  todos: [{task: 'walk the dog'}, {task: 'learn redux'}]
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'Add_Todo':
      return {
        ...state
      };
    default:
      return state;
  }
};
