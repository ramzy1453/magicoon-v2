import React from "react";
import styles from "../../styles/iframe-video.module.css";

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
      <div className="mb-[85px]">
        <iframe
          src="https://www.youtube.com/embed/5A6SGzDfsko?controls=0"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className={styles.iframe}
        ></iframe>
      </div>

      <div className="w-[1px] h-14 bg-primary" />
    </>
  );
}
