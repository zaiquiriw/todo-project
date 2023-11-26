/**
 * Represents a todo item.
 */
interface ITodo {
    _id: string;
    name: string;
    description: string;
    status: boolean;
    createdAt?: string;
    updatedAt?: string;
}

/**
 * Props for the Todo component. components take in props as an argument and return a React element.
 */
interface TodoProps {
    todo: ITodo;
}

type ApiDataType = {
    message: string;
    status: string;
    todos: ITodo[];
    todo?: ITodo;
}