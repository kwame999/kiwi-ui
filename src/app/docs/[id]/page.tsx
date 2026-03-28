import { components } from "@/data/components";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import Workbench from "@/components/site/Workbench";
import { Suspense } from "react";
import BottomPageRoute from "@/components/site/BottomPageRoute";
import { docsPageRoutes } from "@/data/docsRoutes";
import CopyPageAction from "@/components/site/CopyPageAction";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const currentIndex = docsPageRoutes.findIndex((route) => route.id === id);
  const previousRoute =
    currentIndex > 0 ? docsPageRoutes[currentIndex - 1] : undefined;
  const nextRoute =
    currentIndex >= 0 && currentIndex < docsPageRoutes.length - 1
      ? docsPageRoutes[currentIndex + 1]
      : undefined;

  if (id === "components") {
    return (
      <div className="flex h-full min-h-0 flex-col">
        <div className="min-h-0 flex-1">
          <Suspense fallback={<div>Loading Workbench...</div>}>
            <Workbench data={components} />
          </Suspense>
        </div>
        <div className="px-9">
          <BottomPageRoute previous={previousRoute} next={nextRoute} />
        </div>
      </div>
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
    <div className="mt-11 flex h-full max-w-[896px] flex-col gap-8 px-12">
      <div className="flex justify-end">
        <CopyPageAction />
      </div>
      <article>
        <Content />
      </article>
      <BottomPageRoute previous={previousRoute} next={nextRoute} />
    </div>
  );
}
