import About from "@/sections/Home/About";
import Categories from "@/sections/Home/Categories";
import Description from "@/sections/Home/Description";
import Faq from "@/sections/Home/Faq";
import Features from "@/sections/Home/Features";
import Hero from "@/sections/Home/Hero";
import Icons from "@/sections/Home/Icons";
import Market from "@/sections/Home/Market";
import Pricing from "@/sections/Home/Pricing";
import Testimonial from "@/sections/Home/Testimonial";
import Usability from "@/sections/Home/Usability";

export default function HomePage() {
  return (
    <div className="">
      <div
        id="start"
        className="mt-28 flex flex-col justify-center items-center space-y-9"
      >
        <Hero />
      </div>
      <div className="mt-28 md:flex justify-center items-center">
        <Description />
      </div>
      <div
        id="about"
        className="mt-28 flex flex-col items-center justify-center space-y-12"
      >
        <About />
      </div>
      <div className="mt-28 flex flex-col items-center justify-center space-y-8">
        <Icons />
      </div>
      <div
        id="categories"
        className="mt-28 flex flex-col space-y-6 justify-center"
      >
        <Categories />
      </div>
      <div id="features" className="mt-28 rounded-lg">
        <Features />
      </div>
      <div className="mt-28 rounded-xl bg-[#EAEEF5] py-16 px-6 space-y-8">
        <Testimonial />
      </div>
      <div className="mt-28 flex flex-col items-center justify-center space-y-12">
        <Usability />
      </div>
      <div
        id="pricing"
        className="mt-28 max-w-md mx-auto md:flex md:space-y-4 md:flex-col md:justify-center md:mx-0 md:max-w-none"
      >
        <Pricing />
      </div>
      <div className="mt-28 rounded-xl bg-[#EAEEF5] py-16 px-4 space-y-10">
        <Faq />
      </div>
      <div className="mt-28">
        <Market />
      </div>
    </div>
  );
}
