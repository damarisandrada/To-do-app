import React from 'react';
import { Container, Ul} from './List.style';
import Tasks from './Tasks';

const ToDoList = ({tasks, setTasks}) =>{
    return(
<Container>
    <Ul className="todoList">
    {tasks.map(task => (
         <Tasks Id={task.id} text={task.name} completed={task.isDone} tasks={tasks} setTasks={setTasks} task={task}></Tasks>
       ))}
    </Ul>
</Container>
    );
    }


export default ToDoList;