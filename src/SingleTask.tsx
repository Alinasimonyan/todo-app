import { FaRegEdit } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";

export const SingleTask = ({ task, removeTask }) => {
  return (
    <div className="bg-white rounded-2xl h-16 p-1 pl-5 mb-4 flex flex-row justify-between">
      <div className="flex flex-col">
        <h3 className="font-semibold">{task.taskName}</h3>
        <p className="font-extralight italic ">Description</p>
      </div>
      <div className="flex flex-row gap-4">
        <button>
          <FaRegEdit />
        </button>
        <button className="text-black" onClick={() => removeTask(task.id)}>
          <FaRegTrashCan />
        </button>
      </div>
    </div>
  );
};
