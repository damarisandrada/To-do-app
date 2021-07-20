import React from 'react';
import { FormContainer, Formregister, Input, Button } from './Registerform.style';
import axios from 'axios';

const Form = ({firstNameInput, setFirstNameInput, lastNameInput, setLastNameInput, mailInput, setMailInput, passwordInput, setPasswordInput}) =>{
    const firstName = (e) =>{
        console.log(e.target.value);
        setFirstNameInput(e.target.value);
            };
    const lastName = (e) =>{
        console.log(e.target.value);
        setLastNameInput(e.target.value);
            };
     const mail = (e) =>{
        console.log(e.target.value);
        setMailInput(e.target.value);
            };
    const password = (e) =>{
        console.log(e.target.value);
        setPasswordInput(e.target.value);
            };

    const submitButtton = (e) => {
        e.preventDefault();
        console.log(firstNameInput, lastNameInput, passwordInput, mailInput)

        axios
        .post(`https://todo-application-2.herokuapp.com/registerPerson`,{
            "mail" : mailInput,
            "password" : passwordInput,
            "firstName" : firstNameInput,
            "lastName": lastNameInput
        })
        .then((res) => console.log(res));
    }
    return( 
<FormContainer>
<Formregister>
         <label>First name
             <Input type="text" onChange={firstName}></Input>
         </label>
         <label>Last Name
             <Input type="text" onChange={lastName}></Input>
         </label>
         <label>Email
             <Input type="text" onChange={mail}></Input>
         </label>
         <label>Password
             <Input type="password" onChange={password}></Input>
         </label>
         <Button type="submit" onClick={submitButtton}>Submit</Button>
         <a href="/Login">Login</a>
     </Formregister>
</FormContainer>
    );
    };
    
    export default Form;