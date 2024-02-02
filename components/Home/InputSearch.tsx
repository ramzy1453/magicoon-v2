import classNames from "classnames";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

type Props = {
  fullWidth?: boolean;
  isPrimary?: boolean;
  placeholder?: string;
  isWhiteBg?: boolean;
};

export default function InputSearch(props: Props) {
  return (
    <div
      className={classNames("relative", {
        "w-1/2": !props.fullWidth,
        "w-full": props.fullWidth,
      })}
    >
      <input
        type="search"
        id="default-search"
        className={classNames(
          "text-black block border-2 focus:border-black outline-none border-[#DDE2EB] w-full p-4 text-sm rounded-full placeholder-gray-400",
          {
            "bg-transparent hover:bg-[#EAEEF5]": !props.isWhiteBg,
            "bg-white": props.isWhiteBg,
          }
        )}
        placeholder={props.placeholder || "Search icons …"}
        required
      />
      <button
        type="submit"
        className={classNames(
          "transition-all text-white absolute end-2.5 bottom-2.5 font-medium rounded-full text-sm p-2",
          {
            "bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300":
              !props.isPrimary,
            "btn-primary": props.isPrimary,
          }
        )}
      >
        <FaArrowRight size={18} />
      </button>
    </div>
  );
}
