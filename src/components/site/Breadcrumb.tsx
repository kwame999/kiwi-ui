import React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import Link from "next/link";

type BreadcrumbItem = { label: string; href?: string };

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <span className="flex items-center gap-2 text-[0.8rem] mb-3">
      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        if (isLast) {
          return <span key={item.label}>{item.label}</span>;
        }
        return (
          <React.Fragment key={item.label}>
            {item.href ? (
              <Link
                href={item.href}
                className="text-kiwi-inactive transition-colors hover:text-white/50"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-white/30">
                {item.label}
              </span>
            )}
            <HugeiconsIcon icon={ArrowRight01Icon} size={16} color="#ffffff4d" />
          </React.Fragment>
        );
      })}
    </span>
  );
}
