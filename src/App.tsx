import React, { useState } from 'react';
import './App.css';
import TodoList from "./TodoList";

export type FilterValueType = 'all' | 'active' | 'completed'
function App() {
  const todoListTitle = "What to learn"
  const [tasks,setTask]= useState([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "React", isDone: false},
        {id: 4, title: "TS", isDone: false},
  ])

  const [filter, setFilter] = useState <FilterValueType>('completed')
  const remTask = (taskId: number) => setTask(tasks.filter(el=>el.id !== taskId))
   
  const chekigType = (filter: FilterValueType) => setFilter(filter)
  let filterType = tasks
  if(filter === 'active') filterType = tasks.filter(el=>el.isDone === false)
  if(filter === 'completed') filterType = tasks.filter(el=>el.isDone === true)
   

  return (
        <div className="App">
            <TodoList 
            tasks={filterType} 
            title={todoListTitle} 
            remTask={remTask}
            chekigType={chekigType}
            
            />
            {/* <TodoList tasks={tasks_2} title={todoListTitle_2} remTask={remTask}/> */}

        </div>
  );
}

export default App;
