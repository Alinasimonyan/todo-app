import { FaRegEdit } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";

export const SingleTask = ({ todoObj, removeTask, toggleComplete, editTask }) => {
  
  return (
    <div className="bg-white rounded-l h-16 p-1 pl-5 mb-4 ml-5 mr-5 flex flex-row justify-between shadow-[0_3px_10px_rgb(0,0,0,0.1)]">
      <div className="flex flex-row gap-3">
        <input
          type="checkbox"
          checked={todoObj.completed}
          onChange={() => {
            toggleComplete(todoObj.id);
          }}
        />
        <h3
          className={
            todoObj.completed
              ? "font-extralight capitalize line-through"
              : "font-extralight capitalize"
          }
        >
          {todoObj.taskName}
        </h3>
        <p className="font-extralight italic "></p>
      </div>
      <div className="flex flex-row gap-4">
        <button onClick={() => editTask(todoObj.id)}>
          <FaRegEdit />
        </button>
        <button className="text-black" onClick={() => removeTask(todoObj.id)}>
          <FaRegTrashCan />
        </button>
      </div>
    </div>
  );
};
