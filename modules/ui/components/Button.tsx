import React from "react";

interface Props {}

export const Button: React.FC<Props> = ({ children }) => {
  return (
    <button className="flex items-center w-min whitespace-nowrap py-3 px-6 border-3 text-base font-semibold rounded-xl tracking-widest text-blue-600 uppercase border border-blue-600 focus:outline-none">
      {children}
    </button>
  );
};
