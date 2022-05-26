import React, {FC, ChangeEvent, useState } from 'react';
import './TodoApp.css';
import {ITask} from './interfaces/task';
import TadoTask from './TadoTask';
import plus from './assets/plus.png';


const TodoApp:FC = () => {

  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);
  
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if ( event.target.name === "task") {
      setTask(event.target.value)
    } else {
      setDeadline(Number(event.target.value));
    }
  };

  const addTask = (): void => {
    const newTask = {taskName: task, deadline: deadline};
    setTodoList([...todoList, newTask]);
    setTask("");
    setDeadline(0);
  }

  const completeTask = (taskNameToDelete: string):void => {
    setTodoList(todoList.filter((task) => {
      return task.taskName != taskNameToDelete
    }))
  }

  return(
    <div className="App">
        <div className="Header">
            <div className="input_container">
                <input 
                  type="text" 
                  placeholder="Task..." 
                  name="task" 
                  value={task}
                  onChange={handleChange}
                />
                <input 
                  type="number" 
                  placeholder="Deadline (in Days)"
                  name="deadline"
                  value={deadline} 
                  onChange={handleChange}
                />
            </div>
            <button onClick={addTask}><img src={plus} alt="plus" className="plus_image"/></button>
        </div>
        <div className="todoList">
          {todoList.map((task: ITask, key: number) => {
              return <TadoTask key={key} task={task} completeTask={completeTask}/>
          })}
        </div>
    </div>
  )
}

export default TodoApp