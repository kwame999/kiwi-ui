import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { FilterVerticalIcon } from "@hugeicons/core-free-icons";
import { motion, AnimatePresence } from "framer-motion";

export const FilterBar = ({ list }: FilterBarProps) => {
  const [currentSort, setCurrentSort] = useState<string>(list[0] || "");

  function handleFilter(currentList: string) {
    setCurrentSort(currentList);
  }

  return (
    <div className="flex w-fit items-center gap-5 rounded-[10px] border-1 border-kiwi-border bg-kiwi-btn px-[16px] py-[8px] text-[0.9rem] font-semibold">
      <div className="flex shrink-0 items-center justify-center gap-1.5">
        <HugeiconsIcon icon={FilterVerticalIcon} size={16} className="text-kiwi-subheading" />
        <h1 className="flex items-center text-kiwi-subheading">
          Sort by:
          <span className="relative ml-1.5 inline-flex h-[20px] items-center overflow-hidden font-bold text-kiwi-heading">
            <AnimatePresence mode="wait">
              <motion.span
                key={currentSort} 
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -15, opacity: 0 }}
                transition={{ duration: 0.15, ease: "easeInOut" }}
              >
                {currentSort}
              </motion.span>
            </AnimatePresence>
          </span>
        </h1>
      </div>

      <div className="flex flex-1 items-center text-kiwi-inactive">
        <div className="mr-2.5 mt-1.5 h-[16px] w-px self-stretch bg-kiwi-border-table"></div>

        <div className="relative">
          <div className="filter-bubble" />
          <ul className="anchor-filter-bar flex font-semibold">
            {list.map((c) => (
              <li
                key={c}
                className="anchor-item cursor-pointer px-[18px] py-[4px] text-center transition-colors hover:text-kiwi-heading"
                onClick={() => handleFilter(c)}
              >
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

type FilterBarProps = {
  list: string[];
};