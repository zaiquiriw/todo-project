
import { Request, Response } from 'express';
import { ITodo } from '../../types/todo';
import Todo from '../../models/todo';

/**
 * Get all todos.
 * 
 * @param req - The request object.
 * @param res - The response object.
 * @returns A promise that resolves to void.
 */
const getTodos = async (req: Request, res: Response): Promise<void> => {
    try {
        const todos: ITodo[] = await Todo.find();

        console.log("GET: " + todos.length + " todos");

        res.status(200).json({ todos });
    } catch (error) {
        throw error;
    }
};

/**
 * Add a new todo.
 * 
 * @param req - The request object.
 * @param res - The response object.
 * @returns A promise that resolves to void.
 */
const addTodo = async (req: Request, res: Response): Promise<void> => {
    try {
        
        const body = req.body as Pick<ITodo, 'name' | 'description' | 'status'>;
    
        console.log("POST: " + body.name + " " + body.description + " " + body.status);

        const todo: ITodo = new Todo({
            name: body.name,
            description: body.description,
            status: body.status
        });
        
        const newTodo: ITodo = await todo.save();
        const allTodos: ITodo[] = await Todo.find();
    
        res
            .status(201)
            .json({ message: 'Todo added', todo: newTodo, todos: allTodos });
    } catch (error) {
        throw error;
    }
}

/**
 * Update a todo.
 * 
 * @param req - The request object.
 * @param res - The response object.
 * @returns A promise that resolves to void.
 */ 
const updateTodo = async (req: Request, res: Response): Promise<void> => {
    try {
        const {
            params: { id },
            body,
        } = req;

        console.log("PUT: " + id + ", " + body.name + ", " + body.description + ", " + body.status);

        const updateTodo: ITodo | null = await Todo.findByIdAndUpdate(
            { _id: id },
            body
        );

        const allTodos: ITodo[] = await Todo.find();
        res.status(200).json({
            message: 'Todo updated', todo: updateTodo, todos: allTodos});
    } catch (error) {
        throw error;
    }
}

/**
 * Delete a todo.
 * 
 * @param req - The request object.
 * @param res - The response object.
 * @returns A promise that resolves to void.
 */
const deleteTodo = async (req: Request, res: Response): Promise<void> => {
    try {
        const deletedTodo: ITodo | null = await Todo.findByIdAndDelete(
            req.params.id
        );

        console.log("DELETE: " + deletedTodo?.name + " " + deletedTodo?.description + " " + deletedTodo?.status);
        const allTodos: ITodo[] = await Todo.find();
        res.status(200).json({
            message: 'Todo deleted', todo: deletedTodo, todos: allTodos});
    } catch (error) {
        throw error;
    }
}

export { getTodos, addTodo, updateTodo, deleteTodo };