import React from 'react'
import "./style.css"
import { Todo } from './model'
import SingleTodo from './SingleTodo';
interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const TodoList = ({ todos, setTodos }: Props) => {
    return (
        <div className="container">
            <div className="todos">
                <span className="todos__heading">
                    Active Tasks
                </span>
                <span>
                    {todos.map((todo) => (
                        <SingleTodo todo={todo} key={todo.id} todos={todos} setTodos={setTodos}
                        />
                    ))}
                </span>
            </div>
            <div className="todos remove">
                <span className="todos__heading">
                    Completed Tasks
                </span>
                <span>
                    {todos.map((todo) => (
                        <SingleTodo todo={todo} key={todo.id} todos={todos} setTodos={setTodos}
                        />
                    ))}
                </span>
            </div>
        </div>
    )
}

export default TodoList