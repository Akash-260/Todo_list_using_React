//import logo from './logo.svg';
import './App.css';
import Header from "./mycomponent/Header";
import { Todos } from './mycomponent/Todos';

import {Footer} from "./mycomponent/Footer";

import {Addtodo} from "./mycomponent/Addtodo";

import React, { useState} from 'react';


function App() {
  const onDelete =(todo)=>{
    console.log("I am ondelte",todo);
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1);
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
  }
  const addTodo=(title,desc)=>{
    console.log("i am adding",title,desc)
    let sno = todos.length > 0 ? todos[todos.length - 1].sno + 1 : 1;

    const myTodo={
      sno:sno,
      title:title,
      desc:desc
    }
    setTodos([...todos,myTodo]);
    console.log(myTodo);
  }
  const[todos, setTodos ]=useState( [
    {
      sno:1,
      title:"my first todo list",
      desc: "Task1",
    },
    {
      sno:1,
      title:"my second todo list",
      desc: "Task2",
    },
    {
      sno:1,
      title:"my third todo list",
      desc: "Task3",
    }
  ]);
  return (
    <>
     <Header title="Todo-here" searchBar={true}/> 
     <Addtodo addTodo={addTodo}/>
    <Todos todos={todos} onDelete={onDelete}/>
    <Footer/>
    
    </>
    
    
  );
}

export default App;
