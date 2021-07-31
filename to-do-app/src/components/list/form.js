import React from 'react';
import { Container, Input, Button, AddTaskForm } from './form.style';
import axios from 'axios';

const Form = ({inputText, setInputText, tasks, setTasks, userId}) =>{
    
    const textInput = (e) =>{
setInputText(e.target.value);
    };

    const submitTask = (e) =>{

        e.preventDefault();

        axios
        .post('https://todo-application-2.herokuapp.com/action', {
            "name" : inputText,
            "isDone" : 0,
            "personId" : userId,
        })
        .then((res) => {console.log(res); setTasks([...tasks, {name: inputText, isDone: false, id:res.data.id }])}); 
        
        setInputText("")
    };
    return(
<Container>
    <AddTaskForm style={{width : "100%"}}>
        <Input value={inputText} onChange={(e) => textInput(e)} type="text" className="todoInput" placeholder="Add a new task"></Input>
        <Button onClick={(e) => submitTask(e)} type="submit" className="todoButton">Add</Button>
    </AddTaskForm>
</Container>
    );
};

export default Form;