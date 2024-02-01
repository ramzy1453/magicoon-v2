import React from "react";

type Props = {};

export default function About({}: Props) {
  return (
    <>
      <p className="text-3xl text-primary font-black">ABOUT</p>
      <p className="text-center md:w-2/3 text-lg font-medium">
        magicoon Library is perfect for design, development companies and
        freelancers, one icons library allows you to work on many different
        projects for one client.
      </p>
      <div className="mt-8">
        <iframe
          className="w-[332px] h-[200px] sm:w-[432px] sm:h-[243px] md:w-[544px] md:h-[306px] lg:w-[720px] lg:h-[450px] xl:w-[960px] xl:h-[540px]"
          src="https://www.youtube.com/embed/5A6SGzDfsko?si=4AkOx7GLUR05JoSU"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </>
  );
}
