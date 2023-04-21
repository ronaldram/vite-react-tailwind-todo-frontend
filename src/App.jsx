import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TodoComputed from "./components/TodoComputed";
import TodoCreate from "./components/TodoCreate";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";

const InitialStateTodos = JSON.parse(localStorage.getItem("todos")) || [];

const App = () => {

  const [todos, setTodos] = useState(InitialStateTodos);

  useEffect(()=>{
      localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos]);

  const createTodo = (title) => {
    const newTodo = {
      id : Date.now(),
      title,
      completed:false
    }
    setTodos([...todos, newTodo]);
  }

  const removeTodo = (id) => {
    setTodos(todos.filter((todo)=> todo.id !== id));
  }

  const updateTodo = (id) => {
      setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
  }

  const computedItemLeft = todos.filter((todo)=> !todo.completed).length;

  const clearCompleted = ()  => {
    setTodos(todos.filter((todo) => !todo.completed));
  }

  const changeFilter = (filter) => {
    setFilter(filter);
  }
  const[filter, setFilter]  = useState('all');

  const filteredTodos = () => {
    switch(filter){
      case "all":
        return todos;
      case "active":
        return todos.filter((todo)=> !todo.completed);
      case "complete":
        return todos.filter((todo)=> todo.completed);
      default:
        return todos;
    }
  }

  return (
    <div className="min-h-screen bg-gray-200 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat transition-all duration-1000 dark:bg-gray-900 dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] md:bg-[url('./assets/images/bg-desktop-light.jpg')] md:dark:bg-[url('./assets/images/bg-desktop-dark.jpg')]">

      <Header/>

      <main className="container mx-auto px-4 mt-8 md:max-w-x1">

        <TodoCreate createTodo={createTodo}/>

        <TodoList todos={filteredTodos()} updateTodo={updateTodo} removeTodo={removeTodo}/>

        <TodoComputed computedItemLeft={computedItemLeft} clearCompleted={clearCompleted}/>

        <TodoFilter changeFilter={changeFilter} filter={filter}/>

      </main>     

      <Footer/>

    </div>    
  )
}

export default App;