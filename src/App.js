import React, { useState } from "react";
import Navbar from "./components/Navbar";
import AddTodo from "./components/AddTodo";
import AllToDos from "./components/AllToDos";

const App = (obj) => {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || []);

  const InsertTodos = (obj) => {
    const item = {
      id: new Date().getTime(),
      title: obj.title,
      description: obj.description,
      isComplete: false,
    };
    setTodos([...todos, item]);
    localStorage.setItem('todos', JSON.stringify([...todos, item]));
  };
  // const AllTodo = ()=>{
  //   return todos;
  // }
  const deleteTodo = (id) => {
    const newTodos = todos.filter((cur) => cur.id !== id);
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };
  const updateTodo = (id) => {
    const newTodos = todos.filter((cur) => {
      if (cur.id === id) {
        cur.isComplete = true;
      }
      return cur;
    });
    setTodos(newTodos);
     localStorage.setItem('todos', JSON.stringify(newTodos));
  };
  return (
    <>
      <Navbar />
      <AddTodo InsertTodos={InsertTodos} />
      <AllToDos ToDos={todos} deleteTodo={deleteTodo} updateTodo={updateTodo} />
    </>
  );
};
export default App;
