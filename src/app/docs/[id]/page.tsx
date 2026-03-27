import { components } from "@/data/components";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import Workbench from "@/components/site/Workbench";
import { Suspense } from "react";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  if (id === "components") {
    return (
      <Suspense fallback={<div>Loading Workbench...</div>}>
        <Workbench data={components} />
      </Suspense>
    );
  }

  const Content = dynamic(
    () =>
      import(`@/components/docs/content/${id}.mdx`).catch(() => {
        return () => notFound();
      }),
    { loading: () => <p>Loading documentation...</p> },
  );

  return (
    <div className="flex flex-col gap-8 max-w-[896px] h-full mt-5 px-12 ">
      <article>
        <Content />
      </article>
    </div>
  );
}