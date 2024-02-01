import { IconType } from "react-icons";

export type Icon = {
  Icon: IconType;
  style: string;
  border: string;
};

export default function IconItem({ Icon, style, border }: Icon) {
  return (
    <div className="flex cursor-pointer flex-col justify-center items-center space-y-4 group hover:scale-90 transition-all">
      <div className="bg-[#EAEEF5] group-hover:bg-[#DDE2EB] rounded-2xl flex flex-col justify-center items-center space-y-4 px-8 py-4">
        <Icon size={32} color={"#25314C"} />
        <div className="text-primary-500 text-xs font-bold">Light</div>
      </div>
      <button className="btn px-4 bg-[#396CE8] transition-all text-xs text-white btn-sm rounded-full group-hover:bg-primary">
        Solid
      </button>
    </div>
  );
}
// <div className=' flex h-screen justify-center items-center'>
//   <div className='group text-xl'>
//     <strong className='group-hover:text-red-500'>Hover on me </strong>
//     <strong className='group-hover:text-green-500'>the texts will be </strong>
//     <strong className='group-hover:text-blue-500'>of different colors</strong>
//   </div>
// </div>
