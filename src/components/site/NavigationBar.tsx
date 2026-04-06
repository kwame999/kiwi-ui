'use client'
import { useEffect, useState } from "react"
import Link from "next/link"
import { HugeiconsIcon } from '@hugeicons/react'
import { Github01Icon, Sun01Icon, Moon02Icon } from '@hugeicons/core-free-icons'
import { Kiwi } from "./Logo"
import { docsPageRoutes } from "@/data/docsRoutes";
import { Github } from "./SVGs"
//Main navigation component
const NavigationBar = ({}) => {
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    if (typeof window === "undefined") {
      return "dark";
    }
    const storedTheme = localStorage.getItem("kiwi-theme");
    if (storedTheme === "light" || storedTheme === "dark") {
      return storedTheme;
    }
    return document.documentElement.getAttribute("data-theme") === "light"
      ? "light"
      : "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("kiwi-theme", theme);
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  };

  return (
    <nav className={`flex bg-kiwi-nav-bg  px-[36px] justify-between items-center py-[8.5px] border border-kiwi-border-nav text-[0.8rem] font-medium tracking-wide`}>
      <div className="flex items-center gap-6">
        <Kiwi></Kiwi>
        <ul className={`flex gap-[38px] cursor-pointer`}>
         <li className={`cursor-pointer transition-colors hover:text-amber-50`}>
            <Link href={docsPageRoutes[0].href}>Docs</Link>
          </li>
          <li className={`cursor-pointer transition-colors hover:text-amber-50`}>
            <Link href={docsPageRoutes[2].href}>Components</Link>
          </li>
          <li className={`cursor-pointer transition-colors hover:text-amber-50`}>
            <Link href={docsPageRoutes[3].href}>Figma files</Link>
          </li>
        </ul>

      </div>
      <ul className={`flex gap-[18px] items-center`}>
        <li className={`cursor-pointer`}>
          <button className={`cursor-pointer flex items-center`}>
            <a
              href="https://github.com/kwame999/kiwi-ui"
              target="_blank"
              rel="noreferrer"
            >
            <Github></Github>           
            </a>
          </button>
        </li>
        <li>
          <button className={`cursor-pointer flex items-center`}
                  onClick={handleToggleTheme}>
          <HugeiconsIcon icon = {theme === "light" ? Moon02Icon : Sun01Icon} size={18}></HugeiconsIcon>
          </button>
          </li>
      </ul>
    </nav>
  )
}


export default NavigationBar
