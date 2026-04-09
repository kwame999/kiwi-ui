'use client';
import Link from "next/link";
import { BentoGrid } from "@/components/site/BentoGrid";
import { Kiwi } from "@/components/site/Logo";
import { gridPattern } from "@/components/site/Patterns";

export default function Page() {
  return (
    <main
      className="min-h-screen text-[#e8e8e8] bg-kiwi-bg"
      style={{ backgroundImage: gridPattern }}
    >
      <div className="max-w-[1080px] mx-auto px-6 pt-6 pb-20">
        <div className="flex items-center gap-3 py-[52px] animate-fade-up">
          <div className="border p-5 rounded-md border-kiwi-border-table">
            <Kiwi size="86" />
          </div>
          <span className="text-[20px] text-white/12 mx-1">//</span>
          <p className="text-[13px] text-white/35 max-w-[380px] leading-relaxed">
            Open-source components built with Motion and Tailwind v4. Copy, paste, ship.
          </p>
          <div className="ml-auto flex gap-2 shrink-0">
            <Link
              href="/docs/figma-files"
              className="text-[12px] px-3.5 py-1.5 rounded-md border border-white/10 text-white/50 bg-transparent hover:text-white hover:border-white/20 transition-all cursor-pointer"
            >
              Figma Files
            </Link>
            <Link
              href="/docs/components"
              className="text-[12px] px-3.5 py-1.5 rounded-md border border-white/10 bg-white/7 text-white/75 hover:bg-white/11 transition-all cursor-pointer"
            >
              View Components
            </Link>
          </div>
        </div>
        <BentoGrid />
      </div>
    </main>
  );
}
