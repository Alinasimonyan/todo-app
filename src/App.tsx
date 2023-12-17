import { FC, useEffect } from "react";
import { InputForm } from "./InputForm";
import { useState } from "react";
import { SingleTask } from "./SingleTask";


const App: FC = () => {
  const retrArr = JSON.parse(localStorage.getItem("tasks"));

  const [taskList, setTaskList] = useState<object[]>(retrArr || []);
  const [editTodo, setEditTodo] = useState<object>({});

  const deleteAll = () => {
    setTaskList([]);
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskList));
  }, [taskList]);

  console.log(taskList);

  return (
    <div className="bg-pack-train h-screen bg-cover bg-no-repeat bg-fixed bg-center flex flex-col justify-center items-center bg-blue-100">
      <div className="w-2/5 h-4/5 mx-80 my-auto absolute rounded-lg bg-violet-50 shadow-[0_3px_10px_rgb(0,0,0,0.3)]">
        <div className="h-16 rounded-t-lg flex flex-col text-center">
          <div className="text-gray-400 p-5 mt-5 font-bold text-2xl tracking-tighter ">
            Task Manager
          </div>
          <InputForm
            editTodo={editTodo}
            taskList={taskList}
            setTaskList={setTaskList}
          />
          {taskList?.map((todo, index) => {
            return (
              <>
                <SingleTask
                  key={index}
                  taskList={taskList}
                  setTaskList={setTaskList}
                  setEditTodo={setEditTodo}
                  todoObj={todo}
                />
              </>
            );
          })}
          <div className="mb-52 flex flex-col gap-3 justify-center text-s tracking-tighter">
            <button
              className=" bg-green-800  
            rounded-lg text-white pr-3 pl-3 pt-2 pb-2 font-light text-xs mx-auto my-36 shadow-[0_3px_10px_rgb(0,0,0,0.3) hover:bg-green-700 hover:shadow-[0_3px_10px_rgb(0,0,0,0.4)]"
              onClick={() => deleteAll()}
            >
              delete all tasks
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
