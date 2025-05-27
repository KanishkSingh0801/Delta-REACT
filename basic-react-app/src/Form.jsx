import React from 'react';

function handleSubmit(event) {
    event.preventDefault();
    console.log("Form was submitted");
}
function Form() {
    return ( 
        <form>
            <input placeholder = "Enter"></input>
            <button onClick={handleSubmit}>Submit</button>
        </form>
     );
}

export default Form;