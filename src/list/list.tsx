import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import { addTodo, removeTodo, toggleTodo } from "../redux/list";
import { Todo, Store } from "../types/types";
import './list.scss';
import { toggleFilter } from "../redux/filter";

interface ToDoListProps {

}

export function ToDoList({ }: ToDoListProps) {

    const todos = useSelector<Store, Todo[]>(state => {
        return state.filter ?
            state.todos.filter(t => !t.isComplete) :
            state.todos;
    });
    const isFilter = useSelector<Store, boolean>(state => state.filter);
    const dispatch = useDispatch()

    const [newInput, setNewInput] = useState<string | null>(null);

    return (
        <>
            <button onClick={() => dispatch(toggleFilter())}>
                {isFilter ? 'remove filter' : 'filter'}
            </button>
            {
                todos.map(todo =>
                    <div className='todo' key={todo.id}>
                        <input type="checkbox" onChange={() => dispatch(toggleTodo(todo.id))} checked={todo.isComplete} />
                        <p>{todo.text}</p>
                        <button onClick={() => dispatch(removeTodo(todo.id))}>X</button>
                    </div>)
            }
            <input placeholder="create new todo" onChange={e => setNewInput(e.target.value)} />
            <button onClick={() => dispatch(addTodo({ id: uuidv4(), isComplete: false, text: newInput || '' }))}>add</button>
        </>
    )
}