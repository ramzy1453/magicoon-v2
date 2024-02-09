"use client";
import IconItem from "./IconItem";
import icons from "../../lib/icons";
import { useSearchStore } from "@/store/zustand";
import searchIcons from "@/lib/searchIcons";
import IconPopup from "./IconPopup";
import { useDebounce } from "usehooks-ts";
import { AnimatePresence } from "framer-motion";
import NotFound from "./NotFound";

export default function IconsList() {
  const { color, iconType, query } = useSearchStore();
  const debouncedQuery = useDebounce(query, 300);

  const filteredIcons =
    iconType !== 0
      ? [...icons].filter((icon) => icon.type === iconsTypes[iconType - 1])
      : [...icons];

  const searchedIcons = searchIcons(filteredIcons, debouncedQuery, 0);

  const { isModalShown } = useSearchStore();
  return (
    <>
      {isModalShown && (
        <div className="fixed top-24 left-0 w-screen h-screen bg-black bg-opacity-[0.2]" />
      )}
      <AnimatePresence>{isModalShown && <IconPopup />}</AnimatePresence>
      <div className="px-6 max-w-[1224px] md:max-w-[1240px] md:px-8 mx-auto">
        {searchedIcons?.length > 0 ? (
          <>
            <p className="text-lg font-medium mb-4">
              <span className="font-bold">{searchedIcons?.length} Results</span>
              (ICONS)
            </p>
            <div
              className="grid gap-4"
              style={{
                gridTemplateColumns: "repeat(auto-fill, minmax(130px, 1fr))",
              }}
            >
              {searchedIcons?.map((icon) => {
                return <IconItem key={icon.id} {...icon} pathColor={color} />;
              })}
            </div>
          </>
        ) : (
          <NotFound />
        )}
      </div>
    </>
  );
}

const iconsTypes = ["Light", "Regular", "Filled", "Duotone"];
