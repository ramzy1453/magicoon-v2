import CategoryItem, { Category } from "@/components/Home/CategoryItem";
import classNames from "classnames";
import React from "react";
import { LinearGradient } from "react-text-gradients";

export default function Categories() {
  return (
    <div id="categories" className="flex flex-col space-y-6 justify-center">
      <div className="divider">CATEGORIES</div>
      <LinearGradient
        gradient={["to right", "rgba(57,108,232,1) ,rgba(199,110,196,1)"]}
        className="text-4xl font-black text-center"
      >
        Various Categories
      </LinearGradient>
      <div
        className={classNames(
          "grid grid-cols-1 gap-8",
          "sm:grid-cols-2",
          "md:grid-cols-3"
        )}
      >
        {categories.map((category) => (
          <CategoryItem {...category} key={category.title} />
        ))}
      </div>
    </div>
  );
}

const categories: Category[] = [
  { title: "General", icon: "", numIcons: 96 },
  { title: "Money & Payment", icon: "", numIcons: 48 },
  { title: "Business & Finance", icon: "", numIcons: 27 },
  { title: "Charts & Diagrams", icon: "", numIcons: 29 },
  { title: "Location & Map", icon: "", numIcons: 40 },
  { title: "Menu", icon: "", numIcons: 27, isNew: true },
  { title: "Sports & Fitness", icon: "", numIcons: 27 },
  { title: "E-Commerce", icon: "", numIcons: 82 },
  { title: "Support & Reviews", icon: "", numIcons: 26 },
  { title: "Users & People", icon: "", numIcons: 39 },
  { title: "Buildings", icon: "", numIcons: 50 },
  { title: "Multimedia", icon: "", numIcons: 47 },
  { title: "Medical & Health", icon: "", numIcons: 26 },
  { title: "Grid & Layouts", icon: "", numIcons: 30, isNew: true },
  { title: "Brands", icon: "", numIcons: 47 },
  { title: "Communication", icon: "", numIcons: 54 },
  { title: "Chatting", icon: "", numIcons: 38 },
  { title: "Messaging", icon: "", numIcons: 38 },
  { title: "Commenting", icon: "", numIcons: 38 },
  { title: "Devices & Hardware", icon: "", numIcons: 59 },
  { title: "Security", icon: "", numIcons: 34 },
  { title: "Sign & Controls", icon: "", numIcons: 32, isNew: true },
  { title: "Food & Cooking", icon: "", numIcons: 42 },
  { title: "Files", icon: "", numIcons: 93 },
  { title: "Documents", icon: "", numIcons: 29 },
  { title: "Education", icon: "", numIcons: 39 },
  { title: "Date & Time", icon: "", numIcons: 48 },
  { title: "Arrows", icon: "", numIcons: 136, isNew: true },
  { title: "Emoji", icon: "", numIcons: 32 },
];
