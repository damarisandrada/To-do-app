import React from 'react';
import { Container, Ul} from './List.style';
import Tasks from './Tasks';
import ReceivedTasks from './ReceivedTasks';

const ToDoList = ({tasks, setTasks, tasks2, setTasks2}) =>{
    return(
<Container>
    <Ul className="todoList">
    {tasks.map(task => (
           <Tasks key={task.id} text={task.text} tasks={tasks} setTasks={setTasks} task={task}></Tasks>
       ))};
       
       {tasks2.map(task2 =>(
           <ReceivedTasks name={task2.name}></ReceivedTasks>
       ))}

       
    </Ul>
</Container>
    );
    }


export default ToDoList;