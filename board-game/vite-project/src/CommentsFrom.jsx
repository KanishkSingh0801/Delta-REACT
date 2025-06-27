import { useState } from "react";
export default function CommentsForm({addNewComment}) {
    let [formData, setFormData] = new useState({
        username : "",
        remarks : "",
        rating : 5
    });

let handleInputChange = (event) => {
    setFormData((currData) => {
        return {...currData, [event.target.name]: event.target.value};
    })
}

let handleSubmit = (event) => {
    addNewComment(formData);
    event.preventDefault();
    setFormData({
        username : "",
        remarks : "",
        rating : 5
    })
}
  return (
    <div>
      <h4>Give a comment</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor = "username">Username</label>
        <input id = "username" name = "username" placeholder="username" type="text" value ={formData.username} onChange={handleInputChange}/>
        <br></br>
        <br></br>
        <label htmlFor="remarks">Remarks</label>
        <textarea id="remarks" name="remarks" value ={formData.remarks} placeholder="Add your remarks" onChange={handleInputChange}>
        </textarea>
        <br></br>
        <label htmlFor="rating">Rating</label>
        <input id = "rating"  name = "rating" placeholder="rating" type="number" min={1} max={5} value ={formData.rating} onChange={handleInputChange}/>
        <br></br>
        <br></br>
        <button>Add Comment</button>
      </form>
    </div>
  );
}
