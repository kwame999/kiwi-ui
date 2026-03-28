import { codeToHtml } from 'shiki';
import CopyButton from './CopyButton';

export default async function CodeBlock({ code }: { code: string }) {
  const html = await codeToHtml(code, {
    lang: 'tsx',
    theme: 'one-dark-pro' 
  });

  return (
    <div className="relative border border-kiwi-border bg-kiwi-codebody p-[14px] rounded-lg overflow-hidden group">
      <div 
        className="text-sm overflow-x-auto custom-scrollbar"
        dangerouslySetInnerHTML={{ __html: html }} 
      />
      
      <CopyButton code={code} />
    </div>
  );
}