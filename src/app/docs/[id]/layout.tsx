import { SideBar } from "@/components/site/"
 
export default function Layout({children}:  Readonly<{
  children: React.ReactNode;
}> ) {
  return (
    <div className={`flex h-[calc(100vh-49px)]`}>
        <SideBar></SideBar>
        <main className={`flex-1 overflow-y-auto`}>
          {children}
        </main>
        
    </div>
    
  )
}

