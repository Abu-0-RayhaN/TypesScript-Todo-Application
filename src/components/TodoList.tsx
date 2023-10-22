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
    index: number;

}
const TodoList = ({ todos, setTodos, completedTodos, setCompletedTodos, }: Props) => {
    return (
        <div className="container">
            <Droppable droppableId='TodosList'>
                {
                    (provided) =>
                        <div className="todos" ref={provided.innerRef}{...provided.droppableProps}>
                            <span className="todos__heading">
                                Active Tasks
                            </span>
                            {todos.map((todo, index) => (
                                <SingleTodo
                                    index={index}
                                    todo={todo}
                                    key={todo.id}
                                    todos={todos}
                                    setTodos={setTodos}
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
                            {completedTodos.map((todo, index) => (
                                <SingleTodo
                                    index={index}
                                    todo={todo}
                                    key={todo.id}
                                    todos={completedTodos}
                                    setTodos={setCompletedTodos}
                                />
                            ))}
                        </div>
                }
            </Droppable>
        </div>
    )
}

export default TodoList