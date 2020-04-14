import React, { createContext , useReducer} from 'react';
import TodosReducer from '../reducers/TodosReducer';
export const TodosContext = createContext();

const TodosProvider = (props) => {
    const [todos, dispatch] = useReducer(TodosReducer, [
        {id: 1, body: "buy milk", completed: false},
        {id: 2, body: "work out", completed: false}
    ]);
    
    return(
        <TodosContext.Provider value={{todos, dispatch}}>
            {props.children}
        </TodosContext.Provider>
    )
}
// <TodosContext.Provider value={{todos, addTodo, removeTodo}}>

                    // const [todos, setTodos] = useState([
                    //     {id: 1, body: "buy milk", completed: false},
                    //     {id: 2, body: "work out", completed: false}
                    // ]);
                
                    // const addTodo = (todo) => {
                        // setTodos([todo, ...todos])
                    //     setTodos(prevTodos => [todo, ...todos]);
                    // }
                
                    // const removeTodo = (id) => {
                    //     setTodos(todos.filter(todo => todo.id !== id))
                    // }
export default TodosProvider; 