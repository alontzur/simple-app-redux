import { Suspense, useDeferredValue, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import { toggleFilter } from "../redux/filter";
import { addTodo } from "../redux/list";
import { Store, Todo } from "../types/types";
import './list.scss';
import { Todos } from "./todos";

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
    const [searchInput, setSearchInput] = useState<string | null>('');
    const deferredSearchInput = useDeferredValue(searchInput);
    const isStale = searchInput !== deferredSearchInput;
    const [visibleTodos, setVisibleTodos] = useState<Todo[]>(todos);

    useEffect(() => {
        setVisibleTodos(todos.filter(t => t.text.includes(deferredSearchInput + '')))
    }, [deferredSearchInput])

    return (
        <>
            <input placeholder="search" value={searchInput + ''} onChange={e => setSearchInput(e.target.value)} />
            <button onClick={() => dispatch(toggleFilter())}>
                {isFilter ? 'remove filter' : 'filter'}
            </button>
            <Suspense fallback={<h2>Loading...</h2>}>{/*only for first render*/}
                <div style={{
                    opacity: isStale ? 0.5 : 1,
                    transition: isStale ? 'opacity 0.2s 0.2s linear' : 'opacity 0s 0s linear'
                }}>
                    <Todos visibleTodos={visibleTodos} input={deferredSearchInput + ''} />
                </div>
            </Suspense>
            <input placeholder="create new todo" onChange={e => setNewInput(e.target.value)} />
            <button onClick={() => dispatch(addTodo({ id: uuidv4(), isComplete: false, text: newInput || '' }))}>add</button>
        </>
    )
}
