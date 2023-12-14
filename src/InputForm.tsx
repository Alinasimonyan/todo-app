import { FaPlus } from "react-icons/fa6";
import { useState } from "react";

export const InputForm = ({ addTask }) => {
  const [value, setValue] = useState<string>(" ");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(value);
    setValue(" ");
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
