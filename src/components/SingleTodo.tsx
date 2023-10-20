// import React from 'react'

import { Todo } from "./model";
import { AiFillDelete, AiFillEdit, } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { GrUpdate } from "react-icons/gr"
import "./style.css";
import { useState } from "react";
// import TodoList from "./TodoList";
type Props = {
    todo: Todo,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const SingleTodo = ({ todo, todos, setTodos }: Props) => {
    const [edit, setEdit] = useState<boolean>(false)
    const [editTodo, setEditTodo] = useState<string>(todo.todo)
    const handlDone = (id: number) => {
        setTodos(todos.map((todo) => todo.id === id ? { ...todo, isDone: !todo.isDone } : todo))
    }

    const handlDelete = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }
    const handleEdit = (e: React.FormEvent, id: number) => {
        e.preventDefault();
        setTodos(
            todos.map((todo) => todo.id === id ? { ...todo, todo: editTodo } : todo));
        setEdit(false);
    }
    return (
        <form action="" className="todos__single">
            <span className="todo">
                {edit ? (
                    <span>
                        <input value={editTodo} onChange={(e) => { setEditTodo(e.target.value) }} className="todos__single--text" />
                        <span className="icon" onClick={(e) => { handleEdit(e, todo.id) }} onSubmit={(e) => { handleEdit(e, todo.id) }}>
                            <GrUpdate />
                        </span>
                    </span>
                ) :
                    (
                        todo.isDone ? (
                            <s className="todos__single--text">{todo.todo}</s>
                        ) :
                            (
                                <span className="todos__single--text">{todo.todo}</span>
                            )
                    )}

            </span>
            <div>
                <span className="icon" onClick={() => {
                    if (!edit && !todo.isDone) {
                        setEdit(!edit)
                    }
                }}>
                    <AiFillEdit />
                </span>
                <span className="icon" onClick={() => { handlDelete(todo.id) }}>
                    <AiFillDelete />
                </span>
                <span className="icon" onClick={() => { handlDone(todo.id) }}>
                    <MdDone />
                </span>
            </div>
        </form >
    )
}

export default SingleTodo