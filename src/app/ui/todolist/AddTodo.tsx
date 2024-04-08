'use client'
import {createServerTodo} from "@/app/lib/action";
import {useState} from "react";
interface Props {
    changeHandler: () => void;
}
const AddTodoItem = ({changeHandler}: Props) => {
    const [task, setTask] = useState('');

    const handleAddButtonClick = () => {
        if (task.trim() !== '') {
            createServerTodo({ title: task, done: false }).then(() => changeHandler());
            setTask('');
        }
    };

    return (
      <form
        onSubmit={(event) => {
          event.preventDefault();
            handleAddButtonClick()
        }}
        className="w-full max-w-sm mx-auto px-4 py-2"
      >
        <div className="flex items-center border-b-2 border-teal-500 py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-cyan-50 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Add a task"
            value={task}
            onChange={(event) => {
              setTask(event.target.value);
            }}
          />
          <button
            className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="submit"
          >
            Add
          </button>
        </div>
      </form>
    );
}

export default AddTodoItem