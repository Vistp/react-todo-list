import React from 'react';
import './TodoList.css';
 
// деструктуризируем из props todos, onDeliteTodo
const TodoList = ({ todos, onDeliteTodo }) =>
    <ul>TodoList
     {todos.map(({id, text}) =>
         <li key={id} className="TodoList__item">
             <p className="TodoList__text">{text}</p>
             <button onClick={() => onDeliteTodo(id)}>Удалить</button>
         </li>)}
    </ul>;

export default TodoList;
// Экспортируем в АПП