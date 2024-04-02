import {Todo} from '@/app/todolist/page'
import React from "react";

interface TodoItemProps {
    todo: Todo;
}
const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
    console.log(todo);
    return (
        <li className="py-4">
            <div className="flex items-center">
                <input id="todo1" name="todo1" type="checkbox" checked={todo.done}
                       className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"/>
                <label htmlFor="todo1" className="ml-3 block text-gray-900">
                    <span className="text-lg font-medium text-cyan-50">{todo.title}</span>
                </label>
            </div>
        </li>
    );
};

export default TodoItem