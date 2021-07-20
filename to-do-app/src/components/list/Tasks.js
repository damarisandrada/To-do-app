import React from 'react';
import { Container, Li } from './Tasks.style';

const Tasks = ({text, tasks, task, setTasks}) =>{

    const deleteButton = () =>{
        setTasks(tasks.filter((el) => el.id !== task.id))
    };

    return(
<Container className ="tasks">
    <input type="checkbox"></input>
    <Li className="task">{text}</Li>
    <button style={{height : "20px"}} onClick={deleteButton} className="delete">X</button>
</Container>
    );
};

export default Tasks;