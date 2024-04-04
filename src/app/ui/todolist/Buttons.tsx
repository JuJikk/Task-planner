'use client'

import {deleteTodo} from "@/app/lib/data";
import {FaEdit, FaTrash} from "react-icons/fa";
import React from "react";
import {TodoItemProps} from "@/app/lib/defenitions";

interface numberId {
    todoId: number,
    changeData: () => void
}

const ButtonsTodo: React.FC<numberId> = ({ todoId,changeData }) => {
  return (
    <div className="">
      <button
        onClick={() => deleteTodo(todoId).then(() => changeData())}
        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded flex items-center flex-shrink-0 ml-2"
      >
        <FaTrash className="mr-1" /> {/* Delete icon */}
      </button>

      {/* Edit Button */}
      <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded flex items-center flex-shrink-0 ml-2">
        <FaEdit className="mr-1" /> {/* Edit icon */}
      </button>
    </div>
  );
};

export default ButtonsTodo