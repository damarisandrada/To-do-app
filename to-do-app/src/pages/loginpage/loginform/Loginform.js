import React from 'react';
import { FormContainer, Formlogin, Input, Button } from "./Loginform.style"

const Form = () =>{
    return( 
<FormContainer>
<Formlogin>
         <label>Email
             <Input type="text"></Input>
         </label>
         <label>Password
             <Input type="password"></Input>
         </label>
         <Button type="submit">Submit</Button>
         <a href="/">Register</a>
     </Formlogin>
</FormContainer>
    );
    };
    
    export default Form;