import { SectionTitle } from '@/components/text/section-title';

interface GrayBoxProps {
  title: React.ReactNode;
  description: string;
  children: React.ReactNode;
}

export function GrayBox({ title, description, children }: GrayBoxProps) {
  return (
    <div className="w-full px-5 py-10 bg-gray-100">
     {title}
      <p className="">{description}</p>
      <div className="mt-5 ml-[30%]">{children}</div>
    </div>
  );
}
