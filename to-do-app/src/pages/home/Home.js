import React, {useState, useEffect} from 'react';
import { Container, ListContainer, Tasks, Newtask, H4 } from './Home.style';
import ToDoList from '../../components/list/List';
import Form from '../../components/list/form';
import axios from 'axios';

const ContentHome = () =>{
    const [inputText, setInputText] = useState("");
    const [tasks, setTasks] = useState([]);
    const [ tasks2, setTasks2] = useState([]);
   
    const userId = localStorage.getItem("Id");

    useEffect(() => {
        axios
        .get ("https://todo-application-2.herokuapp.com/people")
        .then((res) => console.log(res))
    }, []);

    useEffect(() => {
        axios
        .post ("https://todo-application-2.herokuapp.com/actionsOfUser", {
           "personId": userId,
        })
        .then((res) => {setTasks2(res); console.log(tasks2)})
    }, [userId]);

    return(
<Container>
<ListContainer>
<Tasks>
    <H4>Tasks</H4>
    <ToDoList tasks={tasks} setTasks={setTasks} tasks2={tasks2} setTasks2={setTasks2}></ToDoList>
</Tasks>
<Newtask>
    <H4>New Task</H4>
    <Form userId={userId} inputText={inputText} setInputText={setInputText} tasks={tasks} setTasks={setTasks}></Form>
</Newtask>
</ListContainer>
</Container>
    );
};

export default ContentHome;