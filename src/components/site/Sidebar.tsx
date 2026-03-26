'use client'
import { usePathname } from "next/navigation";
import Link from "next/link";
import { components } from "@/data/components";

const SideBar = ({}) => {
  const pathname = usePathname();

  const activeClass = (path: string) => 
    pathname === path ? "bg-blue-600 text-white" : "";

  return (
    <aside className={`bg-red-500 w-[288px] py-6 flex flex-col gap-[24px] px-7  border-r font-medium shrink-0`}>
      <section className={`gap-2 flex flex-col`}>
        <h1 className={`text-[12px] px-[8px] font-medium`}>Getting Started</h1>
        <ul className={`flex flex-col gap-[4px] cursor-pointer text-[14px]`}> 
          <Link href="/docs/introduction">
            <li className={`p-[4px] px-[8px] rounded-[8px] ${activeClass('/docs/introduction')}`}>
              Introduction
            </li>
          </Link>
          <Link href="/docs/installation">
            <li className={`p-[4px] px-[8px] rounded-[8px] ${activeClass('/docs/installation')}`}>
              Installation
            </li>
          </Link>
        </ul>
      </section>

      <section className={`gap-2 flex flex-col`}>
        <h1 className={`text-[12px] px-[8px] font-medium`}>Components</h1>
        <ul className={`flex flex-col gap-[4px] cursor-pointer text-[14px]`}>
          {/* Main Workbench Page */}
          <Link href="/docs/components">
            <li className={`p-[4px] px-[8px] rounded-[8px] ${activeClass('/docs/components')}`}>
              Overview
            </li>
          </Link>
          
          {components.map(c => (
            <Link key={c.id} href={`/docs/components?id=${c.id}`}>
              <li className={`p-[4px] px-[8px] rounded-[8px] ${pathname.includes(c.id) ? 'bg-blue-600 text-white' : ''}`}>
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
}

export { SideBar }