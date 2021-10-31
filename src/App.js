import { Component } from 'react';
import './App.css';

import TodoList from './components/TodoList';
import inishialTodos from './todos.json';


class App extends Component {
  state = {
    todos: inishialTodos,
  }
  
  deliteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  }
  render() {
    const { todos } = this.state;

    const todoCaunt = todos.length;
    const completedTodosCaunt = todos.reduce(
      (total, todo) => (todo.complited ? total + 1 : total),
      0,
    );
  
    return (
      <>
        <div className="App">
          <h1>Это туду лист</h1>
          <div>
            <p>Всего: {todoCaunt}</p>
            <p>Выполнено: {completedTodosCaunt}</p>
          </div>
          <TodoList todos={todos} onDeliteTodo={this.deliteTodo}/>
        </div>
      </>
    );
  }

}


// это переносим в метод класса рендер

// function App() {
//   return (
//     <div className="App">
//       Это туду лист
//        <TodoList/>
//     </div>
//   );
// }

export default App;
