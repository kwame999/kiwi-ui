"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { useSearchParams, useRouter } from "next/navigation";
import { Table } from "./ComponentsTable";
import ComponentView from "./ComponentView";
import type { ComponentTypes } from "@/types";
import PaginationArrows from "../docs/PaginationArrows";
import BottomPageRoute from "./BottomPageRoute";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  InsertColumnLeftIcon,
  InsertColumnRightIcon,
} from "@hugeicons/core-free-icons";
import { CopyPageDropDown } from "./CopyPageDropDown";
import { InputField } from "../../../registry/new-york/kiwi/inputs/inputfield/input-field";
import { UpdateToast } from "../../../registry/new-york/kiwi/feedback/update-toast/update-toast";
import Breadcrumb from "./Breadcrumb";
export default function Workbench({
  data,
  onCurrentPage,
  previousRoute,
  nextRoute,
}: WorkbenchProps) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const currentBread = usePathname()
  const serialized = currentBread.split("/").filter(b => b !== "")
  console.log(serialized)

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
        <div className="mt-12 mx-6 flex min-h-0 flex-[2] flex-col gap-12 overflow-y-auto pb-5">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
            
                <Breadcrumb items={[{ label: "Installation", href: "/docs/installation" }, { label: "Components" }]} />
          
              <h1 className="text-3xl font-bold tracking-wide">Components</h1>
              </div>
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
          <BottomPageRoute previous={previousRoute} next={nextRoute} />
        </div>
      )}

      <div className="flex min-h-0 flex-1 flex-col gap-2 overflow-y-auto border-l border-kiwi-border p-5 pt-7">
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

        {isExpanded && (
          <BottomPageRoute previous={previousRoute} next={nextRoute} />
        )}
      </div>
    </div>
  );
}

type BottomPageRouteLink = {
  href: string;
  label: string;
};

type WorkbenchProps = {
  data: ComponentTypes[];
  onCurrentPage?: (num: number) => void;
  previousRoute?: BottomPageRouteLink;
  nextRoute?: BottomPageRouteLink;
};
