"use client";

import { TodoItemProps } from "@/app/lib/defenitions";
import React from "react";
import ButtonsTodo from "@/app/ui/todolist/Buttons";

const TodoItem: React.FC<TodoItemProps> = ({ todo,changeData }) => {
  // const [data, setData] = useState<Todo>(todo)
  //
  // useEffect(() => {
  //     changeServerSideProps(todo)
  // }, [data])

  const spanStyled = todo.done
    ? "text-balance line-through text-lg font-medium text-cyan-50"
    : "text-balance text-lg font-medium text-cyan-50";

  return (
    <li className="py-4">
      <div className="flex items-center">
        <input
          id="todo1"
          name="todo1"
          type="checkbox"
          defaultChecked={todo.done}
          className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
        />
        <div className="ml-3 flex flex-row w-full justify-between">
          {" "}
          {/* Container for label and buttons */}
          <label htmlFor="todo1" className="ml-3 text-gray-900 flex items-center">
            <span className={spanStyled}>{todo.title}</span>
          </label>
          <ButtonsTodo changeData={changeData} todoId={todo._id}/>
        </div>
      </div>
    </li>
  );
};

export default TodoItem;
