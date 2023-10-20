import React from 'react'
import "./style.css"
import { Todo } from './model'
import SingleTodo from './SingleTodo';
import { Droppable } from 'react-beautiful-dnd';
interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
    completedTodos: Todo[];
    setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;

}
const TodoList = ({ todos, setTodos }: Props) => {
    return (
        <div className="container">
            <Droppable droppableId='TodosList'>
                {
                    (provided) =>
                        <div className="todos" ref={provided.innerRef}{...provided.droppableProps}>
                            <span className="todos__heading">
                                Active Tasks
                            </span>
                            {todos.map((todo) => (
                                <SingleTodo todo={todo} key={todo.id} todos={todos} setTodos={setTodos}
                                />
                            ))}
                        </div>
                }
            </Droppable>
            <Droppable droppableId='RemoveList'>
                {
                    (provided) =>
                        <div className="todos remove" ref={provided.innerRef}{...provided.droppableProps}>
                            <span className="todos__heading">
                                Completed Tasks
                            </span>
                            {todos.map((todo) => (
                                <SingleTodo todo={todo} key={todo.id} todos={todos} setTodos={setTodos}
                                />
                            ))}
                        </div>
                }
            </Droppable>
        </div>
    )
}

export default TodoList