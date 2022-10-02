import React, { useState } from 'react';
import './App.css';
import TodoList from "./TodoList";

function App() {
    const todoListTitle = "What to learn"
    const [tasks,setTask]= useState([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "React", isDone: false},
        {id: 4, title: "TS", isDone: false},
    ])
    const remTask = (taskId: number) => setTask(tasks.filter(el=>el.id !== taskId))

    // const todoListTitle_2 = "What to buy"
    // const tasks_2 = [
    //     {id: 1, title: "Beer", isDone: true},
    //     {id: 2, title: "Cheese", isDone: false},
    //     {id: 3, title: "Fish", isDone: false},
    // ]

    return (
        <div className="App">
            <TodoList tasks={tasks} title={todoListTitle} remTask={remTask}/>
            {/* <TodoList tasks={tasks_2} title={todoListTitle_2} remTask={remTask}/> */}

        </div>
    );
}

export default App;
