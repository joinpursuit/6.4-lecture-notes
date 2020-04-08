import React from 'react';
import './App.css';
import TodosMain from './components/TodosMain';
import PostList from './components/PostList';

function App() {
  return (
    <div className="App">
      <TodosMain />
      <PostList/>
    </div>
  );
}

export default App;
