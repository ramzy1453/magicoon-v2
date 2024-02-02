import React from "react";

type Props = {};

export default function About({}: Props) {
  return (
    <>
      <p className="text-3xl text-primary font-black mb-8">ABOUT</p>
      <p className="text-center md:w-2/3 text-lg font-medium mb-8">
        magicoon Library is perfect for design, development companies and
        freelancers, one icons library allows you to work on many different
        projects for one client.
      </p>
      <iframe
        className="w-[332px] h-[200px] sm:w-[432px] sm:h-[243px] md:w-[544px] md:h-[306px] lg:w-[720px] lg:h-[450px] xl:w-[960px] xl:h-[540px]"
        src="https://www.youtube.com/embed/5A6SGzDfsko?si=4AkOx7GLUR05JoSU"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
      <div className="w-[1px] h-14 bg-primary my-7" />
    </>
  );
}
