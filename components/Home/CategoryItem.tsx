import cn from "classnames";
import { FaAccessibleIcon } from "react-icons/fa";

export type Category = {
  title: string;
  numIcons: number;
  icon: string;
  isNew?: boolean;
};

export default function CategoryItem({
  title,
  numIcons,
  icon,
  isNew,
}: Category) {
  return (
    <div className="relative flex-shrink-0">
      <div className="flex flex-shrink-0 p-4 rounded-lg bg-[#EAEEF5]">
        <div
          className={cn(
            "flex h-12 w-12 items-center justify-center rounded-full bg-white"
          )}
        >
          <FaAccessibleIcon size={24} />
        </div>

        <div className="flex flex-col justify-center pl-4">
          <h1 className="font-bold text-sm">{title}</h1>
          <h1 className="font-[12px] text-xs">{numIcons} icons</h1>
        </div>
      </div>
      {isNew && (
        <div className="badge p-3 bg-[#3B6CE8] text-white absolute -top-2 -right-2 text-xs font-semibold">
          NEW
        </div>
      )}
    </div>
  );
}
