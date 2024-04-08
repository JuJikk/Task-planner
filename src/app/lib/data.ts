import axios from "axios";
import {Todo, TodoCreate} from "@/app/lib/defenitions";

export async function createTodo(newTodo: TodoCreate) {
        try {
                const response = await axios.post('http://localhost:4000/api/posts', newTodo);
                return response.data;
        } catch (error) {
                console.error('Error creating todo:', error);
                throw error;
        }
}

export async function fetchTodos() {
        try {
                const response = await axios.get('http://localhost:4000/api/posts');
                return response.data;
        } catch (error) {
                console.error('Error fetching todos:', error);
                throw error;
        }
}


export async function editTodo(updatedTodoData: Todo) {
        try {
                const response = await axios.put('http://localhost:4000/api/posts', [updatedTodoData]);
                return response.data;
        } catch (error) {
                console.error('Error updating todo:', error);
                throw error;
        }
}

export async function deleteTodo(id: number) {
        try {
                const response = await axios.delete(`http://localhost:4000/api/posts/${id}`)
                return response.data
        } catch (error) {
                console.error('Error deleting todo:', error);
                throw error;
        }
}