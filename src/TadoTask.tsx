import React from 'react';
import { ITask } from "./interfaces/task";
import './TodoTask.css';
import delete_img from './assets/delete.png';

interface Props {
    task: ITask
    completeTask(taskNameToDelete: string): void;
}

const TadoTask = ({task, completeTask}: Props) => {
  return (
    <div className="task">
        <div className="content">
            <span>{task.taskName}</span>
            <span>{task.deadline}</span>
        </div>
        <button 
            onClick={() => {completeTask(task.taskName)}}>
            <img src={delete_img} alt="delete_img" className="delete_img" />
        </button>
    </div>
  )
}

export default TadoTask