import { FaRegEdit, FaCheck, FaRegClock } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";

interface ITaskObject {
  id: string;
  taskName: string;
  completed: boolean;
}

export const TaskList = ({ taskList, setEditTodo, setTaskList, editTodo }) => {
  const removeTask = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  const handleComplete = (id) => {
    const newList = taskList.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTaskList(newList);
  };

  const handleEdit = (id) => {
    const targetTodo = taskList.find((task) => task.id === id);
    setEditTodo(targetTodo);
  };
  return (
    <div>
      {taskList.map((task: ITaskObject) => (
        <div
          className="bg-white rounded-l h-12 w-96 p-1 pl-5 ml-5 mr-5 mt-5 flex flex-row justify-between shadow-[0_3px_10px_rgb(0,0,0,0.1)]"
          key={task.id}
        >
          <textarea
            value={task.taskName}
            onChange={(event) => event.preventDefault()}
            className="black w-full h-full"
            // {editTodo} ? disabled={true} : disabled={false}
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
