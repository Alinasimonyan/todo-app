import { FaRegEdit, FaCheck, FaRegClock } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";

interface ITaskObject {
  id: string;
  taskName: string;
  completed: boolean;
}

export const TaskList = ({ taskList, setEditTodo, setTaskList }) => {
  const removeTask = (id: string) => {
    const confirmRemove = window.confirm(
      "Are you sure you want to delete the task?"
    );
    if (confirmRemove) {
      setTaskList(taskList.filter((task: ITaskObject) => task.id !== id));
    }
  };

  const handleComplete = (id: string) => {
    const newList = taskList.map((task: ITaskObject) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTaskList(newList);
  };

  const handleEdit = (id: string) => {
    const targetTodo = taskList.find((task: ITaskObject) => task.id === id);
    setEditTodo(targetTodo);
  };
  return (
    <div>
      {taskList.map((task: ITaskObject) => (
        <div
          className="bg-white rounded-l h-12 w-96 p-1 pl-5 pr-4 ml-5 mr-5 mt-5 flex flex-row justify-between shadow-[0_3px_10px_rgb(0,0,0,0.1)]
          rounded-md
          "
          key={task.id}
        >
          <input
            value={task.taskName}
            disabled={true}
            onChange={(event) => event.preventDefault()}
            className="black w-full h-full "
          />
          <div className="flex flex-row gap-3 ml-5">
            <button onClick={() => removeTask(task.id)}>
              <FaRegTrashCan />
            </button>
            <button onClick={() => handleComplete(task.id)}>
              {task.completed ? <FaCheck /> : <FaRegClock />}
            </button>
            <button onClick={() => handleEdit(task.id)}>
              <FaRegEdit />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
