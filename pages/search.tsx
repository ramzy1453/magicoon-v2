import IconTypeSelect from "@/components/Search/IconTypeSelect";
import IconsList from "@/components/Search/IconsList";
import Hero from "@/sections/Search/Hero";
import { useSearchStore } from "@/store/zustand";

export default function SearchPage() {
  const { color } = useSearchStore();
  return (
    <div>
      <div
        id="hero"
        className="pt-20 pb-6 bg-gradient-to-r from-[#7360DF] to-[#C499F3]"
      >
        <Hero />
      </div>
      <div className="px-6 py-4 p-0 bg-primary-content sticky top-24">
        <IconTypeSelect />
      </div>
      <div className="pt-12 pb-20 bg-[#E0E8F3]">
        <IconsList />
      </div>
    </div>
  );
}
