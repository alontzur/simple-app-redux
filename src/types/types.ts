export interface Store {
    todos: Todo[],
    filter: boolean
}

export interface Todo {
    id: string,
    text: string,
    isComplete: boolean,
}