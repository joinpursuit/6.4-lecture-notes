import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import PostForm from './features/posts/PostForm';
import PostsIndex from './features/posts/PostsIndex';

function App() {
  return (
   <div className="App">
     <Counter/>
     <PostForm />
     <PostsIndex />
   </div>
  );
}

export default App;
