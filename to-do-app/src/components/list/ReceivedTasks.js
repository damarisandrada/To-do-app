import React from 'react';
import { Container, Li } from './Tasks.style';

const ReceivedTasks = (taskName) =>{

    return(
<Container className ="tasks">
    <input type="checkbox"></input>
    <Li className="task">{taskName}</Li>
    <button style={{height : "20px"}} className="delete">X</button>
</Container>
    );
};

export default ReceivedTasks;