import { FaPlus } from "react-icons/fa6";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

export const InputForm = ({ taskList, setTaskList, editTodo }) => {
  const [value, setValue] = useState<string>(" ");
  console.log(value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!editTodo) {
      addTask(value);
    } else {
      updateTodo(editTodo.id, value);
    }
  };

  useEffect(() => {
    if (editTodo) {
      setValue(editTodo.taskName);
    } else {
      setValue(" ");
    }
  }, [editTodo, taskList]);

  const addTask = (input: string) => {
    setTaskList([
      ...taskList,
      { id: nanoid(), taskName: input, completed: false },
    ]);
  };

  const updateTodo = (id: string, value: string) => {
    const addTodo = taskList.map((todo) =>
      todo.id === id ? { ...todo, id: id, taskName: value } : todo
    );
    setTaskList([...taskList, addTodo]);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-row gap-4 justify-center items-center mb-5">
          <input
            type="text"
            placeholder="Add task"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            required
            className="mt-5 italic font-extralight p-1 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
          />
          <button type="submit" className="pt-5 ">
            <FaPlus />
          </button>
        </div>
      </form>
    </div>
  );
};
