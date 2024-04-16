'use client'
require('dotenv').config();

import TodoItem from "@/app/ui/todolist/TodoItem";
import {Todo} from "@/app/lib/defenitions";
import AddTodoItem from "@/app/ui/todolist/AddTodo";
import {getServerSideProps} from "@/app/lib/action";
import {useEffect, useState} from "react";

export default function Page() {

    const [data, setData] = useState([]);
    const [dataChanged, setDataChanged] = useState(false)

    const changeData:(() => void)  = () => {
        setDataChanged(!dataChanged)
    }

    useEffect(() => {
        fetchData().then(() => console.log("data is changed"));
    }, [dataChanged]);

    const fetchData = async () => {
        try {
            const response = await getServerSideProps();
            setData(response.props.initialTodos);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    console.log(process.env.NEXT_PUBLIC_BACKEND_URL)

    return (
        <div className="w-96 m-auto h-auto shadow-lg rounded-lg overflow-hidden mt-40">
            <div className="px-4 py-2">
                <h1 className="text-cyan-50 font-bold text-2xl uppercase">Your To-Do List</h1>
            </div>
            <AddTodoItem changeHandler={changeData}/>
            <ul className="divide-y divide-gray-200 px-4">
                {data.toReversed().map((item: Todo) => (
                    <TodoItem changeData={changeData} key={item._id} todo={item} />
                ))}
            </ul>
        </div>
    );
}

