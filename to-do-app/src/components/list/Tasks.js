import React from 'react';

const Tasks = ({text, tasks, task, setTasks}) =>{

    const deleteButton = () =>{
        setTasks(tasks.filter((el) => el.id !== task.id))
    };

    return(
<div className ="tasks">
    <li className="task">{text}</li>
    <input type="checkbox"></input>
    <button onClick={deleteButton} className="delete">Delete</button>
</div>
    );
};

export default Tasks;