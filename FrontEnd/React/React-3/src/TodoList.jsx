import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

export default function TodoList() {
    let [todos, setTodos] = useState([{task: "sample-task", id: uuidv4(), isDone: false}]);
    let [newTodo, setNewTodo] = useState("");
    let addNewTask = () => {
        setTodos([...todos, {task: newTodo, id: uuidv4(), isDone: false}]);
        setNewTodo("");
    }
    let updateTodoValue = (event)=> {
        setNewTodo(event.target.value);
    }
    let deleteTodo = (id) => {
        setTodos((prevTodo) => 
            todos.filter((prevTodo) => prevTodo.id != id))
    }
    // let upperCaseAll = () => {
    //     setTodos((prevTodos) => (
    //         prevTodos.map((todo) => {
    //             return {
    //                 ...todo, task: todo.task.toUpperCase(),
    //             }
    //         })
    //     ))
    // } - when updating the array to all

    // let upperCase = (id) => {
    //     setTodos((prevTodos) => (
    //                 prevTodos.map((todo) => {
    //                     if(todo.id == id) {
    //                         return {
    //                             ...todo, task: todo.task.toUpperCase(),
    //                         }
    //                     }
    //                     else {
    //                         return todo;
    //                     }
                        
    //                 })
    //             ))
    // }
    let markAsDone = (id) => {
        setTodos((prevTodos) => (
                    prevTodos.map((todo) => {
                        if(todo.id == id) {
                            return {
                                ...todo, isDone: true,
                            }
                        }
                        else {
                            return todo;
                        }
                        
                    })
                ))
    }

    return (
        <div>
            <h1>Todo List</h1>
            <br></br>
            <br></br>
            <input placeholder="add a task" value={newTodo} onChange={updateTodoValue}></input>
            <br></br>
            <br></br>
            <button onClick={addNewTask}>Add Task</button>
            <br></br>
            <br></br>
            <hr></hr>
            <h4>Task Todo</h4>
            <ul>
                {
                    todos.map((todo) =>  (
                        <li key={todo.id}>
                        <span style={todo.isDone ? {textDecorationLine: "line-through"} : {}}>{todo.task}</span>
                        &nbsp; 
                        &nbsp; 
                        &nbsp; 
                        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                        <button onClick={() => markAsDone(todo.id)}>Mark as Done</button>
                        {/* <button onClick={() => upperCase(todo.id)}>UpperCase</button> */}
                        </li> // while adding dynamically we must use unique key 
                    ))
                }
            </ul>
            <br></br>
            {/* <button onClick={upperCaseAll}>UpperCase All</button> */}
            {/* <button onClick={upperCaseAll}>Mark as Done -  All</button> */}
        </div>
    )
}