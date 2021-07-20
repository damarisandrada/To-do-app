import React from 'react';
import { FormContainer, Formlogin, Input, Button } from "./Loginform.style"
import axios from 'axios';

const Form = ({mailInputL, setMailInputL, passwordInputL, setPasswordInputL}) =>{
    const mailL = (e) => {
        console.log(e.target.value);
        setMailInputL(e.target.value);
    };
    const passwordL = (e) => {
        console.log(e.target.value);
        setPasswordInputL(e.target.value);
    }

    const submitButtton = (e) => {
        e.preventDefault();
        console.log(mailInputL, passwordInputL);

        axios
        .post(`https://todo-application-2.herokuapp.com/loginPerson`,{
            "mail" : mailInputL,
            "password" : passwordInputL,
        })
        .then((res) => console.log(res));
        
    }
    return( 
<FormContainer>
<Formlogin>
         <label>Email
             <Input type="text" onChange={mailL}></Input>
         </label>
         <label>Password
             <Input type="password" onChange={passwordL}></Input>
         </label>
         <Button type="submit" onClick={submitButtton}>Submit</Button>
         <a href="/">Register</a>
     </Formlogin>
</FormContainer>
    );
    };
    
    export default Form;