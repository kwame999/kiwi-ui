'use client' // This is the secret sauce

import { useState } from 'react';
import { Table } from "./ComponentsTable";
import ComponentView from "./ComponentView";
import type { ComponentTypes } from '@/types';

export default function Workbench({ data }: { data: ComponentTypes[] }) {
  const [active, setActive] = useState<ComponentTypes>(data[0]);
  const handleSelect = (component: ComponentTypes) => {
    setActive(component);
  };
  return (
    <div className="flex h-full">
      <div className="flex-[2] p-8 overflow-y-auto">
        <h1 className="text-2xl font-bold mb-6">Components</h1>
        <Table data={data} onSelect={handleSelect} />
      </div>
      
      <div className="flex-1 border-l border-kiwi-border overflow-y-auto">
         <ComponentView  currentView={active} setActive={setActive} /> 
      </div>
    </div>
  );
}