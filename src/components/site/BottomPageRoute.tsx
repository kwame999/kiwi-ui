import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft02Icon, ArrowRight02Icon } from "@hugeicons/core-free-icons";

const BottomPageRoute = ({ previous, next }: BottomPageRouteProps) => {
  return (
    <nav className="mt-10 border-t border-kiwi-border pt-5">
      <div className="flex items-center justify-between gap-4 mb-16">
        {previous ? (
          <Link
            href={previous.href}
            className="group flex items-center gap-2 rounded-[8px] border border-kiwi-border px-3 py-2 text-[0.9rem] text-kiwi-subheading transition-colors hover:bg-kiwi-nav-active hover:text-kiwi-heading"
          >
            <HugeiconsIcon icon={ArrowLeft02Icon} size={18} />
            <span className="text-[0.8rem] uppercase tracking-wide opacity-70">
              Previous
            </span>
            <span className="font-medium">{previous.label}</span>
          </Link>
        ) : (
          <div />
        )}

        {next ? (
          <Link
            href={next.href}
            className="group ml-auto flex items-center gap-2 rounded-[8px] border border-kiwi-border px-3 py-2 text-[0.9rem] text-kiwi-subheading transition-colors hover:bg-kiwi-nav-active hover:text-kiwi-heading"
          >
            <span className="font-medium">{next.label}</span>
            <span className="text-[0.8rem] uppercase tracking-wide opacity-70">
              Next
            </span>
            <HugeiconsIcon icon={ArrowRight02Icon} size={18} />
          </Link>
        ) : (
          <div />
        )}
      </div>
    </nav>
  );
};

type BottomPageRouteLink = {
  href: string;
  label: string;
};

type BottomPageRouteProps = {
  previous?: BottomPageRouteLink;
  next?: BottomPageRouteLink;
};

export default BottomPageRoute;
