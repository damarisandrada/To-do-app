import React from 'react';
import { Container, Input, Button } from './form.style';

const Form = ({inputText, setInputText, tasks, setTasks}) =>{
    const textInput = (e) =>{
console.log(e.target.value);
setInputText(e.target.value);
    };
    const submitTask = (e) =>{
        e.preventDefault();
        setTasks([...tasks, {text: inputText, completed: false, id: Math.random()*10 }]);
        setInputText("");
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