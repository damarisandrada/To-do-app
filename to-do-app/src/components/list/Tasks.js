import { Button, Container, Li } from './Tasks.style';
import axios from 'axios';

const Tasks = ({ text, completed, id, tasks, setTasks }) => {

    const deleteButton = () => {

        setTasks(tasks.filter((el) => el.id !== id))

        axios
            .delete('https://todo-application-2.herokuapp.com/action', {
                data: {
                    id: id,
                },
            })
            .then((res) => console.log(res))
    };
    
    const checkButton = (completed) => {

        axios
            .put(`https://todo-application-2.herokuapp.com/action`, {
                "id": id,
                "isDone": !completed,
            })
            .then((res) => { console.log(res); setTasks(tasks.map(newtask => newtask.id === id ? { ...newtask, isDone: !completed } : newtask)) });
    };

    return (
        <Container className="tasks">
            <input value={completed} checked={completed} type="checkbox" onClick={() => checkButton(completed)}></input>
            <Li>{text}</Li>
            <Button onClick={() => deleteButton()} className="delete">X</Button>
        </Container>
    );
};

export default Tasks;