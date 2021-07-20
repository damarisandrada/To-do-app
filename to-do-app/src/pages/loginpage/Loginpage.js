import React from 'react';
import Form from './loginform/Loginform';
import { Container } from "./Loginpage.style"
import { useState } from 'react';

const ContentLogin = () =>{
    const [mailInputL, setMailInputL] = useState("");
    const [passwordInputL, setPasswordInputL] = useState("");
    return(
        <Container>
         <Form mailInputL={mailInputL} setMailInputL={setMailInputL} passwordInputL={passwordInputL} setPasswordInputL={setPasswordInputL}></Form>   
        </Container>
    );
    };
    
    export default ContentLogin;