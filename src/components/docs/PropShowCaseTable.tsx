import { ComponentTypes } from "@/types";
//Prop table component
const PropTable = ({ data }: PropTableProps) => {
  const { meta } = data!;
  const columnHeaders = ["Prop", "Type", "Default"];
  return (
    <div
      className={`rounded-[12px] border border-kiwi-border-table w-full overflow-clip mb-3 relative`}
    >
      {!meta?.length && (
        <div className="absolute bg-kiwi z-0 w-full h-full opacity-70">
          No props
        </div>
      )}
      <table
        aria-label="Component Props"
        className={`w-full rounded-[12px]`}
      >
        <thead className={`border-b border-kiwi-border-table text-left bg-kiwi-codebody`}>
          <tr className={`bg--`}>
            {columnHeaders.map((h) => (
              <th
                key={h}
                className={`px-4 py-2 text-[0.8rem] font-bold text-muted-foreground`}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {meta!.map((m, i) => (
            <tr
              key={i}
              className={`text-left ${i !== meta!.length - 1 && `border-b border-kiwi-border`}`}
            >
              <td className={`px-4 py-3 `}>
                <code className="rounded-md px-1 py-0.5 font-mono border border-kiwi-border text-sm">
                  {m.prop}
                </code>
              </td>
              <td className={`px-4 py-3`}>
                <code className="rounded-md px-1 py-0.5 font-mono border border-kiwi-border text-sm">
                  {m.type}
                </code>
              </td>
              <td className={`px-4 py-3`}>
                <code className="rounded-md px-1 py-0.5 font-mono border border-kiwi-border text-sm">
                  {m.defaults || "-"}
                </code>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

type PropTableProps = {
  data?: ComponentTypes;
};

export default PropTable;