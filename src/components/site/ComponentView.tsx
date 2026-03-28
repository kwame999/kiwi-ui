"use client";

import { useState } from "react";
import { ComponentTypes } from "@/types";
import PropTable from "../docs/PropShowCaseTable";
import CodeBlock from "../docs/CodeBlock";
import CliBlock from "./CliBlock";
import { TitleHead } from "../docs/TextBlock";

const ComponentView = ({ currentView, isExpanded }: ComponentViewProps) => {
  const [currentTab, setCurrentTab] = useState<string>("Preview");

  return (
    <section className="mt-2 flex min-h-0 flex-1 flex-col rounded-[8px]">
      <div className="scrollbar-hidden min-h-0 flex-1 overflow-y-auto pb-12">
        <ComponentViewTab currentTab={currentTab} onCurrentTab={setCurrentTab} />
        <div className="flex flex-col gap-8">
          <section className="flex flex-col gap-2">
            <div
              className="flex min-h-[200px] w-full items-center justify-center rounded-[8px] border-1 border-kiwi-border overflow-clip"
              style={{ height: isExpanded ? 300 : 200 }}
            >
              {currentTab === "Preview" ? (
                <span className="text-slate-400">
                  [ {currentView.componentType} Preview ]
                </span>
              ) : (
                <div className="rounded-[8px]  font-mono text-sm text-blue-300 w-full h-full">
                  <pre>
                    <CodeBlock code="sasa"></CodeBlock>
                    
                  </pre>
                </div>
              )}
            </div>
          </section>

          <section>
            <div className="mb-5">
              <TitleHead titleHead={{ h03: true, content: "Installations" }} />
              <hr className="border-kiwi-nav-active" />
            </div>
            <CliBlock data={currentView} />
          </section>

          <section>
            <div className="mb-5">
              <TitleHead titleHead={{ h03: true, content: "Usage" }} />
              <hr className="border-kiwi-nav-active" />
            </div>
            <div className="flex flex-col gap-1">
              <CodeBlock code="ssss" />
              <CodeBlock code="d" />
            </div>
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
}: ComponentViewTabProps) => {
  return (
    <div className="flex items-center justify-between rounded-t-[8px] py-[8px] text-[0.9rem] font-medium">
      <ul className="flex gap-2">
        <li
          onClick={() => onCurrentTab("Preview")}
          className={`cursor-pointer rounded-[8px] px-[8px] py-[4px] transition-colors ${currentTab === "Preview" ? "bg-kiwi-nav-active text-white" : "hover:bg-kiwi-nav-active"}`}
        >
          Preview
        </li>
        <li
          onClick={() => onCurrentTab("Code")}
          className={`cursor-pointer rounded-[8px] px-[8px] py-[4px] transition-colors ${currentTab === "Code" ? "bg-kiwi-nav-active text-white" : "hover:bg-kiwi-nav-active"}`}
        >
          Code
        </li>
      </ul>

      <button className="rounded-[6px] px-[8px] py-[4px] transition-colors hover:bg-kiwi-code-tab">
        <svg
          width="18"
          height="18"
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
    </div>
  );
};

type ComponentViewProps = {
  currentView: ComponentTypes;
  isExpanded: boolean;
};

type ComponentViewTabProps = {
  currentTab: string;
  onCurrentTab: (tab: string) => void;
};

export default ComponentView;
