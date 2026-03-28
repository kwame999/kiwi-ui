"use client";

import { useState } from "react";
import { CopyPageDropDown } from "./CopyPageDropDown";

export default function CopyPageAction() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onClick={() => {
        if (isOpen) {
          setIsOpen(false);
        }
      }}
    >
      <CopyPageDropDown
        isOpen={isOpen}
        onOpen={() => {
          setIsOpen((current) => !current);
        }}
      />
    </div>
  );
}
