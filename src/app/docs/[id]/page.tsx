import { components } from "@/data/components";
import { notFound } from "next/navigation";
import dynamic from 'next/dynamic';
import Workbench from "@/components/site/Workbench"; 

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  if (id === "components") {
    return <Workbench data={components} />;
  }

  const Content = dynamic(
    () => import(`@/components/docs/content/${id}.mdx`).catch(() => {
      return () => notFound();
    }),
    { loading: () => <p>Loading documentation...</p> }
  );

  return (
    <article className="prose prose-kiwi max-w-none p-10">
      <Content />
    </article>
  );
}