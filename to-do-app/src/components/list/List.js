import React from 'react';
import { Container, Ul} from './List.style';
import Tasks from './Tasks';

const ToDoList = ({tasks, setTasks}) =>{
    return(
<Container>
    <Ul className="todoList" style={{overflowY: 'auto', height:"80%"}}>
    {tasks.map(task => (
         <Tasks key={task.id} id={task.id} text={task.name} completed={task.isDone} tasks={tasks} setTasks={setTasks} task={task}></Tasks>
      ))
    }

    </Ul>
</Container>
    );
    }


export default ToDoList;