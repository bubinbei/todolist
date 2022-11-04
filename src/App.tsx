import React, { useState } from 'react'
import TodoList from "./TodoList";
import './App.css'
import { v1 } from 'uuid';

export type FilterValueType = "all" | "active" |  "completed"

function App  ()  {
  const todoListTitle = "What to learn"
  const [filter, setFilter] = useState <FilterValueType> ('active')

  const [tasks, setTasks] = useState([        
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "React", isDone: false},
        {id: v1(), title: "TS", isDone: false},
      ])

  const addTask = (taskNew: string) => setTasks([{id: v1(), title: taskNew, isDone: false},...tasks])

  const removeTask = (idRem:string) => setTasks(tasks.filter(el=>el.id!==idRem))
  const chekigType = (el:FilterValueType) => setFilter(el)
  let tasksFilters = tasks
  if (filter==="active") tasksFilters = tasks.filter(el=>!el.isDone)
  if (filter==="completed") tasksFilters = tasks.filter(el=>el.isDone)

  return (
    <div className='App'>
      <TodoList
      tasks = {tasksFilters}
      todoListTitle = {todoListTitle}
      chekigType = {chekigType}
      removeTask = {removeTask}
      addTask = {addTask}
      />
    </div>
  )
}

export default App;
