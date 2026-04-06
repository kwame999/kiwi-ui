"use client";

import React from "react";
import { AiInput } from "../../../registry/new-york/kiwi/inputs/ai-input/ai-input";
import { InputField } from "../../../registry/new-york/kiwi/inputs/inputfield/input-field";
import { TagSetter } from "../../../registry/new-york/kiwi/inputs/tag-setter/tag-setter";
import { ColorSelector } from "../../../registry/new-york/kiwi/inputs/color-selector/color-selector";
import { Checkbox } from "../../../registry/new-york/kiwi/inputs/checkbox/checkbox";
import { Toggle } from "../../../registry/new-york/kiwi/inputs/toggle/toggle";
import { FilterBar } from "../../../registry/new-york/kiwi/inputs/filter-bar/filter-bar";
import { Button } from "../../../registry/new-york/kiwi/buttons/buttons/buttons";
import { EnvSwitch } from "../../../registry/new-york/kiwi/buttons/environmental-switch/env-switch";
import { AlertToast } from "../../../registry/new-york/kiwi/feedback/alert-toast/alert-toast";
import { UpdateToast } from "../../../registry/new-york/kiwi/feedback/update-toast/update-toast";
import { InlineAlert } from "../../../registry/new-york/kiwi/feedback/inline-alert/inline-alert";
import { DropDown } from "../../../registry/new-york/kiwi/navigation/dropdown/dropdown";
import { StatusBadge } from "../../../registry/new-york/kiwi/display/label/label";
import { RadalCard } from "../../../registry/new-york/kiwi/display/radial-card/radial-card";

export const componentRegistry: Record<string, React.ReactNode> = {
  "ai-input": <AiInput />,
  "inputfield": <InputField label="Email" placeholder="you@example.com" />,
  "tag-setter": <TagSetter />,
  "color-selector": <ColorSelector defaultColor="coral" />,
  "checkbox": <Checkbox label="Remember me" defaultChecked />,
  "toggle": <Toggle label="Enable notifications" defaultChecked />,
  "filter-bar": <FilterBar list={["All", "Active", "Archived"]} />,
  "buttons": (
    <div className="flex flex-wrap gap-3">
      <Button variant="primary">Save</Button>
      <Button variant="ghost">Cancel</Button>
      <Button variant="danger">Delete</Button>
      <Button variant="muted">Muted</Button>
    </div>
  ),
  "environmental-switch": <EnvSwitch defaultMode="dark" />,
  "alert-toast": (
    <AlertToast message="Changes saved successfully" status="success" time={5000} />
  ),
  "update-toast": (
    <UpdateToast
      version="v4.2"
      title="A new update is available"
      description="Bug fixes and performance improvements."
    />
  ),
  "inline-alert": (
    <InlineAlert
      variant="info"
      title="Heads up"
      description="Your session will expire in 5 minutes."
    />
  ),
  "dropdown": <DropDown title="Options" />,
  "label": (
    <div className="flex flex-wrap gap-2">
      <StatusBadge variant="pending" label="Pending" />
      <StatusBadge variant="success" label="Published" />
      <StatusBadge variant="alert" label="Review" />
      <StatusBadge variant="error" label="Failed" />
    </div>
  ),
  "radial-card": (
    <RadalCard title="Kiwi UI" description="Mouse-tracked radial glow effect." />
  ),
};
