import React from 'react'
import { Todo } from "../mycomponent/Todo";

export const Todos = (props) => {
  let mystyle={
    minHeight: "70vh"
  }
  return (
    <div className="container" style={mystyle}>
      <h3 className=''>Todo List</h3>
      {props.todos.length===0? "No todo to display":
      props.todos.map((todo) => {
        return <Todo key={todo.sno} todo={todo} onDelete={props.onDelete} />
      })
    }
    </div>
  )
}

// export { Todos }
