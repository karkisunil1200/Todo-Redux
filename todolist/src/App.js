import React from 'react';

import './App.css';
import TodoContainer from './components/TodoContainer/TodoContainer';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <TodoContainer />
      </header>
    </div>
  );
}

export default App;
