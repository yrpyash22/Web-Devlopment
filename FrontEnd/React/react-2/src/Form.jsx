import { useState } from "react"

export default function Form() {
    // let [fullName, setFullName] = useState("");
    // let [userName, setUserName] = useState("");
    // let handleNameChange = (event) => {
    //     setFullName(event.target.value);
    // }
    // let handleUserChange = (event) => {
    //     setUserName(event.target.value);
    // }
    let [formData, setFormData] = useState({
        fullName: "", 
        userName: ""
    });

    let handleInputChange = (event) => {
        let fieldName = event.target.name;
        let newValue = event.target.value;
        setFormData( (currData) => {
            currData[fieldName] = newValue;
            return {...currData};
        }
        )
    }
    let handleSubmit = (event) => {
        event.preventDefault();
        setFormData({
            fullName: "", 
            userName: ""
        })
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullname">Full Name</label>
            <input placeholder="enter your full name" 
            type="text" 
            value={formData.fullName} 
            onChange={handleInputChange}
            id="username"
            name="fullName"></input>
            <br></br>
            <br></br>

            <label htmlFor="username">Username</label>
            <input placeholder="enter your username name" 
            type="text" 
            value={formData.userName} 
            onChange={handleInputChange}
            id="username"
            name="userName"></input>
            <br></br>
            <br></br>

            <button>Submit</button>
        </form>
    )
}