import { useState } from "react";

export default function Form(){

    let [fullName, setFullName] = useState("");
    let [username, setUsername] = useState("");
     
    let handleNameChange = (event) =>{
        setFullName(event.target.value);

    };

    let handlUsername = (event) =>{
        setUsername(event.target.value);

    };




    return (
        <form>
            <label htmlFor="username">Full name</label>
            <input placeholder="enter your full name" 
            type="text"
             value={fullName} 
             onChange={handleNameChange}
             id="fullName"
             />
        <br /><br /><hr /><hr /><br /><br />
            <label htmlFor="username">User Name</label>
            <input placeholder="enter your full name" 
            type="text"
             value={username} 
             onChange={handlUsername}
             id="userName"
             />
<br /><br /><br /><hr /><hr /><br />
            <button> Submit</button>
        </form>
    );
}