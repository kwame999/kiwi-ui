import { components } from "@/data/components";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import Workbench from "@/components/site/Workbench";
import { Suspense } from "react";
import BottomPageRoute from "@/components/site/BottomPageRoute";
import { docsPageRoutes } from "@/data/docsRoutes";

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

  const currentIndex = docsPageRoutes.findIndex((route) => route.id === id);
  const previousRoute =
    currentIndex > 0 ? docsPageRoutes[currentIndex - 1] : undefined;
  const nextRoute =
    currentIndex >= 0 && currentIndex < docsPageRoutes.length - 1
      ? docsPageRoutes[currentIndex + 1]
      : undefined;

  return (
    <div className="flex flex-col gap-8 max-w-[896px] h-full mt-5 px-12 ">
      <article>
        <Content />
      </article>
      <BottomPageRoute previous={previousRoute} next={nextRoute} />
    </div>
  );
}
