import React, { useState } from 'react'
import {FilterValueType} from './App'


type TodoListPropsType = {
  tasks: Array<TaskType>
  todoListTitle: string
  chekigType: (el:FilterValueType) => void
  removeTask: (idRem:string) => void
  addTask: (taskNew:string) => void
}
type TaskType = {
  id: string
  title:string
  isDone:boolean
}


function TodoList(props: TodoListPropsType) {
  
  const [name, setName] = useState(" ");

  const listing = props.tasks.map(el => {
      return  <li key={el.id}>
                <input type="checkbox" checked={el.isDone}></input>
                <span>{el.title}</span>
                <button onClick={()=>{props.removeTask(el.id)}}>x</button>
              </li>
    })

  
  return (
    <div>
      <h3>{props.todoListTitle}</h3>
      <div>
        <input type="text" value = {name} onChange={
          (e)=>setName(e.currentTarget.value)
          }/>
        {/* <button onClick={()=>{props.addTask("New")}}>+</button> */}
        <button onClick={()=>props.addTask(name)}>+</button>
      </div>
      <ul>{listing}</ul>
      <div>
        <button onClick={()=>{props.chekigType('all')}}>All</button>
        <button onClick={()=>{props.chekigType('active')}}>Active</button>
        <button onClick={()=>{props.chekigType('completed')}}>Completed</button>
      </div>
    </div>
  )
}

export default TodoList;
