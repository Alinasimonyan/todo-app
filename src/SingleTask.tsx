import { FaRegEdit, FaCheck } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import { useState } from "react";

export const SingleTask = ({ todoObj, setEditTodo, taskList, setTaskList }) => {
  const [value, setValue] = useState(" ");

  const removeTask = (id: string) => {
    setTaskList(taskList.filter((t: object) => t.id !== id));
  };

  const toggleComplete = (id: string) => {
    const todoList = taskList.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTaskList(todoList);
  };

  const targetEdit = (id: string) => {
    const newTodo = taskList.find((todo) => todo.id === id);
    setEditTodo(newTodo);
  };

  return (
    <div className="bg-white rounded-l h-16 p-1 pl-5 mb-4 ml-5 mr-5 flex flex-row justify-between shadow-[0_3px_10px_rgb(0,0,0,0.1)]">
      <li className="flex flex-row gap-3">
        <input
          type="text"
          value={value || " "}
          className={
            todoObj.completed
              ? "font-extralight capitalize line-through"
              : "font-extralight capitalize"
          }
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      </li>
      <div className="flex flex-row gap-4">
        <button>
          <FaRegEdit onClick={() => targetEdit(todoObj.id)} />
        </button>
        <button onClick={() => toggleComplete(todoObj.id)}>
          <FaCheck />
        </button>
        <button className="text-black" onClick={() => removeTask(todoObj.id)}>
          <FaRegTrashCan />
        </button>
      </div>
    </div>
  );
};
