// import React from 'react'

import { Todo } from "./model";
import { AiFillDelete, AiFillEdit, } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import "./style.css";
// import TodoList from "./TodoList";
type Props = {
    todo: Todo,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const SingleTodo = ({ todo, todos, setTodos }: Props) => {
    const handlDone = (id: number) => {
        setTodos(todos.map((todo) => todo.id === id ? { ...todo, isDone: !todo.isDone } : todo))
    }

    const handlDelete = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }
    return (
        <form action="" className="todos__single">
            <span className="todo">
                {todo.isDone ? (
                    <s className="todos_single-text">{todo.todo}</s>
                ) :
                    (
                        <span className="todos_single-text">{todo.todo}</span>
                    )}
            </span>
            <div>
                <span className="icon">
                    <AiFillEdit />
                </span>
                <span className="icon" onClick={() => { handlDelete(todo.id) }}>
                    <AiFillDelete />
                </span>
                <span className="icon" onClick={() => { handlDone(todo.id) }}>
                    <MdDone />
                </span>
            </div>
        </form>
    )
}

export default SingleTodo