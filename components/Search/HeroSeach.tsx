import { useSearchStore } from "@/store/zustand";
import { ChangeEvent } from "react";
import { FaSearch } from "react-icons/fa";

export default function HeroSeach() {
  const { setQuery, query } = useSearchStore();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <div className="sticky top-0">
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-primary sr-only"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 cursor-pointer">
          <FaSearch size={16} color="#25314C" />
        </div>
        <input
          value={query}
          onChange={handleChange}
          type="search"
          id="default-search"
          className="block w-full p-4 ps-10 text-sm text-primary rounded-lg bg-primary-content outline-none focus:ring-2 focus:ring-primary"
          placeholder="Search 1080 icons..."
        />
      </div>
    </div>
  );
}
