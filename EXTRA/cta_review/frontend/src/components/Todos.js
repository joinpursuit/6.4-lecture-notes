import React, { useState, useEffect } from 'react';
import axios from "axios";
import TodosIndex from './TodosIndex';
import CreateTodoForm from './CreateTodoForm';
import { apiURL } from "../util/apiURL";

export default function Todos() {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState(null);
  const API = apiURL();

  const fetchTodos = async () => {
      try {
          let res = await axios({
            method: "get",
            url: `${API}/api/todos/1`,
          });
        //   throw Error("There was an Error!")
          setTodos(res.data.todos);
          setError(null);
      } catch (err) {
          setError(err.message)
          setTodos([]);
      }
  };


  useEffect(() => {
    fetchTodos();
    return () => {
      // this function runs whenever component will unmount
    };
  }, []); //dependency array // useEffect will run whenever anything in the dependency array is updated or changed
  return (
    <main>
        {error ? <div>{error}</div> : null}
      <CreateTodoForm updateTodos={fetchTodos} />
      <TodosIndex todos={todos} />
    </main>
  );
};
