import { useState } from "react";
import { Fragment } from "react";
import './todo.css'

import SearchBar from "../others/searchBar";



function TodoList() {
    const todoList = [
        { name: "project1", isDeleted: false, isCompleted: false },
        { name: "project2", isDeleted: false, isCompleted: false },
        { name: "project3", isDeleted: false, isCompleted: false },
        { name: "project4", isDeleted: false, isCompleted: false }]
    let [count, setCount] = useState(0)
    let [list, setlist] = useState(todoList)
    let [value, setValue] = useState('')

    function addList() {
        const newTodo = {
            name: value,
            isDeleted: false,
            isCompleted: false
        }
        setlist([...list, newTodo])
        console.log(list)
        setCount(count=count+1)
        setValue('')
    }

    function captureUserInput(event) {
        setValue(event.target.value)
    }

    function completeTodo(item) {
        const indexOfClickedTodo = list.findIndex(Nm => Nm.name === item.name)
        console.log(item, indexOfClickedTodo)
        list[indexOfClickedTodo].isCompleted = !list[indexOfClickedTodo].isCompleted
        setlist([...list])
        console.log(list)
    }

    function deleteTodo(item) {
        const indexOfClickedTodo = list.findIndex(Nm => Nm.name === item.name)
        list.splice(indexOfClickedTodo, 1);
        setlist([...list])
        setCount(count=count-1)
    }

    return (
        <Fragment>
        {/* <SearchBar placeholder="Enter a Todo List.." data = {list}/> */}
            <div className="outerDiv" >
            <SearchBar placeholder="Enter a Todo List.." data = {list}/>
                <div className="innerDiv">
                
                    <h1 style={{ color: 'white' }} >Pending tasks({count})</h1>
                    <ul>
                        {list.map((item) => (<div style={{ display: 'flex', justifyContent: 'space-around' }}>
                            <li className="TodoList" style={{ color: 'white', textDecoration: item.isCompleted ? 'line-through' : 'none' }}>{item.name}</li>
                            <button onClick={() => completeTodo(item)} id="complete" style={{ borderRadius: '10px', border: '3px solid green' }}>{item.isCompleted ? 'Restart' : 'Complete'}</button>
                            <button onClick={() => deleteTodo(item)} id="delete" style={{ borderRadius: '10px', border: '3px solid red' }}>Delete</button>
                        </div>))}
                    </ul>
                    <input onChange={captureUserInput} value={value} placeholder="Add new task"></input>
                    <button onClick={addList} value={value}>Add-Item</button>
                </div>
            </div>
        </Fragment>
    )
}

export default TodoList







