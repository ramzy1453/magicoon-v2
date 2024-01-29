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
      <Hero />
      <Description />
      <About />
      <Icons />
      <Categories />
      <Features />
      <Testimonial />
      <Usability />
      <Pricing />
      <Faq />
      <Market />
    </div>
  );
}
