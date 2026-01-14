
import React from 'react';

interface Props {
  title: string;
  subtitle?: string;
}

const SectionHeading: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <div className="mb-12">
      <div className="flex items-center gap-4 mb-2">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
          {title}
        </h2>
        <div className="h-[2px] flex-grow bg-slate-800 rounded-full"></div>
      </div>
      {subtitle && <p className="text-slate-400 text-lg">{subtitle}</p>}
    </div>
  );
};

export default SectionHeading;
