import React from 'react';
import './App.css';
import TodoListHooks from './Components/TodoListHooks'
import TodoListClass from './Components/TodoListClass';

function App() {
  return (
    <div>
      {/* {<TodoListHooks/>} */}
      <TodoListClass/>
    </div>
  );
}

export default App;
