import type { ComponentTypes } from "../types";

export const components: ComponentTypes[] = [
  // ─── Inputs ──────────────────────────────────────────────────────────────────
  {
    id: "ai-input",
    componentType: "AI Input",
    description: "An AI-powered textarea with model selector, web search toggle, mic button, and animated send button.",
    category: "Inputs",
    meta: [
      { prop: "placeholder", type: "string", defaults: "'Whats on your mind?'" },
    ],
    code: `import { AiInput } from "@/components/kiwi/ai-input"

export default function Example() {
  return <AiInput placeholder="What's on your mind?" />
}`,
  },
  {
    id: "inputfield",
    componentType: "Input Field",
    description: "A styled text input with optional label, placeholder, controlled/uncontrolled value, disabled state, and inline error message.",
    category: "Inputs",
    meta: [
      { prop: "label", type: "string", defaults: "" },
      { prop: "placeholder", type: "string", defaults: "'Type something...'" },
      { prop: "value", type: "string", defaults: "" },
      { prop: "onChange", type: "(value: string) => void", defaults: "" },
      { prop: "disabled", type: "boolean", defaults: "false" },
      { prop: "error", type: "string", defaults: "" },
    ],
    code: `import { InputField } from "@/components/kiwi/inputfield"

export default function Example() {
  return (
    <InputField
      label="Email"
      placeholder="you@example.com"
      onChange={(value) => console.log(value)}
    />
  )
}`,
  },
  {
    id: "tag-setter",
    componentType: "Tag Setter",
    description: "An animated expandable tag input with add/remove interactions and a save confirmation dialog.",
    category: "Inputs",
    meta: [
      { prop: "placeholder", type: "string", defaults: "" },
      { prop: "maxTags", type: "number", defaults: "5" },
      { prop: "resizing", type: "{ expands?: boolean; maxWidth?: number; width?: number }", defaults: "{ expands: false, maxWidth: 880, width: 420 }" },
      { prop: "onSave", type: "(tags: TagItem[]) => void", defaults: "" },
    ],
    code: `import { TagSetter } from "@/components/kiwi/tag-setter"

export default function Example() {
  return (
    <TagSetter
      placeholder="Add a tag"
      maxTags={5}
      onSave={(tags) => console.log(tags)}
    />
  )
}`,
  },
  {
    id: "color-selector",
    componentType: "Color Selector",
    description: "A color picker with six predefined swatches and a selection ring indicator.",
    category: "Inputs",
    meta: [
      { prop: "defaultColor", type: "string", defaults: "'coral'" },
      { prop: "onChange", type: "(color: string) => void", defaults: "" },
    ],
    code: `import { ColorSelector } from "@/components/kiwi/color-selector"

export default function Example() {
  return (
    <ColorSelector
      defaultColor="coral"
      onChange={(color) => console.log(color)}
    />
  )
}`,
  },
  {
    id: "checkbox",
    componentType: "Checkbox",
    description: "A styled checkbox with optional label, disabled state, and controlled onChange callback.",
    category: "Inputs",
    meta: [
      { prop: "label", type: "string", defaults: "" },
      { prop: "defaultChecked", type: "boolean", defaults: "false" },
      { prop: "disabled", type: "boolean", defaults: "false" },
      { prop: "onChange", type: "(checked: boolean) => void", defaults: "" },
    ],
    code: `import { Checkbox } from "@/components/kiwi/checkbox"

export default function Example() {
  return (
    <Checkbox
      label="Accept terms and conditions"
      onChange={(checked) => console.log(checked)}
    />
  )
}`,
  },
  {
    id: "toggle",
    componentType: "Toggle",
    description: "A binary on/off toggle switch with smooth sliding animation, optional label, and disabled state.",
    category: "Inputs",
    meta: [
      { prop: "label", type: "string", defaults: "" },
      { prop: "defaultChecked", type: "boolean", defaults: "false" },
      { prop: "disabled", type: "boolean", defaults: "false" },
      { prop: "onChange", type: "(checked: boolean) => void", defaults: "" },
    ],
    code: `import { Toggle } from "@/components/kiwi/toggle"

export default function Example() {
  return (
    <Toggle
      label="Enable notifications"
      defaultChecked
      onChange={(checked) => console.log(checked)}
    />
  )
}`,
  },
  {
    id: "filter-bar",
    componentType: "Filter Bar",
    description: "An animated sort/filter selector with CSS anchor-positioned hover bubble and animated text transitions.",
    category: "Inputs",
    meta: [
      { prop: "list", type: "string[]", defaults: "" },
    ],
    code: `import { FilterBar } from "@/components/kiwi/filter-bar"

export default function Example() {
  return <FilterBar list={["All", "Active", "Archived"]} />
}`,
  },

  // ─── Buttons ─────────────────────────────────────────────────────────────────
  {
    id: "buttons",
    componentType: "Buttons",
    description: "Button variants — primary, danger, ghost, and muted — each with idle, hover, active, and disabled states.",
    category: "Buttons",
    meta: [
      { prop: "variant", type: "'primary' | 'danger' | 'ghost' | 'muted'", defaults: "'primary'" },
      { prop: "children", type: "React.ReactNode", defaults: "" },
      { prop: "onClick", type: "() => void", defaults: "" },
      { prop: "disabled", type: "boolean", defaults: "false" },
      { prop: "type", type: "'button' | 'submit' | 'reset'", defaults: "'button'" },
    ],
    code: `import { Button } from "@/components/kiwi/buttons"

export default function Example() {
  return (
    <div className="flex gap-3">
      <Button variant="primary">Save</Button>
      <Button variant="ghost">Cancel</Button>
      <Button variant="danger">Delete</Button>
      <Button variant="muted">Muted</Button>
    </div>
  )
}`,
  },
  {
    id: "environmental-switch",
    componentType: "Environmental Switch",
    description: "A light/dark mode toggle with an animated sliding pill and sun/moon icons.",
    category: "Buttons",
    meta: [
      { prop: "defaultMode", type: "'light' | 'dark'", defaults: "" },
    ],
    code: `import { EnvSwitch } from "@/components/kiwi/environmental-switch"

export default function Example() {
  return <EnvSwitch defaultMode="dark" />
}`,
  },

  // ─── Feedback ────────────────────────────────────────────────────────────────
  {
    id: "alert-toast",
    componentType: "Alert Toast",
    description: "A dismissible toast notification with a countdown auto-dismiss timer and manual close button.",
    category: "Feedback",
    meta: [
      { prop: "message", type: "string", defaults: "" },
      { prop: "status", type: "'update' | 'success' | 'caution' | 'failed'", defaults: "" },
      { prop: "time", type: "number", defaults: "" },
    ],
    code: `import { AlertToast } from "@/components/kiwi/alert-toast"

export default function Example() {
  return (
    <AlertToast
      message="Changes saved successfully"
      status="success"
      time={4000}
    />
  )
}`,
  },
  {
    id: "update-toast",
    componentType: "Update Toast",
    description: "An update notification toast with version badge, description text, and skip/install action buttons.",
    category: "Feedback",
    meta: [
      { prop: "version", type: "string", defaults: "'v4.2'" },
      { prop: "title", type: "string", defaults: "'A new update is available'" },
      { prop: "description", type: "string", defaults: "" },
      { prop: "onSkip", type: "() => void", defaults: "" },
      { prop: "onInstall", type: "() => void", defaults: "" },
      { prop: "onDismiss", type: "() => void", defaults: "" },
    ],
    code: `import { UpdateToast } from "@/components/kiwi/update-toast"

export default function Example() {
  return (
    <UpdateToast
      version="v4.2"
      title="A new update is available"
      description="Bug fixes and performance improvements."
      onInstall={() => console.log("Installing...")}
      onSkip={() => console.log("Skipped")}
    />
  )
}`,
  },
  {
    id: "inline-alert",
    componentType: "Inline Alert",
    description: "An inline alert with four semantic variants (info, warning, success, error), icon, description, and optional action link.",
    category: "Feedback",
    meta: [
      { prop: "variant", type: "'info' | 'warning' | 'success' | 'error'", defaults: "'info'" },
      { prop: "title", type: "string", defaults: "" },
      { prop: "description", type: "string", defaults: "" },
      { prop: "action", type: "string", defaults: "" },
      { prop: "onAction", type: "() => void", defaults: "" },
      { prop: "onDismiss", type: "() => void", defaults: "" },
    ],
    code: `import { InlineAlert } from "@/components/kiwi/inline-alert"

export default function Example() {
  return (
    <InlineAlert
      variant="info"
      title="Heads up"
      description="Your session will expire in 5 minutes."
    />
  )
}`,
  },

  // ─── Navigation ──────────────────────────────────────────────────────────────
  {
    id: "dropdown",
    componentType: "Dropdown",
    description: "An animated dropdown menu with action and danger sections, keyboard shortcut hints, and gradient border.",
    category: "Navigation",
    meta: [
      { prop: "title", type: "string", defaults: "" },
    ],
    code: `import { DropDown } from "@/components/kiwi/dropdown"

export default function Example() {
  return <DropDown title="Options" />
}`,
  },

  // ─── Display ─────────────────────────────────────────────────────────────────
  {
    id: "label",
    componentType: "Status Badge",
    description: "A status badge with four semantic variants: pending, success, alert, and error.",
    category: "Display",
    meta: [
      { prop: "variant", type: "'pending' | 'success' | 'alert' | 'error'", defaults: "'pending'" },
      { prop: "label", type: "string", defaults: "" },
    ],
    code: `import { StatusBadge } from "@/components/kiwi/label"

export default function Example() {
  return (
    <div className="flex gap-2">
      <StatusBadge variant="pending" label="Pending" />
      <StatusBadge variant="success" label="Published" />
      <StatusBadge variant="alert" label="Review" />
      <StatusBadge variant="error" label="Failed" />
    </div>
  )
}`,
  },
  {
    id: "radial-card",
    componentType: "Radial Card",
    description: "A 3D perspective card with mouse-tracked radial gradient glow effect using Framer Motion.",
    category: "Display",
    meta: [
      { prop: "title", type: "string", defaults: "" },
      { prop: "description", type: "string", defaults: "" },
    ],
    code: `import { RadialCard } from "@/components/kiwi/radial-card"

export default function Example() {
  return (
    <RadialCard
      title="Kiwi UI"
      description="Radial glow card with mouse tracking."
    />
  )
}`,
  },
];

export const componentCategories = [
  "All",
  "Inputs",
  "Buttons",
  "Feedback",
  "Navigation",
  "Display",
];
