import { readFileSync } from "node:fs";
import { join } from "node:path";

const REGISTRY_PATHS: Record<string, string> = {
  "ai-input":             "registry/new-york/kiwi/inputs/ai-input/ai-input.tsx",
  "inputfield":           "registry/new-york/kiwi/inputs/inputfield/input-field.tsx",
  "tag-setter":           "registry/new-york/kiwi/inputs/tag-setter/tag-setter.tsx",
  "color-selector":       "registry/new-york/kiwi/inputs/color-selector/color-selector.tsx",
  "checkbox":             "registry/new-york/kiwi/inputs/checkbox/checkbox.tsx",
  "toggle":               "registry/new-york/kiwi/inputs/toggle/toggle.tsx",
  "filter-bar":           "registry/new-york/kiwi/inputs/filter-bar/filter-bar.tsx",
  "buttons":              "registry/new-york/kiwi/buttons/buttons/buttons.tsx",
  "environmental-switch": "registry/new-york/kiwi/buttons/environmental-switch/env-switch.tsx",
  "alert-toast":          "registry/new-york/kiwi/feedback/alert-toast/alert-toast.tsx",
  "update-toast":         "registry/new-york/kiwi/feedback/update-toast/update-toast.tsx",
  "inline-alert":         "registry/new-york/kiwi/feedback/inline-alert/inline-alert.tsx",
  "dropdown":             "registry/new-york/kiwi/navigation/dropdown/dropdown.tsx",
  "label":                "registry/new-york/kiwi/display/label/label.tsx",
  "radial-card":          "registry/new-york/kiwi/display/radial-card/radial-card.tsx",
};

export function getAllComponentSources(): Record<string, string> {
  const result: Record<string, string> = {};
  for (const [id, relativePath] of Object.entries(REGISTRY_PATHS)) {
    try {
      result[id] = readFileSync(join(process.cwd(), relativePath), "utf-8");
    } catch {
    }
  }
  return result;
}
