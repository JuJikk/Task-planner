import axios from "axios";
import {Todo, TodoCreate} from "@/app/lib/defenitions";
require('dotenv').config();

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL

export async function createTodo(newTodo: TodoCreate) {
        try {
                const response = await axios.post(`${BACKEND_URL}/api/posts`, newTodo);
                return response.data;
        } catch (error) {
                console.error('Error creating todo:', error);
                throw error;
        }
}

export async function fetchTodos() {
        try {
                const response = await axios.get(`${BACKEND_URL}/api/posts`);
                return response.data;
        } catch (error) {
                console.error('Error fetching todos:', error);
                throw error;
        }
}


export async function editTodo(updatedTodoData: Todo) {
        try {
                const response = await axios.put(`${BACKEND_URL}/api/posts`, [updatedTodoData]);
                return response.data;
        } catch (error) {
                console.error('Error updating todo:', error);
                throw error;
        }
}

export async function deleteTodo(id: number) {
        try {
                const response = await axios.delete(`${BACKEND_URL}/api/posts/${id}`)
                return response.data
        } catch (error) {
                console.error('Error deleting todo:', error);
                throw error;
        }
}