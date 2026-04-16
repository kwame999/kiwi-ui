'use client';

import { useEffect, useState } from 'react';
import CopyButton from './CopyButton';

export default function CodeBlock({ code }: { code: string }) {
  const [html, setHtml] = useState<string>('');

  useEffect(() => {
    let isMounted = true;

    const renderCode = async () => {
      const { codeToHtml } = await import('shiki');
      const highlightedHtml = await codeToHtml(code, {
        lang: 'tsx',
        theme: 'one-dark-pro',
        defaultColor: false
      });

      if (isMounted) {
        setHtml(highlightedHtml);
      }
    };

    void renderCode();

    return () => {
      isMounted = false;
    };
  }, [code]);

  return (
    <div className="relative overflow-hidden rounded-lg border border-kiwi-border bg-kiwi-codebody p-[14px] group">
      <div
        className="scrollbar-hidden max-h-[420px] overflow-auto text-sm"
        dangerouslySetInnerHTML={{ __html: html }}
      />

      <CopyButton code={code} />
    </div>
  );
}
