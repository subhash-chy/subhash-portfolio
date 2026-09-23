import React from "react";
import { CgArrowLongRight } from "react-icons/cg";
import { RiLoader3Fill } from "react-icons/ri";

function Button(props) {
  const { highEmphasis, onClick, loading, children } = props;
  return (
    <button
      disabled={loading ? true : false}
      className={`group relative inline-flex items-center justify-center gap-3 ${
        highEmphasis
          ? "btn-glass sheen rounded-full px-6 py-3 uppercase tracking-wider font-bold text-white text-xl dark:text-black"
          : "btn-ghost rounded-full px-5 py-3 font-semibold text-accent dark:text-accent_dark"
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
