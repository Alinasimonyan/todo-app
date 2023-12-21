import { FC, useState, useEffect } from "react";
import { Form } from "./Form";
import { TaskList } from "./TaskList";

const App: FC = () => {
  const retrArr = JSON.parse(localStorage.getItem("tasks"));

  const [taskList, setTaskList] = useState<
    { id: string; taskName: string; completed: boolean }[]
  >(retrArr || []);
  const [input, setInput] = useState<string>("");
  const [editTodo, setEditTodo] = useState<null>(null);

  const deleteAll = () => {
    setTaskList([]);
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskList));
  }, [taskList]);

  return (
    <div className="bg-pack-train bg-cover bg-no-repeat bg-fixed flex flex-col justify-center items-center bg-slate-400">
      <div className="text-green-800 p-5 mt-20 font-bold text-2xl tracking-tighter">
        Task Manager
      </div>
      <Form
        editTodo={editTodo}
        setEditTodo={setEditTodo}
        taskList={taskList}
        setTaskList={setTaskList}
        setInput={setInput}
        input={input}
      />
      <TaskList
        taskList={taskList}
        setTaskList={setTaskList}
        setEditTodo={setEditTodo}
      />
      <button
        className=" bg-green-800  
            rounded-lg text-white pr-3 pl-3 pt-2 pb-2 font-light text-xs mx-auto shadow-[0_3px_10px_rgb(0,0,0,0.3) hover:bg-green-700 hover:shadow-[0_3px_10px_rgb(0,0,0,0.4)]"
        onClick={() => deleteAll()}
      >
        delete all tasks
      </button>
    </div>
  );
};

export default App;
