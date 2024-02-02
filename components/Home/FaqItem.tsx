import classNames from "classnames";
import { MouseEventHandler } from "react";

export type Props = {
  question: string;
  reply: string;
  isOpen: boolean;
  onClick: MouseEventHandler<HTMLDivElement>;
};

export default function FaqItem(props: Props) {
  return (
    <div
      onClick={props.onClick}
      className={classNames("collapse collapse-plus bg-white cursor-pointer", {
        "collapse-close": !props.isOpen,
        "collapse-open": props.isOpen,
      })}
    >
      <div className="collapse-title md:text-xl font-medium">
        {props.question}
      </div>
      <div className="collapse-content">
        <p>{props.reply}</p>
      </div>
    </div>
  );
}
