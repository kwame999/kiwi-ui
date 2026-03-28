"use client";

import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Table } from "./ComponentsTable";
import ComponentView from "./ComponentView";
import type { ComponentTypes } from "@/types";
import PaginationArrows from "../docs/PaginationArrows";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  InsertColumnLeftIcon,
  InsertColumnRightIcon,
} from "@hugeicons/core-free-icons";
import { CopyPageDropDown } from "./CopyPageDropDown";

export default function Workbench({ data, onCurrentPage }: WorkbenchProps) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const componentId = searchParams.get("id") || data[0].id;
  const activeIndex = data.findIndex((d) => d.id === componentId);
  const active = activeIndex === -1 ? data[0] : data[activeIndex];

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const handleSync = (component: ComponentTypes) => {
    router.push(`?id=${component.id}`, { scroll: false });

    const newIndex = data.findIndex((d) => d.id === component.id);
    onCurrentPage?.(newIndex);
  };

  const handlePageChange = (page: number) => {
    const nextComponent = data[page];

    if (nextComponent) {
      handleSync(nextComponent);
    }
  };

  return (
    <div
      className="flex h-full min-h-0 justify-center overflow-hidden bg-kiwi-bg text-kiwi-heading"
      onClick={() => {
        if (isOpen) {
          setIsOpen(false);
        }
      }}
    >
      {!isExpanded && (
        <div className="mt-11 mx-9 flex min-h-0 flex-[2] flex-col gap-9 overflow-y-auto pb-5">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold tracking-wide">Components</h1>
              <CopyPageDropDown
                isOpen={isOpen}
                onOpen={() => setIsOpen(!isOpen)}
              />
            </div>
            <p className="w-[70%] text-[0.9rem] leading-[24px] text-kiwi-subheading">
              Browse all available Kiwi components. Click any element to view
              its documentation and implementation details on the adjustable
              side panel!
            </p>
          </div>

          <Table data={data} onSelect={handleSync} />
        </div>
      )}

      <div className="flex min-h-0 flex-1 flex-col gap-2 overflow-y-auto border-l border-kiwi-border p-5">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">{active.componentType}</h1>
          <div className="mt-2 flex items-center justify-between gap-3">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex cursor-pointer items-center rounded-md border border-transparent p-0.5 transition-colors hover:border-kiwi-border hover:bg-kiwi-nav-active"
            >
              <HugeiconsIcon
                icon={
                  !isExpanded ? InsertColumnLeftIcon : InsertColumnRightIcon
                }
                size={18}
              />
            </button>

            <PaginationArrows
              currentPage={activeIndex === -1 ? 0 : activeIndex}
              totalItems={data.length}
              onChange={handlePageChange}
            />
          </div>
        </div>

        <p className="w-[76%] text-[0.9rem] leading-[24px] text-kiwi-subheading">
          {active.description}
        </p>

        <ComponentView currentView={active} isExpanded={isExpanded} />
      </div>
    </div>
  );
}

type WorkbenchProps = {
  data: ComponentTypes[];
  onCurrentPage?: (num: number) => void;
};
