import React from "react";
import { CgArrowLongRight } from "react-icons/cg";

function Button({ title, highEmphasis, onClick }) {
  return (
    <button
      className={`flex items-center justify-center gap-3  group  ${
        highEmphasis
          ? "bg-accent/80 dark:bg-accent_dark/70 px-3 py-2 rounded-sm uppercase text-white text-xl dark:text-black hover:opacity-90"
          : "text-accent dark:text-accent_dark"
      }`}
      onClick={onClick}
    >
      <span>{title}</span>
      {!highEmphasis && (
        <CgArrowLongRight className="mt-1 group-hover:ml-1 transition-all" />
      )}
    </button>
  );
}

export default Button;
