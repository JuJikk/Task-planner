import TodoItem from "@/app/ui/todolast/TodoItem"

export interface Todo{
    id: number;
    title: string;
    done: boolean;
}

export default function Page() {
    const initialTodos: Todo[] = [
        { id: 0, title: "Buy milk", done: true },
        { id: 1, title: "Eat tacos", done: false },
        { id: 2, title: "Brew tea", done: true },
    ];
    return (
        <div className="w-96 m-auto h-auto shadow-lg rounded-lg overflow-hidden mt-40">
            <div className="px-4 py-2">
                <h1 className="text-cyan-50 font-bold text-2xl uppercase">Your To-Do List</h1>
            </div>
            <form className="w-full max-w-sm mx-auto px-4 py-2">
                <div className="flex items-center border-b-2 border-teal-500 py-2">
                    <input
                        className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                        type="text" placeholder="Add a task" />
                    <button
                        className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                        type="button">
                        Add
                    </button>
                </div>
            </form>
            {initialTodos.map((item) => (
                <ul className="divide-y divide-gray-200 px-4" key={item.id}>
                    <TodoItem todo={item}/>
                </ul>
            ))}
        </div>
    )
}