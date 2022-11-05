import React, { useState, ChangeEvent, KeyboardEvent} from 'react'
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
  const addTaskNew = () => {
    props.addTask(name)
    setName('')
  }
  const listing = props.tasks.map(el => {
      const onRemoveTask = () => props.removeTask(el.id)
      return  <li key={el.id}>
                <input type="checkbox" checked={el.isDone}></input>
                <span>{el.title}</span>
                <button onClick={onRemoveTask}>x</button>
              </li>
    })

  const onChangeNewTaskHandler = (e:ChangeEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value)
  }
  const onCeyPressHandler = (e:KeyboardEvent<HTMLInputElement>) => {
    e.charCode === 13 && addTaskNew()
  }
  const onClikAllHandler = () => props.chekigType('all')
  const onClikActiveHandler = () => props.chekigType('active')
  const onClikCompletedHandler = () => props.chekigType('completed')


  return (
    <div>
      <h3>{props.todoListTitle}</h3>
      <div>
        <input 
          type="text" 
          value = {name} 
          onChange={onChangeNewTaskHandler}
          onKeyPress={onCeyPressHandler}
          />
        <button onClick={addTaskNew}>+</button>
      </div>
      <ul>{listing}</ul>
      <div>
        <button onClick={onClikAllHandler}>All</button>
        <button onClick={onClikActiveHandler}>Active</button>
        <button onClick={onClikCompletedHandler}>Completed</button>
      </div>
    </div>
  )
}

export default TodoList;
