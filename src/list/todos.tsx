import { useDispatch } from "react-redux";
import { selectorFamily, useRecoilValue } from "recoil";
import { removeTodo, toggleTodo } from "../redux/list";
import { Todo } from "../types/types";

interface TodosProps {
    visibleTodos: Todo[],
    input: string,
}

export const getXXX = selectorFamily({
    key: 'xxxx',
    get: (text: string) => async ({ get }) => {
        await new Promise(function (resolve, reject) {

            // Setting 2000 ms time
            setTimeout(resolve, 2000);
        })
        return text;
    },
    // cachePolicy_UNSTABLE: {eviction: 'lru', maxSize: 0}
});

export function Todos({ visibleTodos, input }: TodosProps) {

    const dispatch = useDispatch();
    const xxx = useRecoilValue(getXXX(input));

    return (
        <>
            {
                visibleTodos.map(todo =>
                    <div className='todo' key={todo.id + xxx}>
                        <input type="checkbox" onChange={() => dispatch(toggleTodo(todo.id))} checked={todo.isComplete} />
                        <p>{todo.text}</p>
                        <button onClick={() => dispatch(removeTodo(todo.id))}>X</button>
                    </div>)
            }
        </>
    )
}