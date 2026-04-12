"use client"

import { useState } from "react"
import { components } from "@/data/components"
import { InlineAlert } from "../../../registry/new-york/kiwi/feedback/inline-alert/inline-alert"
import { UpdateToast } from "../../../registry/new-york/kiwi/feedback/update-toast/update-toast"
import { StatusBadge } from "../../../registry/new-york/kiwi/display/label/label"
import { Toggle } from "../../../registry/new-york/kiwi/inputs/toggle/toggle"
import { InputField } from "../../../registry/new-york/kiwi/inputs/inputfield/input-field"
import { ColorSelector } from "../../../registry/new-york/kiwi/inputs/color-selector/color-selector"
import { RadalCard } from "../../../registry/new-york/kiwi/display/radial-card/radial-card"
import { Checkbox } from "../../../registry/new-york/kiwi/inputs/checkbox/checkbox"
import { Button } from "../../../registry/new-york/kiwi/buttons/buttons/buttons"
import { TagSetter } from "../../../registry/new-york/kiwi/inputs/tag-setter/tag-setter"
import { FilterBar } from "../../../registry/new-york/kiwi/inputs/filter-bar/filter-bar"

function BentoCard({
  className = "",
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <div
      className={`
        bg-[#0e0e0e] border border-white/[0.07] rounded-xl overflow-hidden
        flex flex-col transition-colors duration-200
        hover:border-white/[0.14] hover:bg-[#111]
        ${className}
      `}
    >
      {children}
    </div>
  )
}

function CardLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[10px] font-medium tracking-[0.07em] uppercase text-white/35 px-4 pt-[14px] shrink-0">
      {children}
    </p>
  )
}

function HeroCard() {
  return (
    <BentoCard className="[grid-column:span_5] [grid-row:span_4] p-7 justify-end relative">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_80%_60%_at_30%_40%,rgba(59,130,246,0.07),transparent_70%)]" />
      <span className="absolute top-5 right-5 text-[48px] font-extrabold text-white/[0.04] tracking-[-3px] leading-none pointer-events-none select-none">
        {components.length}+
      </span>
      <h2 className="text-[36px] font-bold tracking-[-1.5px] leading-none text-white relative mb-2.5">
        Kiwi<br />UI
      </h2>
      <p className="text-[12.5px] text-white/35 leading-relaxed relative max-w-[340px]">
        A collection of open-source UI components built with Motion and Tailwind v4.
      </p>
    </BentoCard>
  )
}

function BadgeCard() {
  return (
    <BentoCard className="[grid-column:span_4] [grid-row:span_2]">
      <CardLabel>Badge</CardLabel>
      <div className="flex-1 flex items-center justify-center gap-2 px-4 pb-3 flex-wrap">
        <FilterBar list={['All', 'Active', 'Archived']}/>
      </div>
    </BentoCard>
  )
}

function ButtonCard() {
  return (
    <BentoCard className="[grid-column:span_3] [grid-row:span_2]">
      <CardLabel>Button</CardLabel>
      <div className="flex-1 flex items-center justify-center gap-1.5 flex-wrap px-4 pb-3">
        <Button variant="primary">Explore</Button>
        <Button variant="ghost">Cancel</Button>
        <Button variant="danger">Delete</Button>
      </div>
    </BentoCard>
  )
}

function ToggleCard() {
  return (
    <BentoCard className="[grid-column:span_3] [grid-row:span_2]">
      <CardLabel>Toggle</CardLabel>
      <div className="flex-1 flex flex-col justify-center gap-3 pl-5 pb-3">
        <Toggle label="Notifications" defaultChecked />
        <Toggle label="Dark mode" />
      </div>
    </BentoCard>
  )
}

function InputCard() {
  return (
    <BentoCard className="[grid-column:span_4] [grid-row:span_2]">
      <CardLabel>Input</CardLabel>
      <div className="flex-1 flex flex-col justify-center gap-1.5 px-4 pb-3">
        <InputField placeholder="Search..." />
        <InputField placeholder="Email address" error="Invalid email" />
      </div>
    </BentoCard>
  )
}

function ColorCard() {
  return (
    <BentoCard className="[grid-column:span_5] [grid-row:span_2]">
      <CardLabel>Color Picker</CardLabel>
      <div className="flex-1 flex items-center justify-center gap-3 px-4 pb-4">
        <ColorSelector />
      </div>
    </BentoCard>
  )
}

function InlineAlertCard() {
  return (
    <BentoCard className="[grid-column:span_4] [grid-row:span_2]">
      <CardLabel>Inline Alert</CardLabel>
      <div className="flex-1 flex flex-col justify-center gap-2 px-4 pb-3">
        <InlineAlert variant="success" title="Changes saved" />
        <InlineAlert variant="warning" title="Review required" />
      </div>
    </BentoCard>
  )
}

function RadialCard() {
  return (
    <BentoCard className="[grid-column:span_3] [grid-row:span_3]">
      <CardLabel>Radial Card</CardLabel>
      <div className="flex-1 flex flex-col justify-center gap-1.5 px-3.5 pb-3.5">
        <RadalCard title="Edgar Allan Poe" description="To be or not to be — that is indeed the question." />
      </div>
    </BentoCard>
  )
}

function ToastCard() {
  return (
    <BentoCard className="[grid-column:span_4] [grid-row:span_3]">
      <CardLabel>Toast</CardLabel>
      <div className="flex-1 flex items-center px-3.5 pb-3.5">
        <UpdateToast />
      </div>
    </BentoCard>
  )
}

function TagSet() {
  return (
    <BentoCard className="[grid-column:span_5] [grid-row:span_2]">
      <CardLabel>Tag Setter</CardLabel>
      <div className="flex-1 flex flex-col px-4 pb-3.5 gap-0 items-center justify-center">
        <TagSetter/>
      </div>
    </BentoCard>
  )
}

function StatsCard() {
  return (
    <BentoCard className="[grid-column:span_3] [grid-row:span_2]">
      <div className="flex-1 flex flex-col items-center justify-center gap-0.5">
        <span className="text-[28px] font-bold text-white/85 tracking-[-1px]">{components.length}+</span>
        <span className="text-[11px] text-white/35">Components</span>
      </div>
    </BentoCard>
  )
}

function CheckboxCard() {
  return (
    <BentoCard className="[grid-column:span_3] [grid-row:span_3]">
      <CardLabel>Checkbox</CardLabel>
      <div className="flex-1 flex flex-col justify-center gap-2.5 pl-[18px] pb-3.5">
        <Checkbox label="Accept terms" defaultChecked />
        <Checkbox label="Subscribe to updates" defaultChecked />
        <Checkbox label="Remember me" />
        <Checkbox label="Enable analytics" />
      </div>
    </BentoCard>
  )
}

export function BentoGrid() {
  return (
    <div className="grid grid-cols-12 auto-rows-[80px] gap-2.5 animate-fade-up [animation-delay:100ms]">
      <HeroCard />
      <BadgeCard />
      <ButtonCard />
      <ToggleCard />
      <InputCard />
      <ColorCard />
      <InlineAlertCard />
      <RadialCard />
      <ToastCard />
      <TagSet />
      <StatsCard />
      <CheckboxCard />
    </div>
  )
}
