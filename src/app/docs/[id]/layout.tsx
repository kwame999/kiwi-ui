import { SideBar } from "@/components/site/";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`flex h-full min-h-0`}>
      <SideBar></SideBar>
      <main className={`min-h-0 flex-1 overflow-y-auto`}>{children}</main>
    </div>
  );
}
