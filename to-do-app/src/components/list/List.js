import React from 'react';
import { Container} from './List.style';
import Tasks from './Tasks';

const ToDoList = ({tasks, setTasks}) =>{
    return(
<Container>
    <ul className="todoList">
       {tasks.map(task => (
           <Tasks key={task.id} text={task.text} tasks={tasks} setTasks={setTasks} task={task}></Tasks>
       ))}
    </ul>
</Container>
    );
    }


export default ToDoList;