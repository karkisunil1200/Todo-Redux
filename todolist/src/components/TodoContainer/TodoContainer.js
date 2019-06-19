import React from 'react';
import {connect} from 'react-redux';
import Todo from '../Todo/Todo';

const TodoContainer = props => {
  return (
    <div>
      {props.todos.map(todo => {
        return <Todo {...todo} />;
      })}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps)(TodoContainer);
