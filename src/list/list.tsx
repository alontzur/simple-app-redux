import { useDispatch, useSelector } from "react-redux"
import { Todo, TodoList } from "../types/types"
import './list.scss'
import { useState } from "react";
import { addTodo, removeTodo } from "../redux/list";
import { v4 as uuidv4 } from 'uuid';

interface ToDoListProps {

}

export function ToDoList({ }: ToDoListProps) {

    const todos = useSelector<TodoList, Todo[]>(state => state.todos);
    const dispatch = useDispatch()

    const [newInput, setNewInput] = useState<string | null>(null);

    return (
        <>
            {
                todos.map(todo =>
                    <div className='todo' key={todo.id}>
                        <input type="checkbox" />
                        <p>{todo.text}</p>
                        <button onClick={() => dispatch(removeTodo(todo.id))}>X</button>
                    </div>)
            }
            <input placeholder="create new todo" onChange={e => setNewInput(e.target.value)}/>
            <button onClick={() => dispatch(addTodo({id: uuidv4(), isComplete: false, text: newInput || ''}))}>add</button>
        </>
    )
}