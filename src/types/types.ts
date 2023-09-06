export interface TodoList {
    todos: Todo[]
}

export interface Todo {
    id: string,
    text: string,
    isComplete: boolean,
}