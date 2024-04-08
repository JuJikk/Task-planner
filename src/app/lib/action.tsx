import {createTodo, editTodo, fetchTodos} from "@/app/lib/data";
import {Todo, TodoCreate} from "@/app/lib/defenitions";


export async function createServerTodo(todo: TodoCreate) {
    try {
        return await createTodo(todo);
    } catch (error) {
        console.error("An error occurred while creating todos:", error);
        return {
            props: { initialTodos: [] }
        };
    }
}

export async function getServerSideProps() {
    try {
        const initialTodos = await fetchTodos();
        return {
            props: { initialTodos }
        };
    } catch (error) {
        console.error("An error occurred while fetching todos:", error);
        return {
            props: { initialTodos: [] }
        };
    }
}

export async function changeServerSideProps(todo: Todo) {
    try {
        todo.done = !todo.done
        return await editTodo(todo);
    } catch (error) {
        console.error("An error occurred while putting todos:", error);
        throw error;
    }
}