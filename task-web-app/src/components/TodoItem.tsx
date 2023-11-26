import React from "react";

/**
 * Component for displaying a Todo.
 * @param {Props} props - The component props.
 * @param {ITodo} props.todo - The todo object.
 * @param {(todo: ITodo) => void} props.updateTodo - The function to update a todo.
 * @param {(_id: string) => void} props.deleteTodo - The function to delete a todo.
 */
type Props = TodoProps & {
    updateTodo: (todo: ITodo) => void;
    deleteTodo: (_id: string) => void;
};

const Todo: React.FC<Props> = ({ todo, updateTodo, deleteTodo }) => {
    const checkTodo: string = todo.status ? 'line-through' : '';
    console.log(todo.status);
    return (
        <div className="Card">
            <div className="Card--text">
                <h1 className={checkTodo}>{todo.name}</h1>
                <span className={checkTodo}>{todo.description}</span>
            </div>
            <div className="Card--button">
                <button
                    onClick={() => updateTodo(todo)}
                    className={todo.status ? 'hide-button' : 'Card--button__done'}
                >
                    Complete
                </button>
                <button
                    onClick={() => deleteTodo (todo._id)}
                    className="Card--button__delete"
                >
                    Delete
                </button>
            </div>
        </div>
    )
}

export default Todo;