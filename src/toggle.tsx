import { useState } from "react";

export const Toggle = () => {
  const [isLight, setIsLight] = useState(false);

  return (
    <button
      className={
        isLight
          ? "bg-gray-300 text-black  p-2 rounded-xl"
          : "bg-black text-white p-2 rounded-xl"
      }
      onClick={() => setIsLight(!isLight)}
    >
      {isLight ? "Dark" : "Light"}
    </button>
  );
};
