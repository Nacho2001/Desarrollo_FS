import React from "react";
import './UserForm.css'
export default function UserForm(){
    return (
        <div>
            <label>Username</label>
            <input type="text"/>
            <label>Password</label>
            <input type="password"/>
            <label>Email</label>
            <input type="email"/>
        </div>
    )
}