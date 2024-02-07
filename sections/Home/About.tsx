import React from "react";

type Props = {};

export default function About({}: Props) {
  return (
    <>
      <p className="text-3xl text-primary font-black mb-8">ABOUT</p>
      <p className="text-center md:w-2/3 text-lg font-medium mb-[85px]">
        magicoon Library is perfect for design, development companies and
        freelancers, one icons library allows you to work on many different
        projects for one client.
      </p>
      <div className="w-[1px] h-14 bg-primary" />
    </>
  );
}
