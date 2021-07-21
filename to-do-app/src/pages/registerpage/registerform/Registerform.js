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
        console.log(firstNameInput, lastNameInput, mailInput, passwordInput)

        axios
        .post(`https://todo-application-2.herokuapp.com/registerPerson`,{
            "email" : mailInput,
            "password" : passwordInput,
            "firstName" : firstNameInput,
            "lastName": lastNameInput
        })
        .then((res) =>  res.statusText === "OK" ? window.location.href = "http://localhost:3000/Login" :  console.log("Eroare"));
       
        
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