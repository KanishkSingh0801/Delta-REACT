import { useState } from "react";

export default function Forms() {
  //   let [fullName, setFullName] = useState("");
  //   let [username, setUsername] = useState("");

  //   let handleNameChange = (event) => {
  //     setFullName(event.target.value);
  //   };

  //   let handleUsername = (event) => {
  //     setUsername(event.target.value);
  //   };

  let [formdata, setFormdata] = useState({
    fullName: "",
    userName: "",
    password: "",
  });

  let handleInputChange = (event) => {
    let fieldName = event.target.name;
    let newValue = event.target.value;

    setFormdata((currData) => {
    //   return { ...currData, [fieldName] : newValue };
    //                  or 
    return {...currData, [event.target.name] : event.target.value}
    });
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(formdata);
    setFormdata({
      fullName: "",
      userName: "",
      password : "",
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="fullname">Full name</label>
      {/* "htmlFor" is used instead of "for" because "for" is a reserved keyword in JS */}
      <br></br>
      <input
        id="fullname"
        placeholder="Enter your full name"
        type="text"
        value={formdata.fullName}
        onChange={handleInputChange}
        name="fullName"
      ></input>
      <br></br>
      <label htmlFor="username">Username</label>
      <br></br>
      <input
        id="username"
        placeholder="Enter your user name"
        type="text"
        value={formdata.userName}
        onChange={handleInputChange}
        name="userName"
      ></input>
      <br></br>
      <label htmlFor="password">Password</label>
      <br></br>
      <input
        id="password"
        placeholder="Enter your password"
        type="text"
        value={formdata.password}
        onChange={handleInputChange}
        name="password"
      ></input>
      <br></br>
      <button>Submit</button>
    </form>
  );
}
