import React, { useState } from "react";
import axios from 'axios';

function handleSubmit(event){
event.preventDefault();
axios.post("http://localhost:3000/api/users", {username,password,email})
.then((resp) => {
    alert("Se han enviado los datos a la base");
    console.log(resp);
})
.catch((error) => {
    alert("Hubo un error, anda pa ya bobo");
    console.log(error)
})
}
export const MyEvent = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email,setEmail] = useState("");

    return (
        <div style={{"width":"100px", "padding":"10px"}}>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="">username</label>
                <input type="text" name="username" id="username" value={username} onChange={(event) => setUsername(event.target.value)}/>
                <label htmlFor="">Password</label>
                <input type="password" value={password} name="password" id="password" onChange={(event) => setPassword(event.target.value)}/>
                <label htmlFor="">Email</label>
                <input type="email" value={email} name="email" id="email" onChange={(event) => setEmail(event.target.value)}/>
                <button className="button">Submit</button>
            </form>
        </div>
    )
}