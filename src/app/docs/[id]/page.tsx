import { components } from "@/data/components";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import Workbench from "@/components/site/Workbench";
import { Suspense } from "react";
import BottomPageRoute from "@/components/site/BottomPageRoute";
import { docsPageRoutes } from "@/data/docsRoutes";
import CopyPageAction from "@/components/site/CopyPageAction";

const docsPageMeta: Record<string, { title: string; description: string }> = {
  introduction: {
    title: "Introduction",
    description:
      "Welcome to kiwi-ui, a collection of accessible, reusable, and composable React components built for high-end micro-interactions and clean implementation.",
  },
  installation: {
    title: "Installation",
    description:
      "Install kiwi-ui into your project with your package manager of choice, then start adding components from the workbench.",
  },
  "figma-files": {
    title: "Figma Files",
    description:
      "This section hosts shared kiwi-ui design files, component specs, and token references for design handoff.",
  },
};

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
      <Suspense fallback={<div>Loading Workbench...</div>}>
        <Workbench
          data={components}
          previousRoute={previousRoute}
          nextRoute={nextRoute}
        />
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

  const pageMeta = docsPageMeta[id];

  return (
    <div className="mt-11 flex h-full max-w-[896px] flex-col gap-8 px-12">
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-wide">
            {pageMeta?.title ?? "Documentation"}
          </h1>
          <CopyPageAction />
        </div>
        {pageMeta?.description ? (
          <p className="w-[70%] text-[0.9rem] leading-[24px] text-kiwi-subheading">
            {pageMeta.description}
          </p>
        ) : null}
      </div>

      <article>
        <Content />
      </article>
      <BottomPageRoute previous={previousRoute} next={nextRoute} />
    </div>
  );
}
