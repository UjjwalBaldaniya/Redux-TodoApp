import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, clearTodo, deleteTodo, editTodo } from "../redux/actions";
import { AiFillDelete } from "react-icons/ai";
import { BiSolidEdit } from "react-icons/bi";
import '../styles/todo.css'

const Todo = () => {
    const [inputField, setInputField] = useState("");
    const [toggle, setToggle] = useState(false);
    const [listId, setListId] = useState();

    const listSelector = useSelector((state) => state.todoReducer.list)
    const dispatch = useDispatch()

    const handleChange = (e) => {
        setInputField(e.target.value)
    }

    const handleAddTodo = (e) => {
        e.preventDefault()
        if (toggle) {
            dispatch(editTodo(listId, inputField))
            setToggle(false)
        } else {
            dispatch(addTodo(inputField))
        }
        setInputField("")
    }

    const handleEdit = (id, inputField) => {
        const newInputField = listSelector[id]
        setInputField(newInputField)
        setListId(id)
        setToggle(true)
    }

    return (
        <>
            <div className="todo_container">
                <div className="input_form">
                    <h1 className="title">Todo App with Redux</h1>
                    <form>
                        <input type="text" name="todo" placeholder="Enter todo hear ..." value={inputField} onChange={handleChange} />
                        <button onClick={handleAddTodo}>{toggle ? "Edit" : "Add"} Todo</button>
                    </form>
                </div>
                <div className="list">
                    {listSelector.map((element, index) => (
                        <ul key={index}>
                            <li>{element}</li>
                            <div className="icons">
                                <span onClick={() => handleEdit(index)}><BiSolidEdit color="white" fontSize="1.5em" cursor="pointer" /></span>
                                <span onClick={() => dispatch(deleteTodo(index))}><AiFillDelete color="white" fontSize="1.5em" cursor="pointer" /></span>
                            </div>
                        </ul>
                    ))}
                </div>
                <div className="clear">
                    <button onClick={() => dispatch(clearTodo())}>Clear Todo</button>
                </div>
            </div>
        </>
    )
};

export default Todo;
