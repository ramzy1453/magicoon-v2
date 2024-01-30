import Image from "next/image";
import React from "react";

type Props = {};

export default function Usability(props: Props) {
  return (
    <>
      <h1 className="text-primary text-[2.5rem] leading-10 font-black">
        Use it Now!
      </h1>
      <Image
        alt="magicoon_high_quality_vector_UI_icons_library"
        src="/magicoon_high_quality_vector_UI_icons_library.png"
        width={900}
        height={800}
        className="min-w-[320px] h-full max-h-full border-[1rem]"
      />
      <button className="hover:shadow-md transition-all">
        <Image alt="featured" src="featured.svg" width={250} height={200} />
      </button>
    </>
  );
}
