import type { ComponentTypes } from "../types";

export const components: ComponentTypes[] = [
  {
    id: "environmental-switch",
    componentType: "Environmental Switch",
    description:
      "An environmental switch with hover animation and micro-interactions",
    category: "Buttons",
    meta: [
      { prop: "isOpen", type: "Boolean", defaults: "" },
      { prop: "content", type: "string", defaults: "" },
    ],
    code: "<p>hello</p>",
  },
  {
    id: "tag-setter",
    componentType: "Tag Setter",
    description:
      "An environmental switch with hover animation and micro-interactions",
    category: "Inputs",
    meta: [
      { prop: "isOpen", type: "Boolean", defaults: "sgbhg" },
      { prop: "zips", type: "Array[]", defaults: "" },
      { prop: "content", type: "string", defaults: "" },
    ],
  },
  {
    id: "save-btn",
    componentType: "Save Button",
    description:
      "An environmental switch with hover animation and micro-interactions",
    category: "Buttons",
    meta: [{ prop: "content", type: "string", defaults: "" }],
  },
  {
    id: "tool-bar",
    componentType: "Tool Bar",
    description:
      "An environmental switch with hover animation and micro-interactions",
    category: "Tools",
    meta: [],
  },
  {
    id: "morphing-card",
    componentType: "Morphing Card",
    description:
      "An environmental switch with hover animation and micro-interactions",
    category: "Cards",
    meta: [
      { prop: "", type: "", defaults: "" },
      { prop: "", type: "", defaults: "" },
    ],
  },
  {
    id: "filter-table",
    componentType: "Filter Table",
    description:
      "An environmental switch with hover animation and micro-interactions",
    category: "Tools",
    meta: [
      { prop: "", type: "", defaults: "" },
      { prop: "", type: "", defaults: "" },
    ],
  },
];

export const componentCategories = [
  "All",
  "Cards",
  "Tools",
  "Buttons",
  "Inputs",
  "Navigation",
];