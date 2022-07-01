import React, {useState} from "react";
import Router from "next/router";
import { prisma } from "@prisma/client";

const UserSignup = () => {
    const [username, setUsernaname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword]= useState('');
    const [imgage, setImage]= useState('');
    
    return(
        <form >
            
        </form>
    )
}

export default UserSignup;