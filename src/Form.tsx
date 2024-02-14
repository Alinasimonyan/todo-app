import { FaPlus } from "react-icons/fa6";
import { nanoid } from "nanoid";
import { useEffect } from "react";

export const Form = ({
  input,
  setInput,
  taskList,
  setTaskList,
  editTodo,
  setEditTodo,
}) => {
  const onInputChange = (e) => {
    setInput(e.target.value);
  };

  const updateEdit = (id, value) => {
    const newEdit = taskList.map((task) =>
      task.id === id ? { ...task, taskName: value } : task
    );
    setTaskList(newEdit);
    setEditTodo("");
  };

  useEffect(() => {
    if (editTodo) {
      console.log(editTodo);
      setInput(editTodo.taskName);
    } else setInput("");
  }, [editTodo, setInput]);

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (!editTodo) {
      setTaskList([
        ...taskList,
        { id: nanoid(), taskName: input, completed: false },
      ]);
      setInput("");
    } else {
      updateEdit(editTodo.id, input);
    }
  };

  return (
    <form onSubmit={onSubmitForm}>
      <input
        required
        type="text"
        placeholder="Enter a task..."
        value={input}
        onChange={onInputChange}
        className="h-10 rounded-md pl-3 pr-3 capitalize ml-20"
      />
      <button
        type="submit"
        className="ml-5 text-white bg-black text-center rounded-md w-12 h-9  text-xs"
      >
        {editTodo ? "Save" : "Add"}
      </button>
    </form>
  );
};
