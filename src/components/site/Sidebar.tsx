"use client";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import { components } from "@/data/components";
import { gettingStartedRoutes } from "@/data/docsRoutes";

const SideBar = ({}) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const activeComponentId = searchParams.get("id");

  const activeClass = (path: string) =>
    pathname === path ? "bg-kiwi-nav-active" : "";

  return (
    <aside
      className={`w-[276px] py-6 flex flex-col gap-6 px-5 border-r  border-kiwi-border-nav  shrink-0`}
    >
      <section className={`gap-3 flex flex-col`}>
        <h1 className={`text-[0.75rem] px-[8px] font-medium text-kiwi-subheading`}>Getting Started</h1>
        <ul className={`flex flex-col gap-[6px] cursor-pointer text-[0.8rem] font-medium`}>
          {gettingStartedRoutes.map((route) => (
            <Link key={route.id} href={route.href}>
              <li
                className={`py-[6px] px-[8px] rounded-[6px] tracking-wide ${activeClass(route.href)}`}
              >
                {route.label}
              </li>
            </Link>
          ))}
        </ul>
      </section>

      <section className={`gap-3 flex flex-col`}>
        <h1 className={`text-[0.75rem] px-[8px] font-medium text-kiwi-subheading`}>Components</h1>
        <ul className={`flex flex-col gap-[6px] cursor-pointer text-[0.8rem] font-medium`}>
          {components.map((c) => (
            <Link key={c.id} href={`/docs/components?id=${c.id}`}>
              <li
                className={`py-1.5 px-[8px] rounded-[6px] tracking-wide ${activeComponentId === c.id ? "bg-kiwi-nav-active text-kiwi-heading" : ""}`}
              >
                {c.componentType}
              </li>
            </Link>
          ))}
        </ul>
      </section>
    </aside>
  );
};

export { SideBar };
