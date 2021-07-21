import React from 'react';
import { Container, Input, Button } from './form.style';
import axios from 'axios';

const Form = ({inputText, setInputText, tasks, setTasks, userId, key, check}) =>{
    const textInput = (e) =>{
console.log(e.target.value);
setInputText(e.target.value);
    };
    const submitTask = (e) =>{
        e.preventDefault();
        setTasks([...tasks, {text: inputText, completed: check, id: key }]);
        setInputText("");

        axios
        .post('https://todo-application-2.herokuapp.com/action', {
            "name" : inputText,
            "isDone" : "false",
            "personId" : userId,
        })
        .then((res) => res.statusText === "OK" ? 
        axios
        .post ("https://todo-application-2.herokuapp.com/actionsOfUser", {
           "personId": userId,
        })
       .then((res) => {console.log(res); setTasks(res.data)})
        : "")   
    }
    return(
<Container>
    <form style={{width : "100%"}}>
        <Input value={inputText} onChange={textInput} type="text" className="todoInput" placeholder="Add a new task"></Input>
        <Button onClick={submitTask} type="submit" className="todoButton">Add</Button>
    </form>
</Container>
    );
};

export default Form;