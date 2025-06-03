import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  let [todos, setTodos] = useState([{ task: "sample-task", id: uuidv4() }]);
  let [newTodo, setNewTodo] = useState("");

  let addNew = () => {
    setTodos((prevTodos) => {
      return [...prevTodos, { task: newTodo, id: uuidv4(), isDone : false }];
    });
    setNewTodo("");
  };

  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

  let deleteTodo = (id) => {
    //we use filter method to delete an element from the array in REACT | This method returns a new array
    setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
  };

  let upperCaseAll = () => {
    //Updating all elements of the array
    setTodos((todos) =>
      todos.map((todo) => {
        return {
          ...todo,
          task: todo.task.toUpperCase(),
        };
      })
    );
  };

  let singleUpperCase = (id) => { //Update a single task to uppercase
    setTodos((todos) =>
      todos.map((todo) => {
        if (todo.id == id) { //Condition to convert into uppercase
          return {
            ...todo,
            task: todo.task.toUpperCase(),
          };
        } else {
          return todo;
        }
      })
    ); 
  };

  let markAsDone = (id) => { //To mark if the task is done or not
    setTodos((todos) =>
      todos.map((todo) => {
        if (todo.id == id) { //Condition to mark isDone
          return {
            ...todo,
            isDone: !todo.isDone,
          };
        } else {
          return todo;
        }
      })
    ); 
  };
  return (
    <div>
      <input
        placeholder="Add a task"
        value={newTodo}
        onChange={updateTodoValue}
      ></input>
      <button onClick={addNew}>Add task</button>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <h4>Tasks to do</h4>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span style={{textDecoration : todo.isDone ? "line-through" : "none"}}>{todo.task}</span> &nbsp;&nbsp;&nbsp;
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            <button onClick={() => singleUpperCase(todo.id)}>UpperCase</button>
            <button onClick={() => markAsDone(todo.id)}>Mark as done</button>
          </li>
        ))}
      </ul>
      <br />
      <button onClick={upperCaseAll}>UpperCaseAll</button>
    </div>
  );
}
