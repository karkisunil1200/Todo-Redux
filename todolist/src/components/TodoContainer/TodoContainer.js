import React from 'react';
import {connect} from 'react-redux';
import Todo from '../Todo/Todo';
import TodoForm from '../TodoForm/TodoForm';

const TodoContainer = props => {
  return (
    <div>
      {props.todos.map(todo => {
        return <Todo {...todo} />;
      })}

      <TodoForm />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps)(TodoContainer);
