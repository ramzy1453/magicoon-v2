import { IconType } from "react-icons";

export type Props = {
  Icon: IconType;
  style: string;
  border: string;
};

export default function IconItem({ Icon, style, border }: Props) {
  return (
    <div className="flex cursor-pointer flex-col justify-center items-center space-y-4 group hover:scale-95 transition-all">
      <div className="h-30 w-30 bg-[#EAEEF5] group-hover:bg-[#DDE2EB] rounded-2xl flex flex-col justify-center items-center space-y-4 px-8 py-4">
        <Icon size={32} color={"#25314C"} />
        <div className="text-primary-500 text-xs font-bold">{border}</div>
      </div>
      <button className="btn px-4 bg-[#396CE8] transition-all text-xs text-white btn-sm rounded-full group-hover:bg-primary">
        {style}
      </button>
    </div>
  );
}
 