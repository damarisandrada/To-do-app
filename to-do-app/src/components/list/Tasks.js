import React, { useState } from 'react';
import { Container, Li } from './Tasks.style';
import axios from 'axios';

const Tasks = ({text, Id, tasks, setTasks}) =>{

    const [check, setCheck] = useState(true);
    const [ischecked, setIschecked] = useState();

    const deleteButton = () =>{
        setTasks(tasks.filter((el) => el.id !== Id))

        axios
        .delete('https://todo-application-2.herokuapp.com/action', {
            data : {
                id : Id,
            },
        })
        .then((res) => console.log(res))
    };

    const checkButton = () => {
        setCheck(!check)
        console.log(check)

        axios
        .put(`https://todo-application-2.herokuapp.com/action`, {
            "id" : Id,
            "isDone" : check,
        })
        .then((res) => {console.log(res); setIschecked(res.isDone)});
      
        //setIschecked(res.isDone)
    };

    return(
<Container className ="tasks">
    <input type="checkbox" onClick={checkButton} {...(ischecked ? {attribute : 'checked={true}'} : "")}></input>
    <Li check={check} setCheck={setCheck}>{text}</Li>
    <button style={{height : "20px"}} onClick={deleteButton} className="delete">X</button>
</Container>
    );
};

export default Tasks;