import React from "react";
import { CgArrowLongRight } from "react-icons/cg";
import { RiLoader3Fill } from "react-icons/ri";

function Button(props) {
  const { highEmphasis, onClick, loading, children } = props;
  return (
    <button
      disabled={loading ? true : false}
      className={`flex items-center justify-center gap-3  group transition disabled:bg-accent/20 disabled:dark:bg-accent_dark/20 disabled:hover:opacity-100 $  ${
        highEmphasis
          ? "bg-accent/80 dark:bg-accent_dark/70 px-3 py-2 rounded-sm uppercase text-white text-xl dark:text-black hover:opacity-90"
          : "text-accent dark:text-accent_dark"
      }`}
      onClick={onClick}
    >
      <div className=" w-full h-full flex gap-2 items-center justify-center">
        <span>{children}</span>
        {loading == true && <RiLoader3Fill className="animate-spin icon" />}
      </div>

      {!highEmphasis && (
        <CgArrowLongRight className="mt-1 group-hover:ml-1 transition-all" />
      )}
    </button>
  );
}

export default Button;
