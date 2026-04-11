"use client";

import { useState } from "react";
import { ComponentTypes } from "@/types";
import PropTable from "../docs/PropShowCaseTable";
import CodeBlock from "../docs/CodeBlock";
import CliBlock from "./CliBlock";
import { TitleHead } from "../docs/TextBlock";
import { componentRegistry } from "./componentRegistry";
import { HugeiconsIcon } from "@hugeicons/react";
import { Refresh03Icon } from "@hugeicons/core-free-icons";

const ComponentView = ({ currentView, isExpanded, source }: ComponentViewProps) => {
  const [currentTab, setCurrentTab] = useState<string>("Preview");

  const [reload, setReload] = useState<number>(0);
  function handleReload(){
    setReload(r => r == 1 ? 0 : 1)
  }
  const preview = componentRegistry[currentView.id];

  return (
    <section className="mt-2 flex min-h-0 flex-1 flex-col rounded-[8px]">
      <div className="scrollbar-hidden min-h-0 flex-1 overflow-y-auto pb-4">
        <ComponentViewTab currentTab={currentTab} onCurrentTab={setCurrentTab} onRefresh={handleReload} />
        <div className="flex flex-col gap-12">
          <section className="flex flex-col gap-2">
            {currentTab === "Preview" ? (
              <div
                className="flex min-h-[340px] w-full items-center justify-center rounded-[8px] border border-kiwi-border overflow-clip"
                style={{ height: isExpanded ? 300 : 200 }}
                key={reload}
              >
                {preview ?? (
                  <span className="text-sm text-kiwi-subheading">
                    No preview available
                  </span>
                )}
              </div>
            ) : (
              <CodeBlock code={currentView.code ?? ""} />
            )}
          </section>

          <section>
            <div className="mb-5">
              <TitleHead titleHead={{ h03: true, content: "Installations" }} />
              <hr className="border-kiwi-nav-active" />
            </div>
            <CliBlock data={currentView} source={source} />
          </section>

          <section>
            <div className="mb-5">
              <TitleHead titleHead={{ h03: true, content: "Usage" }} />
              <hr className="border-kiwi-nav-active" />
            </div>
            <CodeBlock code={currentView.code ?? ""} />
          </section>

          <section className="flex flex-col gap-4">
            <div>
              <TitleHead titleHead={{ h03: true, content: "Props" }} />
              <hr className="border-kiwi-nav-active" />
            </div>
            <PropTable data={currentView} />
          </section>
        </div>
      </div>
    </section>
  );
};

const ComponentViewTab = ({
  currentTab,
  onCurrentTab,
  onRefresh,
}: ComponentViewTabProps) => {
  return (
    <div className="flex items-center justify-between rounded-t-[8px] py-[8px] text-[0.8rem] font-medium">
      <ul className="flex gap-2 mb-1">
        <li
          onClick={() => onCurrentTab("Preview")}
          className={`cursor-pointer rounded-[8px] px-[8px] py-[4px] transition-colors text-kiwi-inactive ${currentTab === "Preview" ? "bg-kiwi-nav-active text-white" : "hover:bg-kiwi-nav-active"}`}
        >
          Preview
        </li>
        <li
          onClick={() => onCurrentTab("Code")}
          className={`cursor-pointer rounded-[8px] px-[8px] py-[4px] transition-colors text-kiwi-inactive ${currentTab === "Code" ? "bg-kiwi-nav-active text-white" : "hover:bg-kiwi-nav-active"}`}
        >
          Code
        </li>
      </ul>

      <div className=" flex items-center">
        <button className="rounded-[6px] px-[8px] py-[4px] transition-colors hover:bg-kiwi-code-tab">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.35723 4H13.168C14.7132 4 15.9659 5.25266 15.9659 6.7979V10.4322H14.4007V6.7979C14.4007 6.76067 14.3992 6.7237 14.3964 6.68706L10.5856 10.4316C10.5984 10.432 10.6114 10.4322 10.6243 10.4322H14.4007V11.9105H10.6243C9.07903 11.9105 7.79199 10.6456 7.79199 9.10032V5.47569H9.35723V9.10032C9.35723 9.17012 9.36263 9.23908 9.37311 9.30672L13.2678 5.4798C13.2349 5.47708 13.2017 5.47569 13.168 5.47569H9.35723V4Z"
              fill="#171717"
            />
            <path
              d="M5.50752 11.6378L0 5.47461H2.21573L5.44924 9.09305V5.47461H7.1014V11.0294C7.1014 11.8678 6.06616 12.2629 5.50752 11.6378Z"
              fill="#171717"
            />
          </svg>
        </button>
        <button className="px-1" onClick={onRefresh}>
          <HugeiconsIcon icon={Refresh03Icon} size={16}></HugeiconsIcon>
        </button>
      </div>
    </div>
  );
};

type ComponentViewProps = {
  currentView: ComponentTypes;
  isExpanded: boolean;
  source: string | null;
};

type ComponentViewTabProps = {
  currentTab: string;
  onCurrentTab: (tab: string) => void;
  onRefresh: () => void;
};

export default ComponentView;
