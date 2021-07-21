import React, {useState, useEffect} from 'react';
import { Container, ListContainer, Tasks, Newtask, H4 } from './Home.style';
import ToDoList from '../../components/list/List';
import Form from '../../components/list/form';
import axios from 'axios';

const ContentHome = () =>{
    const [inputText, setInputText] = useState("");
    const [tasks, setTasks] = useState([]);

   
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
        .then((res) => {console.log(res); setTasks(res.data)})
    }, [userId]);

    return(
<Container>
<ListContainer>
<Tasks>
    <H4>Tasks</H4>
    <ToDoList tasks={tasks} setTasks={setTasks} userId={userId}></ToDoList>
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