import { SideBar } from "@/components/site/"
 
export default function Layout({children}:  Readonly<{
  children: React.ReactNode;
}> ) {
  return (
    <div className={`flex h-screen overflow-hidden`}>
        <SideBar></SideBar>
        <main className={`flex-1`}>{children}</main>
    </div>
    
  )
}

