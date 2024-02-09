import { useSearchStore } from "@/store/zustand";
import { ReactElement, cloneElement } from "react";

type Props = {
  name: string;
  id: number;
  type: string;
  keywords: string[];
  path: ReactElement;
  pathColor?: string;
};

export default function IconItem(props: Props) {
  const { setSelectedIcon, showModal } = useSearchStore();
  const { name, id, type, keywords, path } = props;
  return (
    <label
      onClick={() => {
        showModal();
        setSelectedIcon({
          name,
          id,
          type,
          keywords,
          path,
        });
      }}
      className="px-3 flex flex-col items-center justify-center rounded-2xl cursor-pointer bg-[rgb(248,249,251)] hover:bg-[#EAEEF5] py-6 space-y-4"
    >
      {cloneElement(props.path, {
        style: { fill: props.pathColor },
      })}
      <div className="text-primary font-bold text-sm text-center">
        {props.name}
      </div>
    </label>
  );
}
