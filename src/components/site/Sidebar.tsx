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
    pathname === path ? "bg-kiwi-nav-active py-1.5" : "";

  return (
    <aside
      className={`w-[288px] py-6 flex flex-col gap-[24px] px-7 border-r bg-kiwi-sidenavbg border-kiwi-border-nav font-semibold shrink-0  text-gray-200`}
    >
      <section className={`gap-4 flex flex-col`}>
        <h1 className={`text-[0.7rem] px-[8px] font-medium text-kiwi-subheading tracking-wide`}>Getting Started</h1>
        <ul className={`flex flex-col gap-[4px] cursor-pointer text-[0.8rem] tracking-wide`}>
          {gettingStartedRoutes.map((route) => (
            <Link key={route.id} href={route.href}>
              <li
                className={`p-[4px] px-[8px] rounded-[8px] ${activeClass(route.href)}`}
              >
                {route.label}
              </li>
            </Link>
          ))}
        </ul>
      </section>

      <section className={`gap-4 flex flex-col`}>
        <h1 className={`text-[12px] px-[8px] font-medium text-kiwi-subheading tracking-wide`}>Components</h1>
        <ul className={`flex flex-col gap-[4px] cursor-pointer text-[0.8rem] tracking-wide`}>
          {components.map((c) => (
            <Link key={c.id} href={`/docs/components?id=${c.id}`}>
              <li
                className={`p-[4px] px-[8px] rounded-[8px] ${activeComponentId === c.id ? "bg-kiwi-nav-active text-kiwi-heading" : ""}`}
              >
                {c.componentType}
              </li>
            </Link>
          ))}
        </ul>
      </section>

      <section className={`gap-2 flex flex-col`}>
        <h1 className={`text-[12px] px-[8px] font-medium`}>Figma Components</h1>
        <ul className={`flex flex-col gap-[4px] cursor-pointer text-[14px]`}>
          <li className={`p-[4px] px-[8px] rounded-[8px]`}>Tag</li>
        </ul>
      </section>
    </aside>
  );
};

export { SideBar };
