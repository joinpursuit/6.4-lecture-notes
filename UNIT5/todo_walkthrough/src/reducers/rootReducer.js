import { combineReducers } from 'redux';
import todosReducer from './todosReducer';
import nextTodoIdReducer from "./nextTodoId";
import visibilityFilterReducer from './visibilityFilter';
import errorsReducer from './ErrorsReducer'

export default combineReducers({
  todos: todosReducer,
  nextId: nextTodoIdReducer,
  visibilityFilter: visibilityFilterReducer,
  errors: errorsReducer,
});

