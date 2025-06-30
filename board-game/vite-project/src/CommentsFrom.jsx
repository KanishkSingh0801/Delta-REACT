import { useState } from "react";
import { Formik, Form, Field, useFormik } from "formik";

export default function CommentsForm({ addNewComment }) {
  // let [formData, setFormData] = new useState({
  //     username : "",
  //     remarks : "",
  //     rating : 5
  // }); Comment out because we are using formik for handling submit
  const validate = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = "Required";
    }

    return errors;
  };
  const formik = useFormik({
    initialValues: {
      username: "",
      remarks: "",
      rating: 5,
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  // let handleInputChange = (event) => {
  //   setFormData((currData) => {
  //     return { ...currData, [event.target.name]: event.target.value };
  //   });
  // }; Comment out because we are using formik for handling submit

  // let handleSubmit = (event) => {
  //   addNewComment(formData);
  //   event.preventDefault();
  //   setFormData({
  //     username: "",
  //     remarks: "",
  //     rating: 5,
  //   });
  // }; Comment out because we are using formik for handling submit

  return (
    <div>
      <h4>Give a comment</h4>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          name="username"
          placeholder="username"
          type="text"
          value={formik.values.username}
          onChange={formik.handleChange}
        />
        {formik.errors.username ? <div>{formik.errors.username}</div> : null}
        <br></br>
        <br></br>
        <label htmlFor="remarks">Remarks</label>
        <textarea
          id="remarks"
          name="remarks"
          value={formik.values.remarks}
          placeholder="Add your remarks"
          onChange={formik.handleChange}
        ></textarea>
        <br></br>
        <label htmlFor="rating">Rating</label>
        <input
          id="rating"
          name="rating"
          placeholder="rating"
          type="number"
          min={1}
          max={5}
          value={formik.values.rating}
          onChange={formik.handleChange}
        />
        <br></br>
        <br></br>
        <button type="submit">Add Comment</button>
      </form>
    </div>
  );
}
