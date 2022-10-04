import React from 'react';
import {FilterValueType} from './App'

type TodoListPropsType ={
    title: string
    tasks: Array<TaskType>
    remTask:(taskId: number) => void
    chekigType: (filter: FilterValueType) => void
}

type TaskType = {
    id: number
    title: string
    isDone: boolean
}
const TodoList = (props: TodoListPropsType) => {
  const listing = props.tasks.map(el=>{
  return <li>
         <input type="checkbox" checked={el.isDone}></input>
         <span>{el.title}</span>
         <button onClick={()=>props.remTask(el.id)}>x</button>
         </li>
})
    return (
                <div>
                    <h3>{props.title}</h3>
                    <div>
                        <input/>
                        <button>+</button>
                    </div>
                    <ul>
                      {listing}
                      
                    </ul>
                    <div>
                        <button onClick={()=>props.chekigType('all')} >All</button>
                        <button onClick={()=>props.chekigType('active')}>Active</button>
                        <button onClick={()=>props.chekigType('completed')}>Completed</button>
                    </div>
                </div>
    );
};

export default TodoList;
