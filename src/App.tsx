import { ChangeEvent, FC, useEffect } from "react";
import { FaPlus } from "react-icons/fa6";
import { useState } from "react";
import { SingleTask } from "./SingleTask";
import { nanoid } from "nanoid";

const App: FC = () => {
  const got: object = JSON.parse(localStorage.getItem("tasks"));
  console.log(typeof got);
  const newArr: [] = [];
  const letNew = [...newArr, got];

  const [task, setTask] = useState<string>("");
  const [taskList, setTaskList] = useState<object[]>(letNew);

  const deleteAll = () => {
    setTaskList([]);
  };

  const removeTask = (id: string) => {
    setTaskList(taskList.filter((t) => t.id !== id));
  };

  function addTask(task: string) {
    setTaskList([
      ...taskList,
      {
        id: nanoid(),
        taskName: task,
        completed: false,
        isEditing: false,
      },
    ]);
    console.log(taskList);
  }

  const handleSubmit: React.FormEventHandler<HTMLInputElement> = (event) => {
    event.preventDefault();
    addTask(task);
    setTask(" ");
  };

  useEffect(() => {
    taskList.length > 0 && addTask(task);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskList));
  }, [task]);

  return (
    <div className=" bg-pack-train min-h-screen bg-cover bg-no-repeat bg-fixed bg-center flex flex-col justify-center items-center bg-stone-200 ">
      <div
        className="w-2/3 h-4/5 mx-80 my-auto absolute rounded-md bg-stone-100 shadow-[0_3px_10px_rgb(0,0,0,0.7)
 ]"
      >
        <div className="m-6 text-xs"></div>

        <div className=" h-16 rounded-t-lg flex flex-col text-center ">
          <div className="text-gray-700 p-5 mt-5 font-bold text-xl tracking-tighter italic">
            Task Manager
          </div>

          <form onSubmit={handleSubmit}>
            <div className="flex flex-row gap-4 justify-center items-center mb-5">
              <input
                type="text"
                className="mt-5 italic font-extralight p-1 rounded-md"
                placeholder="Add task"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                required
              />
              <button type="submit" className="pt-5 ">
                <FaPlus />
              </button>
            </div>
          </form>

          {taskList?.map((t, index) => {
            return (
              task.length > 0 && (
                <SingleTask key={index} removeTask={removeTask} task={t} />
              )
            );
          })}
          <div className="mb-52 flex flex-col gap-3 justify-center text-s tracking-tighter"></div>
          <button
            className=" bg-red-900  
            rounded-lg text-white pr-3 pl-3 pt-2 pb-2 font-light text-xs mx-auto my-42"
            onClick={() => deleteAll()}
          >
            delete all tasks
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
