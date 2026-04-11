"use client";

import { useState } from "react";
import type { ComponentTypes } from "@/types";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowRight02Icon,
  ArrowLeft02Icon,
  FilterIcon,
  FilterVerticalIcon
} from "@hugeicons/core-free-icons";
import { componentCategories } from "@/data/components";

const Table = ({ data, onSelect }: TableProps) => {
  const [currentSort, setCurrentSort] = useState<string>(
    componentCategories[0],
  );
  console.log(currentSort)
  function handleFilter(category: string) {
    setCurrentSort(category);
  }

  return (
    <div className="flex flex-col overflow-hidden rounded-[10px] border border-kiwi-border-table">
      <FilterBar currentSort={currentSort} onFilter={handleFilter}></FilterBar>
      <div className="grid auto-rows-auto grid-cols-3 rounded-b-[10px] text-[0.8rem] font-medium">
        {data.map((c) => {
          if (
            currentSort === componentCategories[0] ||
            currentSort === c.category
          ) {
            return (
              <TableChild key={c.componentType} onSelect={() => onSelect(c)}>
                {c.componentType}
              </TableChild>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

const TableChild = ({ children, onSelect }: TableChildProps) => {
  return (
    <div
      className="cursor-pointer border border-kiwi-border px-[16px] py-[20px] transition-colors hover:bg-kiwi-nav-active"
      onClick={onSelect}
    >
      {children}
    </div>
  );
};

const FilterBar = ({ currentSort, onFilter }: FilterBarProps) => {
  return (
    <div className="flex w-full items-center gap-5 rounded-t-[10px] border-1 border-kiwi-border bg-kiwi-btn px-[16px] py-[8px] text-[0.9rem] font-semibold">
      <div className="flex shrink-0 items-center justify-center gap-1.5">
        {/* <HugeiconsIcon icon={FilterVerticalIcon} size={18} className="text-kiwi-subheading" /> */}
        <h1 className="text-kiwi-subheading text-[0.8rem]">
          Sort by:
          <span className="ml-5.5 text-kiwi-heading">{currentSort}</span>
        </h1>
      </div>

      <div className="flex flex-1 items-center text-kiwi-inactive">
        <div className="mr-2.5 h-[16px]  mt-1.5 w-px self-stretch bg-kiwi-border-table "></div>

        <div className="relative">
          <div className="filter-bubble" />
          <ul className="anchor-filter-bar flex font-semibold text-[0.8rem]">
            {componentCategories
              .filter((category) => category !== currentSort)
              .map((c) => (
              <li
                key={c}
                className="anchor-item cursor-pointer px-[16px] py-[4px] text-center hover:text-kiwi-heading transition-colors"
                onClick={() => onFilter(c)}
              >
                {c}
              </li>
            ))}
          </ul>
        </div>

        
        {/* <div className="mx-2.5 h-[16px]  m-1.5 w-px self-stretch bg-kiwi-border-table"></div> */}

        {/* <div className="flex items-center justify-center gap-[8px] ml-auto">
          <button className="cursor-pointer">
            <HugeiconsIcon icon={ArrowLeft02Icon} size={18} />
          </button>
          <button className="cursor-pointer">
            <HugeiconsIcon icon={ArrowRight02Icon} size={18} />
          </button>
        </div> */}
      </div>
    </div>
  );
};

type TableProps = {
  data: ComponentTypes[];
  onSelect: (component: ComponentTypes) => void;
};

type TableChildProps = {
  children: React.ReactNode;
  onSelect: () => void;
};

type FilterBarProps = {
  currentSort: string;
  onFilter: (category: string) => void;
};

export { Table };
