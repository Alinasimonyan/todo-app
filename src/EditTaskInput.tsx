import { useState } from "react";

export const EditTaskInput = (todo, addEditedTask) => {
  const [value, setValue] = useState<string>(" ");

  const handleSubmit = (e) => {
    e.preventDefault();
    addEditedTask(value, todo.id);
    setValue(" ");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        type="submit"
        className="m-4  bg-blue-800  
            rounded-lg text-white pr-3 pl-3 pt-2 pb-2 font-light text-xs shadow-[0_3px_10px_rgb(0,0,0,0.3)"
      >
        Update
      </button>
    </form>
  );
};
