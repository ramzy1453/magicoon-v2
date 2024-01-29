import Image from "next/image";
import cn from "classnames";

type Props = {
  icon: string;
  title: string;
  subtitle: string;
  color: string;
  firstElement?: boolean;
};

export default function DescriptionItem(props: Props) {
  return (
    <div
      className={cn(
        "flex rounded-lg p-8 gap-6",
        {
          "bg-white cursor-pointer group hover:bg-primary": props.firstElement,
        },
        "transition-all"
      )}
    >
      <div
        className={cn(
          "flex btn btn-circle place-content-center rounded-full",
          props.color
        )}
      >
        <Image alt="figma-icon" src={props.icon} width={18} height={18} />
      </div>
      <div className="flex flex-col">
        <h1
          className={cn("text-3xl text-primary font-black mb-1", {
            "group-hover:text-white": props.firstElement,
          })}
        >
          {props.title}
        </h1>
        <h3 className="text-xs md:text-md text-secondary font-semibold">
          {props.subtitle}
        </h3>
      </div>
    </div>
  );
}
