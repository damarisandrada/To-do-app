import React from 'react';
import Form from './registerform/Registerform';
import { Container } from './Registerpage.style';
import { useState } from 'react';

const ContentRegister = () =>{
    const [firstNameInput, setFirstNameInput] = useState("");
    const [lastNameInput, setLastNameInput] = useState("");
    const [mailInput, setMailInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    return(
        <Container>
         <Form firstNameInput={firstNameInput} setFirstNameInput={setFirstNameInput} lastNameInput={lastNameInput} setLastNameInput={setLastNameInput} mailInput={mailInput} setMailInput={setMailInput} passwordInput={passwordInput} setPasswordInput={setPasswordInput}></Form>   
        </Container>
    );
    };
    
    export default ContentRegister;