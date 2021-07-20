import React, {useState} from 'react';
import { Container, ListContainer, Tasks, Newtask, H4 } from './Home.style';
import ToDoList from '../../components/list/List';
import Form from '../../components/list/form';

const ContentHome = () =>{
    const [inputText, setInputText] = useState("");
    const [tasks, setTasks] = useState([]);
    return(
<Container>
<ListContainer>
<Tasks>
    <H4>Tasks</H4>
    <ToDoList tasks={tasks} setTasks={setTasks}></ToDoList>
</Tasks>
<Newtask>
    <H4>New Task</H4>
    <Form inputText={inputText} setInputText={setInputText} tasks={tasks} setTasks={setTasks}></Form>
</Newtask>
</ListContainer>
</Container>
    );
};

export default ContentHome;